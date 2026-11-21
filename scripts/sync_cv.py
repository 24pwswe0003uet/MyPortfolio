#!/usr/bin/env python3
"""Build an updated PDF from the ORIGINAL downloaded CV + relevant new portfolio content.

Runs locally, no network; extracts current src/data/content.js via installed Node/esbuild.
Creates a clean addendum only for relevant items not already present in the original CV.
Never uses the previously generated PDF as input, preventing accumulated addenda.
"""
from __future__ import annotations
import argparse
import json
import re
import shutil
import subprocess
import sys
from datetime import datetime
from html import escape
from io import BytesIO
from pathlib import Path


def plain(value):
    if value is None:
        return ''
    if isinstance(value, (list, tuple)):
        return ', '.join(plain(v) for v in value if plain(v))
    if isinstance(value, dict):
        return plain(value.get('name') or value.get('title') or value.get('label') or '')
    return ' '.join(str(value).replace('\n', ' ').split())


def first(obj, *keys):
    if not isinstance(obj, dict):
        return ''
    return next((plain(obj.get(k)) for k in keys if plain(obj.get(k))), '')


def sanitize(text):
    # Built-in PDF fonts have limited glyph support; normalize punctuation, keep real text.
    return (str(text).replace('\u2014',' - ').replace('\u2013',' - ').replace('\u2019',"'")
            .replace('\u2018',"'").replace('\u201c','"').replace('\u201d','"')
            .replace('\u2022', '- ').encode('cp1252', 'replace').decode('cp1252'))


def key(text):
    return re.sub(r'[^a-z0-9]+', '', str(text).casefold())


def missing_from_original(text, original_text):
    k = key(text)
    return bool(k) and k not in key(original_text)


def read_portfolio(repo, fixture=None):
    if fixture:
        return json.loads(fixture.read_text(encoding='utf-8'))
    command = ['node', str(repo/'scripts'/'export_portfolio_data.mjs'), str(repo)]
    proc = subprocess.run(command, text=True, capture_output=True, cwd=repo,
                          encoding='utf-8', errors='replace')
    if proc.returncode:
        raise RuntimeError(f'Cannot read content.js: {proc.stderr.strip()}')
    return json.loads(proc.stdout)


def clean_text(pdf_reader):
    return '\n'.join(p.extract_text() or '' for p in pdf_reader.pages)


def item_selection(content, original_text):
    projects, experiences, awards, educations = [], [], [], []
    for entry in content.get('projects', []):
        if not isinstance(entry, dict) or entry.get('includeInCv') is False or entry.get('cv') is False:
            continue
        title = first(entry, 'title', 'name')
        if not title or not missing_from_original(title, original_text):
            continue
        tagline = first(entry, 'role', 'category')
        achievement = first(entry, 'achievement')
        contributions = entry.get('contributions') if isinstance(entry.get('contributions'), list) else []
        if contributions:
            blurb = '; '.join(plain(x).rstrip(' .;') for x in contributions[:3])
        else:
            blurb = first(entry, 'description', 'summary')
        projects.append({'title': title, 'meta': tagline, 'text': blurb[:450], 'achievement': achievement})
        if len(projects) >= 3:
            break
    nasa_selected = any('nasa' in key(str(e)) or 'kpopenfarmatlas' in key(str(e)) for e in projects)
    for entry in content.get('experiences', []):
        if not isinstance(entry, dict) or entry.get('includeInCv') is False:
            continue
        title = first(entry, 'role', 'title', 'position')
        if not title or not missing_from_original(title, original_text):
            continue
        if nasa_selected and 'nasa' in key(title):
            continue
        details = entry.get('details', [])
        text = '; '.join(plain(x) for x in details[:2]) if isinstance(details, list) else plain(details)
        experiences.append({'title': title, 'meta': first(entry,'period','date'), 'text': text[:320]})
        if len(experiences) >= 2:
            break
    for entry in content.get('awards', []):
        if not isinstance(entry, dict) or entry.get('includeInCv') is False:
            continue
        title = first(entry,'title','name','award')
        if not title or not missing_from_original(title, original_text):
            continue
        if nasa_selected and ('nasa' in key(title) or 'spaceapps' in key(title)):
            continue
        awards.append({'title': title, 'meta': first(entry, 'institution', 'issuer', 'date')})
        if len(awards) >= 3:
            break
    edlist = content.get('education',[])
    if isinstance(edlist, dict):
        edlist = list(edlist.values())
    if isinstance(edlist,list):
        for entry in edlist:
            if not isinstance(entry,dict): continue
            title = first(entry,'degree','qualification','title','program','institution','school')
            where = first(entry,'institution','school','university')
            if title and missing_from_original(title, original_text):
                educations.append({'title':title, 'meta':where})
                if len(educations) >= 2: break
    return {'projects':projects, 'experiences':experiences, 'awards':awards, 'education':educations}


def draw_addendum(sections):
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.enums import TA_LEFT
    from reportlab.lib import colors
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, HRFlowable
    from reportlab.lib.units import mm
    buf=BytesIO()
    styles=getSampleStyleSheet()
    title=ParagraphStyle('TitleCV',parent=styles['Normal'],fontName='Helvetica-Bold',fontSize=15,
                         leading=18,textColor=colors.HexColor('#1F2937'),spaceAfter=5)
    kicker=ParagraphStyle('SubCV',parent=styles['Normal'],fontSize=8.5,leading=12,
                          textColor=colors.HexColor('#5D6472'),spaceAfter=14)
    heading=ParagraphStyle('HeadCV',parent=styles['Normal'],fontName='Helvetica-Bold',fontSize=9.5,
                           leading=13,textColor=colors.HexColor('#30323B'),spaceBefore=11,spaceAfter=6)
    item=ParagraphStyle('ItemCV',parent=styles['Normal'],fontName='Helvetica-Bold',fontSize=9.3,
                        leading=12.8,textColor=colors.HexColor('#171717'),spaceAfter=2)
    body=ParagraphStyle('BodyCV',parent=styles['Normal'],fontSize=8.5,leading=12.4,
                        textColor=colors.HexColor('#454A56'),spaceAfter=8)
    story=[Paragraph('Selected Projects & Recent Achievements',title),
           Paragraph('Malak Saad Khan  |  Portfolio Highlights',kicker),
           HRFlowable(width='100%', thickness=.8, color=colors.HexColor('#C4C4C4'))]
    sections_order=[('projects','PROJECTS'),('experiences','EXPERIENCE'),('awards','AWARDS'),('education','EDUCATION')]
    for name, heading_text in sections_order:
        rows = sections.get(name,[])
        if not rows: continue
        story.append(Paragraph(heading_text,heading))
        for row in rows:
            line=sanitize(row['title'])
            if row.get('meta'):
                line += '  |  '+sanitize(row['meta'])
            blocks=[Paragraph(escape(line),item)]
            detail=row.get('text','')
            if row.get('achievement'):
                detail += ('  |  ' if detail else '')+str(row['achievement'])
            if detail:
                blocks.append(Paragraph(escape(sanitize(detail)),body))
            else:
                blocks.append(Spacer(1,3))
            story.append(KeepTogether(blocks))
    story.append(Spacer(1,10))
    story.append(Paragraph('Portfolio: malaksaadkhan0003.web.app  |  GitHub: github.com/24pwswe0003uet/MyPortfolio',kicker))
    doc=SimpleDocTemplate(buf,pagesize=A4,leftMargin=19*mm,rightMargin=19*mm,
                          topMargin=18*mm,bottomMargin=16*mm,title='Portfolio CV updates')
    doc.build(story)
    return buf.getvalue()


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo',type=Path,default=Path(__file__).resolve().parents[1])
    parser.add_argument('--target',type=Path,help='Where to write PDF; default: .cv-sync/preview-updated-cv.pdf')
    parser.add_argument('--data-json',type=Path,help='Test mode: use JSON fixture instead of src/data/content.js')
    parser.add_argument('--activate',action='store_true',help='Write updated CV to the original download path')
    args=parser.parse_args()
    try:
        from pypdf import PdfReader, PdfWriter
    except ImportError:
        parser.error('Missing Python requirements. Run: python -m pip install -r scripts/cv-sync-requirements.txt')
    repo=args.repo.expanduser().resolve()
    config=repo/'cv-source'/'config.json'
    if not config.exists():
        parser.error('No CV sync config. Run install_cv_sync.py first.')
    cfg=json.loads(config.read_text(encoding='utf-8'))
    original=repo/'cv-source'/'original-cv.pdf'
    cv_path=repo/cfg['cv_path']
    if not original.exists():
        parser.error(f'Missing original CV backup: {original}')
    content=read_portfolio(repo,args.data_json)
    old=PdfReader(str(original))
    old_text=clean_text(old)
    if len(key(old_text))<100:
        parser.error('Original CV text could not be extracted reliably. Your existing CV was NOT changed.')
    sections=item_selection(content,old_text)
    additions=sum(len(v) for v in sections.values())
    writer=PdfWriter()
    for page in old.pages:
        writer.add_page(page)
    if additions:
        update_reader=PdfReader(BytesIO(draw_addendum(sections)))
        for p in update_reader.pages: writer.add_page(p)
    output=(cv_path if args.activate else args.target or repo/'.cv-sync'/'preview-updated-cv.pdf').resolve()
    output.parent.mkdir(parents=True,exist_ok=True)
    if args.activate and cv_path.resolve() == original.resolve():
        parser.error('Refusing to overwrite source CV backup')
    with output.open('wb') as out: writer.write(out)
    report=repo/'.cv-sync'/'sync-report.txt'
    lines=[f'Generated {datetime.now().isoformat(timespec="seconds")}',
           f'Original CV: {original}', f'Published CV path: {cv_path}',
           f'Output: {output}',f'Added entries: {additions}',
           f'Pages: {len(writer.pages)}','',
           'New entries selected from portfolio (not already in ORIGINAL CV):']
    for section,items in sections.items():
        for it in items: lines.append(f'  [{section}] {it["title"]}')
    if not additions: lines.append('  None: original CV copied unchanged.')
    lines+=['','CAUTION: This method preserves original PDF pages and adds a curated update page. '
            'It does not redesign or rewrite the existing CV. Review the generated PDF before publishing.']
    report.write_text('\n'.join(lines)+'\n',encoding='utf-8')
    print('\n'.join(lines))

if __name__=='__main__':
    main()

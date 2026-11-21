// Extract text exports from the portfolio's src/data/content.js, without loading images/videos.
// Uses only Node.js. Optional esbuild fallback for unusual import formats.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const repo = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const source = path.join(repo, 'src', 'data', 'content.js');
if (!fs.existsSync(source)) {
  console.error(`Missing: ${source}`);
  process.exit(2);
}
const input = fs.readFileSync(source, 'utf8');
function replaceMediaImports(code) {
  // A default import used as an image/video URL becomes an empty-string placeholder.
  // The actual image file is untouched; we only evaluate textual portfolio metadata.
  return code.replace(/^\s*import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]([^'"]+\.(?:png|jpe?g|webp|gif|svg|mp4|webm|mov|pdf))(?:\?[^'"]*)?['"]\s*;?/gmi,
    (_full, variable) => `const ${variable} = "";`);
}
async function importText(code) {
  return await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
}
async function getExports() {
  try {
    return await importText(replaceMediaImports(input));
  } catch (firstError) {
    // Use the installed esbuild dependency if the source imports further JS modules.
    // Some modern Vite versions do not ship esbuild, hence the no-dependency path above.
    let esbuild;
    try { esbuild = createRequire(path.join(repo, 'package.json'))('esbuild'); }
    catch { throw new Error(`Could not evaluate content.js without further processing: ${firstError.message}. If your content file imports JS helpers, run npm install -D esbuild.`); }
    const out = await esbuild.build({
      entryPoints:[source],bundle:true,write:false,platform:'node',format:'esm',target:['node20'],logLevel:'silent',
      plugins:[{name:'cv-skip-media',setup(b){b.onLoad({filter:/\.(png|jpe?g|webp|gif|svg|mp4|webm|mov|pdf)$/i},()=>({contents:'export default "";',loader:'js'}))}}]
    });
    return await importText(out.outputFiles[0].text);
  }
}
try {
  const moduleExports=await getExports();
  const data={};
  for (const name of ['projects','experiences','awards','education','skills','personalInfo','profile','about','socials']) {
    if (!(name in moduleExports)) continue;
    try {
      data[name]=JSON.parse(JSON.stringify(moduleExports[name],(_k,v)=>typeof v==='function'||typeof v==='symbol'?undefined:v));
    } catch { /* skips unserializable exports */ }
  }
  if (!Array.isArray(data.projects) || !Array.isArray(data.experiences) || !Array.isArray(data.awards)) {
    throw new Error('Expected exports projects, experiences, awards from src/data/content.js');
  }
  process.stdout.write(JSON.stringify(data));
} catch (err) {
  console.error('CV sync could not read project data:',err?.message||String(err));
  process.exit(4);
}

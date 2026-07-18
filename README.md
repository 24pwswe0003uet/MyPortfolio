# Malak Saad Khan — Portfolio Website

A professional, animated personal portfolio website built for a Software Engineering undergraduate. Features dark/light theme, particle network background, loading splash animation, circular photo reveal, typewriter effect, and scroll-triggered animations.

## License & Usage

This repository is public for portfolio and demonstration purposes only. The code, design, and content are © Malak Saad Khan and are not open source. Please do not copy, reuse, or redistribute any part of this project without explicit permission. See the [LICENSE](LICENSE) file for details.

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS** (dark mode via `class` strategy)
- **Framer Motion** (all animations)
- **Lucide React** + **React Icons** (icons)
- **Deployment**: Firebase Hosting

## Features

- Dark/Light theme toggle with system preference detection
- Loading splash with letter-by-letter name reveal
- Interactive particle network background in hero
- Circular clip-path photo reveal animation
- Typewriter subtitle cycling through roles
- Reading progress bar
- Cursor glow effect
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Staggered fade/slide-in animations on all sections
- Project cards with hover lift and glow shadows
- "In Progress" animated badge

## Sections

1. **Hero** — Name, typewriter roles, photo with circular reveal, particle network
2. **About Me** — Biography and academic info
3. **Education** — Vertical timeline with coursework tags
4. **Skills** — Categorized skill badges with staggered animations
5. **Projects** — 4 project cards (2 personal, 2 client) with status badges
6. **Experience** — President role + conference participation
7. **Awards** — Recognition cards
8. **Contact** — Contact info + form (mailto fallback)
9. **Footer** — Copyright and social links

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

```bash
npm run build
firebase init hosting  # set public dir to "dist", SPA: Yes
firebase deploy
```

## Project Structure

```
src/
  components/   — Navbar, Footer, ThemeToggle, ProjectCard, SkillBadge, TimelineItem, LoadingSplash, ProgressBar, CursorGlow
  sections/     — Hero, About, Education, Skills, Projects, Experience, Awards, Contact
  context/      — ThemeContext.jsx
  data/         — content.js (all text content centralized)
  assets/       — profile-photo.jpg (replace with your photo)
public/         — MalakSaadKhan-CV.pdf (replace with your CV), favicon.svg
```

## Live Demo

🔗 **https://malaksaadkhan0003.web.app**

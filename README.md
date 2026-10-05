# Ibrahem Mohammad — Portfolio

A personal portfolio website built with React. It introduces the developer, presents skills and selected projects, shares background information, and provides contact links.

## Features
- Hero, skills, projects, about, and contact sections.
- Project cards with technology tags and live project links.
- Theme context for site-wide appearance state.
- Contact form components with EmailJS packages.
- Responsive layout and motion effects.

## Tech stack
- React 19 and Vite
- Tailwind CSS
- Framer Motion and Lucide React
- EmailJS

## Getting started
```bash
git clone https://github.com/IbrahemMohammad09/MyPortfolio.git
cd MyPortfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts
- `npm run dev` — start the development server.
- `npm run build` — build the production assets.
- `npm run preview` — preview the production build.
- `npm run lint` — run ESLint.

## Configuration
Configure the EmailJS service, template, and public key used by the contact form through the project's intended environment settings. Never commit private credentials.

## Project structure
- `src/components/Sections/` — portfolio page sections.
- `src/components/` — navigation, project cards, and form controls.
- `src/context/ThemeContext.jsx` — theme state.
- `src/utils/` — portfolio data and helper functions.

## License
No license is specified. Contact the repository owner before reuse or redistribution.

# Roshan Singh — Portfolio

A personal portfolio website built with React 19, Tailwind CSS 4, and Vite 6, featuring smooth animations, dark/light theme, and a custom
interactive cursor.

## Live Demo

Deployed on Netlify.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | React 19, Vite 6 |
| Styling | Tailwind CSS 4 |
| Animations | Motion (Framer Motion) 12 |
| Icons | React Icons |
| Deployment | Netlify |

## Features

- **Dark / Light Theme** — toggle with localStorage persistence and anti-flash script
- **Smooth Animations** — scroll-triggered fade-ins, staggered children, typing text effect
- **Custom Cursor** — interactive cursor that reacts to hoverable elements (disabled on touch devices)
- **Scroll Progress Indicator** — visual bar tracking page scroll position
- **Responsive Design** — mobile-first layout with collapsible navbar
- **Preloader** — animated loading screen before content renders
- **Smart Navbar** — hides on scroll down, reappears on scroll up, with backdrop blur

## Sections

| Section | Description |
| --- | --- |
| Hero | Introduction with typing animation, social links, and resume download |
| About | Bio and service cards (Frontend, Backend, Database, DevOps) |
| Experience | Timeline-based work history |
| Projects | Featured projects with live demo and source code links |
| Tech Stack | Skills organized by category with proficiency levels |
| Coding Profiles | Competitive programming stats (LeetCode, Codeforces, GeeksforGeeks) |

## Projects Showcased

- **MedCare** — Full-stack hospital management system (MERN, Cloudinary)
- **SmartTrip** — AI-powered travel planner (Firebase, Gemini AI, GoMaps API)
- **ShopSphere** — Food app with Spring Boot backend (Java, Spring Security, React)

## Getting Started

### Prerequisites

- Node.js 20.x
- npm

### Installation

```bash
# Clone the repository
git clone <https://github.com/><your-username>/portfolio.git
cd portfolio

# Install dependencies
npm install
cd client && npm install
```

### Development

```bash
# From the root directory
npm run dev
```

Opens at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Output is written to `client/dist/`.

### Preview Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── animations/     # Scroll-triggered animation wrappers
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   ├── sections/       # Hero, About, Experience, Projects, TechStack, CodingProfiles
│   │   │   └── ui/             # Reusable UI components (cursor, cards, toggles, etc.)
│   │   ├── context/            # Theme context provider
│   │   ├── data/               # Portfolio content (single source of truth)
│   │   ├── hooks/              # useActiveSection, useTheme
│   │   ├── utils/              # Constants and navigation config
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                 # Static assets and images
│   ├── index.html
│   └── vite.config.js
└── netlify.toml                # Deployment configuration
```

## Customization

All portfolio content — bio, experiences, projects, tech stack, and coding profiles — lives in `client/src/data/portfolio.js`. Update that single
file to personalize the site.

## Deployment

The project is configured for Netlify. Push to your connected branch and Netlify will automatically build and deploy using the settings in
`netlify.toml`.

## License

This project is open source and available under the MIT License.

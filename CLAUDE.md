# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite development server with hot reload
- **Build**: `npm run build` - Creates production build using Vite
- **Lint**: `npm run lint` - Runs ESLint on the codebase
- **Preview**: `npm run preview` - Serves the production build locally

## Architecture Overview

This is a React-based personal portfolio website built with:

- **Frontend Framework**: React 19.1.1 with JSX
- **Build Tool**: Vite with @vitejs/plugin-react
- **Routing**: React Router DOM v7.9.3 for client-side navigation
- **Styling**: Tailwind CSS with custom animations and utilities
- **Code Quality**: ESLint with React hooks and refresh plugins

### Project Structure

```
src/
├── App.jsx              # Main app component with Router setup and route definitions
├── main.jsx             # React app entry point
├── index.css            # Tailwind CSS imports
├── components/
│   ├── Header.jsx       # Navigation header with React Router Links
│   ├── Hero.jsx         # Main hero section with profile and content
│   ├── Footer.jsx       # Site footer
│   ├── TechStack.jsx    # Technology showcase grid
│   └── GitHubActivity.jsx # GitHub activity display
└── pages/
    ├── Home.jsx         # Home page (contains Hero component)
    ├── Blog.jsx         # Blog listing and posts
    ├── Projects.jsx     # Portfolio projects showcase
    ├── BookReviews.jsx  # Book reviews and reading stats
    └── Contact.jsx      # Contact form and information
```

### Component Architecture

- **App.jsx**: Router wrapper with Header, route definitions for all 5 pages, and Footer
- **Header.jsx**: Responsive navigation with React Router Links and active state highlighting
- **Hero.jsx**: Complex two-column layout containing profile photo, about section, tech stack, GitHub activity, and main intro text with CTAs (used on Home page)
- **Pages**: Each page follows consistent dark theme with gradient backgrounds, animations, and responsive design
  - **Home**: Contains the main Hero component
  - **Blog**: Blog post grid with placeholder content
  - **Projects**: Project showcase with tech stack tags and links
  - **BookReviews**: Book review cards with ratings and reading statistics
  - **Contact**: Contact form and social media links

### Routing Structure

- `/` - Home page with Hero section
- `/blog` - Blog posts and articles
- `/projects` - Portfolio projects
- `/book-reviews` - Book reviews and reading stats
- `/contact` - Contact form and information

### Styling Approach

- Uses Tailwind CSS with extensive custom animations defined in `tailwind.config.js`
- Custom animations include: fadeInUp, fadeInRight, shimmer, float, and pulse-slow
- Gradient backgrounds and hover effects throughout
- Dark theme with blacks, grays, and accent colors
- Responsive design with mobile-first approach

### Key Development Notes

- No test framework is currently configured
- Uses React 19's latest features including the new JSX runtime
- ESLint configured with custom rules for unused variables with pattern matching
- Vite handles fast refresh and HMR for development
- All components use functional components with hooks
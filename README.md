# Nick's Portfolio

A clean, modular, and minimal portfolio built with Next.js 15 and TypeScript.

## Architecture

This project follows a modular architecture with clear separation of concerns:

```
/app                    # Next.js App Router
  /api                  # Backend API routes
  /fonts                # Custom fonts
  layout.tsx            # Root layout
  page.tsx              # Home page
  globals.css           # Global styles

/components
  /ui                   # Reusable UI components (Button, Card, etc.)
  /layout               # Layout components (Header, Footer)
  /sections             # Page sections (Hero, Projects, etc.)

/lib                    # Utility functions and helpers
/types                  # TypeScript type definitions
/public                 # Static assets (images, fonts, etc.)
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js

## Color Scheme

```css
--text-white: #ededed
--background-color: #131313
--stroke-border: #292929
--hover-state: #414141
--normal-text: #b3b3b3
--highlight-dark: #292929
--white-smoke: #e7e7e7
```

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Guidelines

### Component Structure
- Keep components small and focused
- Use TypeScript for all components
- Export components as named exports
- Place shared UI components in `/components/ui`

### Styling
- Use Tailwind CSS utility classes
- Custom colors are available as Tailwind classes (e.g., `text-text-white`, `bg-background-color`)
- CSS variables are defined in `globals.css` for direct use

### TypeScript
- Define types in `/types` directory
- Use interfaces for object shapes
- Avoid `any` types

### API Routes
- Place API routes in `/app/api`
- Use Next.js Route Handlers
- Return JSON responses with proper status codes

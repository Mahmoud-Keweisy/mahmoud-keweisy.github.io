# Mahmoud Keweisy – Digital CV

A modern, responsive digital CV built with Next.js, React, TypeScript, and Tailwind CSS. Features include dark mode, smooth animations, print-friendly layout, and full accessibility support.

## Features

- 🎨 Modern design with glass-morphism effects
- 🌓 Dark mode with system preference detection
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG 2.1 AA accessibility compliant
- 🖨️ Print-optimized CV layout
- ⚡ Optimized performance with lazy loading
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form integration
- 🔍 SEO optimized with structured data

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Deployment**: Static export for GitHub Pages

## Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Run development server:

\`\`\`bash
npm run dev
\`\`\`

Build for production:

\`\`\`bash
npm run build
\`\`\`

## Project Structure

- \`app/\` - Next.js App Router pages and layouts
- \`components/\` - React components
- \`data/\` - Profile data and content
- \`hooks/\` - Custom React hooks
- \`lib/\` - Utility functions
- \`public/\` - Static assets

## Customization

Update your information in \`data/profile.ts\` to customize the CV content including experience, education, skills, certifications, and projects.

### Adding Project Galleries

To add a project with an image gallery:

- Place images under `public/projects/<project-slug>/` (e.g., `public/projects/mini-misie/`).
- Add a project entry in `data/profile.ts` with `name`, `description`, `technologies`, optional `image` (cover), and set `demo` to the internal route (e.g., `/projects/mini-misie/`).
- Create a page at `app/projects/<project-slug>/page.tsx` to render the gallery. The existing `mini-misie` page is an example that auto-loads images from the corresponding `public` folder.

## License

© 2025 Mahmoud Keweisy. All rights reserved.

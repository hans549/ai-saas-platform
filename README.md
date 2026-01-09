# AI SaaS Platform

A modern, feature-rich AI SaaS platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Beautiful UI**: Gradient designs, animations with Framer Motion
- **Responsive Design**: Works seamlessly on all devices
- **Performance Optimized**: Fast loading with Vite and optimized builds
- **Type Safe**: Full TypeScript support

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── pages/
│   │   └── Index.tsx       # Main landing page
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

## Customization

### Colors

Edit the color scheme in `tailwind.config.js` and `src/index.css` to match your brand.

### Content

Update the content in `src/pages/Index.tsx` including:
- Hero section text
- Features
- Pricing plans
- Stats and metrics

### Animations

Adjust animation settings using Framer Motion props in the components.

## License

MIT

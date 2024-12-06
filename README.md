# Next.js Application with UI Components

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), featuring a modern UI with custom components and styling.

## Features

- Responsive layout with Header and Sidebar components
- Custom UI components including buttons, drawers, and sheets
- Tailwind CSS for styling
- TypeScript support
- SVG icons and assets

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Core application files including layout and global styles
- `/components` - React components
  - `/ui` - Reusable UI components (button, drawer, sheet)
  - `Header.tsx` - Main navigation header
  - `Sidebar.tsx` - Application sidebar
  - `NewDocumentButton.tsx` - Document creation button
- `/lib` - Utility functions
- `/public` - Static assets including SVG icons

## Styling

This project uses:
- [Tailwind CSS](https://tailwindcss.com) for styling
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

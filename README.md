# Tan Shi Sian — Portfolio

Interactive portfolio for a Site Reliability Engineer and platform specialist, built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Local development

```powershell
$env:PATH="C:\Program Files\nodejs;" + $env:PATH
npm install
npm run dev
```

## Production build

```powershell
npm run build
npm run preview
```

## Deployment

The repository includes `.github/workflows/deploy.yml`. Pushes to `main` build the Vite app and deploy `dist/` to GitHub Pages.
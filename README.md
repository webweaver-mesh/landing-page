# laPlace Landing Page

Landing page built with **React**, **Tailwind CSS**, and **Vite**. Includes a marketing home, pricing/plan flows (Starter, Pro, Business), and sample template pages (Theater, Wine Trader, Fashion Show, Techstartup, Retro).

---

## Getting started

**Dev build:**

```bash
npm install
npm run dev
```

**Production build:**

```bash
npm run build
npm run preview
```

---

## Scripts

| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Start development server   |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run ESLint on `.js` / `.jsx` |

---

## File structure

```
landing-page/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── README.md
├── guidelines.md          ← Conventions for edits and new features
│
└── src/
    ├── main.jsx            # App entry (BrowserRouter, root render)
    ├── App.jsx             # Route definitions
    ├── index.css           # Tailwind + global base/utilities
    │
    ├── pages/              # One component per route
    │   ├── Home.jsx
    │   ├── NotFound.jsx
    │   ├── Pricing.jsx
    │   ├── Starter.jsx
    │   ├── Pro.jsx
    │   ├── Business.jsx
    │   ├── SampleTemplates.jsx
    │   └── templates/      # Themed sample pages
    │       ├── Theater.jsx
    │       ├── WineTrader.jsx
    │       ├── FashionShow.jsx
    │       ├── Techstartup.jsx
    │       └── Retro.jsx
    │
    └── components/         # Shared UI
        ├── TopBar.jsx
        ├── AuthStep.jsx
        ├── AuthPlaceholder.jsx
        ├── PaymentStep.jsx
        └── DownloadsStep.jsx
```

---

## Key files to edit

| Goal                     | File(s) |
|--------------------------|--------|
| Add or change routes     | `src/App.jsx` |
| Home page content/layout | `src/pages/Home.jsx` |
| Global styles / Tailwind | `src/index.css` |
| Sample templates list    | `src/pages/SampleTemplates.jsx` |
| New template page        | `src/pages/templates/*.jsx` + route in `App.jsx` |
| Shared header on sub-pages | `src/components/TopBar.jsx` |

---

## Conventions and guidelines

For consistent formatting and structure, see **[guidelines.md](./guidelines.md)**. 
It covers:

- Tech stack and file naming
- React/JSX and Tailwind usage
- Routing and sample template patterns
- Checklist for new pages and features

For notable changes and optimizations or optimizations, see **[review.md](./review.md)**

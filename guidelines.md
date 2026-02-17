# Project guidelines

This document describes conventions and format used in this sample-project so that changes stay consistent.

---

## Tech stack

- **React** 19 (function components only)
- **Vite** (build tool)
- **React Router** v6 (client-side routing)
- **Tailwind CSS** v3 (all styling; no separate CSS modules or Sass)
- **ESLint** (React + React Refresh; run with `npm run lint`)

---

## File and folder structure

```
src/
  main.jsx           # Entry: BrowserRouter, App, index.css
  App.jsx             # Routes only; no layout shell
  index.css           # Tailwind directives + @layer base/utilities only
  pages/              # One component per route
    Home.jsx
    NotFound.jsx
    Pricing.jsx
    Starter.jsx
    Pro.jsx
    Business.jsx
    SampleTemplates.jsx
    templates/        # Sample template pages (themed variants)
      Theater.jsx
      WineTrader.jsx
      FashionShow.jsx
      Techstartup.jsx
      Retro.jsx
  components/        # Shared UI used by multiple pages
    TopBar.jsx
    AuthStep.jsx
    AuthPlaceholder.jsx
    PaymentStep.jsx
    DownloadsStep.jsx
```

- Use **`.jsx`** for all React components (no `.tsx` unless the project is migrated to TypeScript).
- Use **PascalCase** for component file names (e.g. `SampleTemplates.jsx`, `TopBar.jsx`).
- Config files at project root: `vite.config.js`, `tailwind.config.cjs`, `postcss.config.cjs`.

---

## React and JSX conventions

- **One default export per file**: the component name should match the file name (e.g. `export default function SampleTemplates()` in `SampleTemplates.jsx`).
- **Function components only**; no class components.
- **Imports**: use explicit `.jsx` extensions for local imports (e.g. `import Home from './pages/Home.jsx'`).
- **React Router**: use `Link` from `react-router-dom` for in-app navigation; use `<a href="#section">` only for same-page anchors (e.g. `#features`, `#pricing`).
- **Fragments**: use `<>...</>` when a wrapper div is not needed.
- **Lists**: always set a stable `key` on mapped elements (e.g. `key={tpl.name}` or `key={tier.name}`).

---

## Styling (Tailwind)

- **All styling via Tailwind utility classes.** No inline `style` objects for layout/colors unless dynamic (e.g. template-specific brand colors).
- **Global layout utility**: use the existing class `container-pad` for horizontal padding and max-width (defined in `src/index.css` as `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`). Use it on a wrapper div for page content.
- **Base theme**: the app is dark-themed (`bg-slate-950`, `text-slate-100` in `index.css`). Default text is `text-white` or `text-slate-300` for secondary; borders use `border-white/10` or `ring-white/10`.
- **Cards/sections**: use `rounded-3xl`, `bg-white/5`, `ring-1 ring-white/10` for the standard card look; use `rounded-xl` or `rounded-2xl` for buttons and smaller blocks.
- **Buttons**:
  - Primary (filled): `rounded-lg` or `rounded-xl`, `bg-white`, `text-slate-900`, `hover:bg-slate-100`, `focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60`.
  - Secondary (outline/ghost): `bg-white/10`, `ring-1 ring-white/15`, `hover:bg-white/15`, `text-white`.
- **Typography**: use `text-sm` / `text-base` for body; `text-2xl` / `text-3xl` / `sm:text-4xl` for headings; `font-semibold` for headings and CTAs; `tracking-tight` for large headings.
- **Spacing**: use Tailwind spacing scale (`gap-3`, `gap-6`, `mt-4`, `py-10`, `container-pad`). Section spacing is often `pb-20` or `py-10`.
- **Template pages** (e.g. Theater, WineTrader) may override the default slate theme (e.g. `bg-black`, custom backgrounds) but should still use `container-pad` and consistent patterns for links/buttons where possible.

---

## Routing

- **Routes** are defined in `App.jsx` with `<Route path="..." element={<... />} />`. The catch-all is `path="*"` with `element={<NotFound />}`.
- **Path conventions**:
  - Home: `/`
  - Pricing: `/pricing`
  - Sample templates list: `/sample-templates`
  - Individual template: `/templates/theater`, `/templates/winetrader`, `/templates/fashionshow`, `/templates/techstartup`, `/templates/retro` (lowercase).
  - Plan pages: `/starter`, `/pro`, `/business`
- **Adding a new page**: (1) add a new component under `src/pages/` (or `src/pages/templates/` for template variants), (2) import it in `App.jsx`, (3) add a `<Route path="..." element={<Component />} />`.

---

## Sample templates (content and links)

- **SampleTemplates page** (`src/pages/SampleTemplates.jsx`) lists template cards. Each item should have:
  - `name` – short title (e.g. "Theater", "Wine Trader")
  - `description` – one line describing the template
  - `style` – design note (e.g. "Black & white, minimalist.")
  - `href` – route path (e.g. `/templates/theater`)
- Cards are implemented as `<Link to={tpl.href}>` wrapping a `<section>`, so the whole card is clickable.
- **Adding a new sample template**: (1) add a new page under `src/pages/templates/` (e.g. `NewTemplate.jsx`), (2) add a route in `App.jsx` (e.g. `/templates/newtemplate`), (3) add an entry to the `templates` array in `SampleTemplates.jsx` with `name`, `description`, `style`, and `href`.

---

## Components

- **TopBar**: used on plan pages (Starter, Pro, Business) and template pages. Accepts `label` (string). Renders the laPlace logo (link to `/`), the label, and a "View pricing" link. Use it for consistency when adding new sub-pages that are not the main marketing home.
- **AuthStep / DownloadsStep / PaymentStep**: used in the Starter/Pro/Business flows; keep their props and usage as in existing pages.

---

## Scripts and tooling

- `npm run dev` – start dev server (Vite).
- `npm run build` – production build.
- `npm run preview` – preview production build.
- `npm run lint` – run ESLint on `.js` and `.jsx` files.

---

## Formatting and style (no Prettier config)

- **Indentation**: 2 spaces.
- **Quotes**: single quotes for JS/JSX strings where the project already uses them; double quotes for JSX attributes when needed to avoid escaping.
- **Semicolons**: used at end of statements (default in this codebase).
- **Line length**: keep lines readable; break long JSX or long attribute lists across lines with one prop per line when it improves clarity.
- **Trailing newline**: one newline at end of file.

---

## Summary checklist for new changes

- [ ] New pages go in `src/pages/` or `src/pages/templates/`, one component per file, default export, PascalCase file name.
- [ ] Imports use `.jsx` for local components; use `Link` for app routes, `<a href="#id">` for same-page anchors.
- [ ] Styling is Tailwind-only; use `container-pad` for content width; follow existing button/card/section patterns.
- [ ] New routes added in `App.jsx`; new sample templates also get an entry in `SampleTemplates.jsx` with `name`, `description`, `style`, `href`.
- [ ] Run `npm run lint` before committing.

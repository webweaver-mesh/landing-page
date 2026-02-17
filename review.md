# Code Review: Template Pages

Review of the five template pages in `src/pages/templates/`: **Techstartup.jsx**, **Retro.jsx**, **WineTrader.jsx**, **FashionShow.jsx**, and **Theater.jsx**. This document notes potential issues and inconsistencies only; no code was changed.

**Fixed / Open:** Each issue is marked as **Fixed** or **Open** so you can track what’s done.

---

## 1. Typos and copy

### WineTrader.jsx
- **[Fixed]** **"Vinyard" vs "vineyard"**: The word was misspelled in two places (user-facing text and asset import `vinyard.jpg`). Both have been corrected to "vineyard".
- *(No other typo/copy issues in this section.)*

---

## 2. Commented-out code

### WineTrader.jsx (lines 70–71)
- A `<div>` for what looks like a caption/label is commented out above the second image block. Either remove it or document why it’s kept (e.g. “alternative layout”).

### FashionShow.jsx (line 44)
- A commented-out `<div>` for caption placement (`inset-x-6 bottom-6`) remains; the active caption uses `left-5 top-5`. Same suggestion: remove or add a short comment explaining the alternative.

---

## 3. Naming and consistency

### Component / PascalCase
- **Techstartup.jsx**: The component (and file) is `Techstartup` (lowercase “s”). Other templates use clear PascalCase: `WineTrader`, `FashionShow`, `Theater`, `Retro`. For consistency, consider **TechStartup** (capital “S”) so all template names follow the same convention.

### Display names
- In **SampleTemplates.jsx**, display names are “Wine Trader”, “Fashion Show”, “Retro Games”, but “Techstartup” (one word). If you want a consistent pattern (e.g. “Tech Startup”), the listing and any TopBar/labels could be aligned.

---

## 4. Styling and markup

### Theater.jsx (line 30)
- The paragraph uses a raw Unicode em dash: *"no photography required—just typography"*.
- Other templates use the HTML entity `&mdash;` (e.g. FashionShow line 20: `headlines&mdash;no`). Using `&mdash;` here would match the rest and avoid any encoding/display quirks.

### TopBar on light backgrounds
- **TopBar.jsx** uses `border-b border-white/10` and light text (e.g. `text-slate-300`). On **Techstartup.jsx**, the page background is light (`bg-[#f5f5f0]`). The header may have low contrast or look off on that template; consider a variant or overrides for light template pages.

### Retro.jsx
- Uses inline `style={{}}` with a `GREEN` constant instead of Tailwind. That’s valid for a single accent color but is the only template that relies on inline styles; the rest are Tailwind-only. Worth noting if you later standardize on one approach.

---

## 5. Accessibility and semantics

### Buttons
- All templates use `<button>` for primary CTAs (e.g. “Book a tasting”, “Get early access”, “RSVP”). None have `onClick` or `to` (they’re not links). For non-functional buttons, consider:
  - Adding `type="button"` so they don’t submit forms if used inside a form later.
  - Or converting to `<Link>` or `<a>` if they should navigate.

### Links
- “Back to sample templates” and “Back to home” are correctly implemented as `<Link>`. No issues found there.
- Retro.jsx nav links don’t add a hover background (only border color); other templates often use `hover:bg-*` or `hover:border-*`. Optional: add a subtle hover state for consistency and discoverability.

---

## 6. Assets

### Image imports
- **WineTrader.jsx**: Imports `cuvee.png` and `vineyard.jpg` from `../../assets/templates/`.
- **FashionShow.jsx**: Imports `model.png` and `runway.png` from `../../assets/templates/`.
- **Techstartup**, **Retro**, and **Theater** do not import template images.

In this repo, `src/assets/templates/` does not appear (e.g. no `cuvee.png`, `vineyard.jpg`, etc. under `src/assets/`). If those files are missing or not committed, WineTrader and FashionShow will break at runtime. Confirm that:
- The `templates` folder exists under `src/assets/`, and
- The filenames match the imports (including the `vineyard` vs `vineyard` spelling if you change it).

### WineTrader image vs caption
- First image: `wineDetail` (vineyard.jpg), alt *"Signature cuvée bottle illustration"*, caption *"Welcome to our lovely vineyard"*.
- Second image: `wineHero` (cuvee.png), alt *"Tasting notes and vineyard details"*, caption *"Meet our signature cuvée"*.
- The first image is described as “vineyard” in the caption but “cuvée bottle” in the alt; the second is “cuvée” in the caption and “tasting notes and vineyard details” in the alt. Consider aligning alt text with the actual image content and caption so screen readers and SEO match the visuals.

---

## 7. Small / optional items

### Retro.jsx (line 67)
- Uses `key={i}` with an eslint-disable for `react/no-array-index-key`. The grid is static (snake + food positions fixed), so index is stable here. If the list were ever dynamic, a stable id would be safer; for this static demo it’s acceptable.

### WineTrader.jsx stats (lines 32–35)
- Uses `label` as the key in the `.map()` (e.g. “Generations”, “Organic vines”, “Bordeaux”). Keys are unique in this list; no issue. If you ever reuse the pattern with duplicate labels, switch to a unique key.

---

## Summary table

| Template     | Fixed / Open | Typos / copy | Commented code | Naming | Styling / markup | A11y / buttons | Assets        |
|-------------|--------------|--------------|----------------|--------|------------------|----------------|---------------|
| Techstartup | —            | —            | —              | Yes    | TopBar on light  | Buttons        | —             |
| Retro       | —            | —            | —              | —      | Inline styles    | Link hover     | —             |
| WineTrader  | Typos ✓      | Fixed        | Yes            | —      | —                | Buttons        | Paths / alt   |
| FashionShow | —            | —            | Yes            | —      | —                | Buttons        | Paths         |
| Theater     | —            | —            | —              | —      | Em dash          | Buttons        | —             |

Recommend addressing the **typos** and **asset paths** first, then **commented-out code** and **button semantics**, and finally naming and styling consistency as needed.

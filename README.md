# Mahmoud Keweisy – Digital CV

This repository hosts a static, themed Digital CV for Mahmoud Keweisy. It merges:

- Structure: Adapted from the CV project flow (hero/header → summary → experience → education → skills → certifications → portfolio → footer)
- Theme: Cravelle-inspired premium design (variables, typography, spacing, dark mode)
- Content: Source of truth is this repo’s `index.html`

## Preview locally

You can open `index.html` directly or serve it for smooth scrolling and consistent asset loading.

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Files of interest

- `index.html` – Page markup and minimal JS (theme toggle, animations)
- `assets/css/variables.css` – Design tokens (colors, typography, spacing, dark mode)
- `assets/css/base.css` – Base/reset and typography
- `assets/css/site.css` – Page-specific styles (nav, sections, grids, modal, buttons)
- `assets/images/profile-placeholder.svg` – Placeholder avatar (replace with a real image as needed)

## Customizing

- Replace Open Graph meta tags in `index.html` with real image and final URL.
- Swap `assets/images/profile-placeholder.svg` with your own profile image.
- Adjust colors/accents in `assets/css/variables.css` if you prefer a different palette.

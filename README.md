# buildwithwaffle.me

Marketing site for **Build with Waffle**, a student-led creator movement.
Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Script              | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Dev server (Turbopack, default in 16) |
| `npm run build`     | Production build                      |
| `npm start`         | Serve the production build            |
| `npm run lint`      | ESLint                                |
| `npm run typecheck` | `tsc --noEmit`                        |

No environment variables are required — all content is static or lives in
`src/data/`.

### Node version

Node 20 or 22 LTS is recommended. On Node 22+ the runtime exposes a
non-functional `localStorage` global unless `--localstorage-file` is set, which
Next's dev error overlay trips over. If `npm run dev` fails with
`localStorage.getItem is not a function`, either use an LTS release or start the
server with that global removed:

```bash
NODE_OPTIONS="--require ./scripts/no-localstorage.cjs" npm run dev
```

## Theming

Colours are CSS custom properties defined once in `src/app/globals.css`:

- `:root` holds the light values, `[data-theme="dark"]` overrides them.
- `@theme inline` maps them to Tailwind utilities, so `bg-surface`,
  `text-ink`, `border-line`, `bg-brand` and friends follow the active theme
  with no `dark:` variant needed at the call site.

Use the semantic tokens rather than raw palette classes:

| Instead of                     | Use                             |
| ------------------------------ | ------------------------------- |
| `bg-white`, `bg-gray-50`       | `bg-card`, `bg-surface-2`       |
| `text-gray-900`, `text-gray-600` | `text-ink`, `text-ink-2`      |
| `border-gray-200`              | `border-line`                   |
| `bg-orange-500`, `text-orange-600` | `bg-brand`, `text-accent`   |
| a dark section (`bg-black`)    | `bg-panel` + `text-panel-ink`   |

`--brand` is a fill that carries white text at 4.5:1. `--accent` is the
text/icon accent and differs per theme so it clears AA on both surfaces. On the
fixed-orange hero, keep using literal white — those surfaces do not change with
the theme.

Reusable classes: `.btn` (`.btn-primary` / `.btn-secondary` / `.btn-on-brand` /
`.btn-ghost-on-brand`, plus `.btn-sm` / `.btn-lg`), `.card`, `.chip`,
`.eyebrow`, `.field-input`, `.text-gradient-brand`, `.section`,
`.container-page`.

### Theme switching

`src/lib/theme.ts` holds a small external store; `useTheme()` in
`src/contexts/ThemeContext.tsx` reads it via `useSyncExternalStore`. The
preference is `light`, `dark`, or `system` (the default, which keeps tracking
the OS while the page is open). `THEME_INIT_SCRIPT` is inlined into `<head>` so
`data-theme` is set before first paint and dark users see no white flash.

## Layout of the code

```
src/
  app/          routes; per-route layout.tsx carries metadata for client pages
  components/   shared UI
  config/       site config, navigation, external links
  data/         events.json, projects.json — the content source of truth
  hooks/        shared hooks
  lib/          theme store, utils
  types/        shared types
```

Homepage stats and the events/projects listings are derived from `src/data/`,
so updating those JSON files updates the site.

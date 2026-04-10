# slate-bar

A floating overlay toolbar that injects design variant previews into any webpage — localhost, staging, Vercel previews, or production. Zero dependencies, plain TypeScript, ships as ESM with UMD fallback.

Click through variants, preview them live on the page, and copy a ready-to-paste AI prompt to the clipboard. The prompt includes placement, design quality rules, UI library preferences, and cohesion instructions — so any agent can implement the variant in your framework and design system.

## Install

```bash
npm install slate-bar
npx slate-bar init   # scaffolds agent skill + Cursor slash command
```

## Quick start

```ts
import { SlateBar } from 'slate-bar'

SlateBar.load(
  [
    { name: 'Icon grid', html: '<section>...</section>' },
    { name: 'Alternating rows', html: '<section>...</section>' },
    { name: 'Bento dark', html: '<section>...</section>' },
  ],
  {
    placement: 'Below <Hero /> in app/(marketing)/page.tsx, before <Features />.',
    cohesionContext: 'Next.js App Router; Tailwind; tokens in globals.css; reuse Button, Section from @/components.',
    uiLibraries: ['shadcn/ui', 'tailark'],
  },
)
```

### React

```tsx
import { useSlateBar } from 'slate-bar/react'

function App() {
  useSlateBar(variants, {
    placement: 'Below <DashboardHeader /> in src/pages/Dashboard.tsx.',
    cohesionContext: 'Reuse tokens and Card/Button from our UI kit.',
    uiLibraries: ['shadcn/ui'],
  })
  return <main />
}
```

### Next.js

```tsx
'use client'
import { useSlateBar } from 'slate-bar/react'

export default function Page() {
  useSlateBar(variants, {
    placement: 'Under the hero, before Features.',
    uiLibraries: ['tailark'],
  })
  return <main />
}
```

## API

### `SlateBar.load(variants, options?)`

| Param | Type | Description |
|-------|------|-------------|
| `variants` | `Variant[]` | Array of `{ name: string, html: string }` |
| `options?.placement` | `string` | Where to wire the component (file, siblings, order). Syncs to Settings field + localStorage. |
| `options?.cohesionContext` | `string` | Stack, token paths, components to align with. |
| `options?.uiLibraries` | `string[]` | Libraries to build with (e.g. `['shadcn/ui', 'tailark']`). |

### `SlateBar.destroy()`

Removes toolbar + preview. Called automatically by the React hook on unmount.

### `useSlateBar(variants, options?)` (React / Next.js)

Same API. Import from `slate-bar/react`. SSR-safe.

## Built-in templates (fallback only)

~35 HTML layouts across 11 section types:

```ts
import { hero, features, pricing, allTemplates } from 'slate-bar/templates'
```

Types: `hero`, `logos`, `features`, `pricing`, `testimonials`, `cta`, `faq`, `stats`, `footer`, `newsletter`, `team`.

**Templates are starting points, not limits.** The agent should generate custom variants that match the project's actual design system. Templates are for when the user has nothing to begin with. A layout catalog (`templates/catalog.md`) lists many more patterns per section type.

## UI component libraries

Pass `uiLibraries` so the copied prompt tells the agent to build with real library components:

Well-known registries (not exhaustive — pass any library your project uses):

| Library | Install |
|---------|---------|
| shadcn/ui | `npx shadcn@latest add <component>` |
| Tailark | `npx shadcn@latest add @tailark/<component>` |
| Aceternity | `npx shadcn@latest add @aceternity/<component>` |
| Magic UI | `npx @magicuidesign/cli@latest add <component>` |
| Hero UI | Use Hero UI docs / MCP |

You can pass **any** library name — your own internal UI kit, Chakra, Radix, Mantine, etc. If the project already has a component library, the agent will prefer it.

## Placement

The toolbar previews variants in `#slate-preview` (or after the last `<section>`). That is only for preview. The `placement` string tells the agent the **real** location in the source tree.

Three ways to set it:
1. **Code** — `placement` in `SlateBar.load()` / `useSlateBar()`
2. **Settings** — gear icon → "Where it goes in the app" (saved in localStorage)
3. **Ask the agent** — tell your AI to always set `placement` when it writes `SlateBar.load()`. The skill (`npx slate-bar init`) enforces this.

## Agent skill / slash command

```bash
npx slate-bar init
```

Copies into your project:
- `.cursor/commands/slate-bar.md` — Cursor `/slate-bar` slash command
- `.cursor/skills/slate-bar/SKILL.md` — portable skill for any AI tool

The skill includes design quality standards (anti-slop, color, spacing, typography, animation, accessibility, interaction states) distilled from proven design systems. Any agent that loads it gets these principles baked in.

For non-Cursor tools, paste the SKILL.md contents into your tool's skills, workflows, or project instructions.

## Dev-only usage

Wrap the call so the toolbar is stripped from production:

```ts
if (process.env.NODE_ENV === 'development') {
  const { SlateBar } = await import('slate-bar')
  SlateBar.load(variants, options)
}
```

## How it works

- **Works on any URL** — no domain restriction.
- Mounts inside a **Shadow DOM** so styles never leak into your page.
- **Copy** writes a structured prompt: placement, design quality rules, UI libraries, project context, then reference markup.
- **Settings** has colour swatches and a "Where it goes" field (persists in localStorage).

## Color presets

Obsidian, Graphite, Slate, Midnight, Navy, Indigo, Plum, Wine, Espresso, Forest, Teal, Ocean.

## License

MIT

---
inclusion: manual
description: slate-bar — variants toolbar, placement, and Copy-to-agent workflow
---

Use this when the user is working with **slate-bar** (the floating variant toolbar) or wants to set up variant previews and copy instructions for an AI agent.

## What slate-bar does

- Injects a bottom pill bar with prev/next variants, **Copy**, and **Settings**.
- **Copy** puts a structured prompt on the clipboard: cohesion rules, **placement** (where to wire the component in the real app), optional project context, then reference HTML.

## Preview placement (CRITICAL — read this first)

**If you skip this, variants render at the BOTTOM of the page (above the footer) — not where the user asked.** This is the #1 mistake agents make.

You MUST place `<div id="slate-preview"></div>` in the page at the exact position the user specified:

```jsx
<Hero />
<div id="slate-preview"></div>   {/* ← variants render HERE */}
<Features />
```

Without this div, slate-bar auto-creates one after the last `<section>` — which is almost always wrong. The `placement` text option is for the clipboard copy only; the live preview position depends entirely on where this div sits in the DOM.

### Do NOT

- Let slate-bar auto-create the preview div (it defaults to the bottom of the page)
- Put the preview div at the end of the page
- Forget to add the preview div entirely
- Assume slate-bar will figure out placement from the `placement` text option

## Placement text (for clipboard/copy)

Whenever you introduce or edit **`SlateBar.load()`** or **`useSlateBar()`**, you **must** also set **`placement`** (and **`cohesionContext`** when the stack is known). Do **not** rely on chat memory.

- Derive `placement` from the user's request (e.g. "under the hero" → concrete file + sibling components).
- Use **specific** strings: route/file path, JSX order (`below <Hero />`, `before <Features />`), not vague "on the landing page."

1. **Settings (gear)** → field **"Where it goes in the app"** — persists in `localStorage` (`slate-bar-placement`).

2. **Code** — `SlateBar.load(variants, { placement: '...' })` syncs into that same storage when `placement` is passed.

3. When suggesting edits, **write placement text the user can paste** if they have not filled it yet.

## Cohesion

- Recommend `cohesionContext` for stack, token paths, and components to reuse.
- Remind them to reference real files (layout, theme, a "gold standard" section) in the same chat as the paste.

## Setup reminder (if needed)

```bash
npm install slate-bar
```

```ts
import { SlateBar } from 'slate-bar'

SlateBar.load(
  [
    { name: 'Variant A', html: '<section>...</section>' },
    { name: 'Variant B', html: '<section>...</section>' },
  ],
  {
    placement: 'Below <Hero /> in app/page.tsx.',
    cohesionContext: 'Next.js, Tailwind, tokens in globals.css; reuse Button, Section.',
  },
)
```

React / Next.js: `useSlateBar(variants, { placement, cohesionContext })` from `slate-bar/react`.

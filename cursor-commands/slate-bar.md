---
description: slate-bar — variants toolbar, placement, and Copy-to-agent workflow
---

Use this when the user is working with **slate-bar** (the floating localhost variant toolbar) or wants to set up variant previews and copy instructions for an AI agent.

## What slate-bar does

- Injects a bottom pill bar with prev/next variants, **Copy**, and **Settings**.
- **Copy** puts a structured prompt on the clipboard: cohesion rules, **placement** (where to wire the component in the real app), optional project context, then reference HTML.

## Placement (exact location in the product)

The copied prompt must tell the implementer **where** the component lives—not only what it looks like.

### Rule for AI agents writing code

Whenever you introduce or edit **`SlateBar.load()`** or **`useSlateBar()`**, you **must** set **`placement`** (and **`cohesionContext`** when the stack is known). Do **not** rely on chat memory.

- Derive `placement` from the user’s request (e.g. “under the hero” → concrete file + sibling components).
- Use **specific** strings: route/file path, JSX order (`below <Hero />`, `before <Features />`), not vague “on the landing page.”

1. **Settings (gear)** → field **“Where it goes in the app”** — persists in `localStorage` (`slate-bar-placement`). Examples:
   - `Below <MarketingHero /> in app/(marketing)/page.tsx, before the Features section.`
   - `Inside src/routes/dashboard.tsx: add after the stats row, same grid as existing cards.`

2. **Code** — `SlateBar.load(variants, { placement: '...' })` syncs into that same storage when `placement` is passed (including `''` to clear).

3. When suggesting edits, **write placement text the user can paste** if they have not filled it yet.

## Cohesion

- Recommend `cohesionContext` for stack, token paths, and components to reuse.
- Remind them to **@-reference** real files (layout, theme, a “gold standard” section) in the same chat as the paste.

## Using this file in your AI tool

Tools name this differently; the **content** is portable.

- **Cursor:** save as `.cursor/commands/slate-bar.md` — then **`/slate-bar`** in chat runs it.
- **Elsewhere:** import as a **skill**, **workflow**, **project instruction**, or paste into a saved prompt — whatever your IDE or agent supports.

This file does **not** install or run the npm package; it only guides the agent. The **slate-bar** package and README hold the API.

### Placement is not auto-read from chat

**slate-bar** does not scrape chats or infer placement. Placement comes from **Settings → Where it goes** (persisted in the browser) or from the `placement` option in `SlateBar.load()` / `useSlateBar()`. Same-thread chats may still “remember” if the user only spoke the location; putting it in Settings or `placement` makes **Copy** self-contained for any tool.

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

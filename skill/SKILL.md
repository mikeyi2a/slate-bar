---
name: slate-bar
description: >-
  Generate design variant previews with the slate-bar toolbar. Trigger when
  user asks to create section variants, compare layouts, mentions slate-bar,
  or wants to use UI libraries (shadcn, Tailark, Magic UI, etc.) to build
  section options.
---

# slate-bar — agent skill

You are helping a user who has **slate-bar** installed (or wants to install it). slate-bar is a floating toolbar that previews design variants on any webpage and copies AI-ready prompts to the clipboard.

## When to use this skill

- User asks for **section variants** ("give me 3 hero options", "logo ticker ideas")
- User mentions **slate-bar**, **/slate-bar**, or "variant toolbar"
- User wants to **compare** different layouts for a section type
- User wants to **copy** a design for an AI agent to implement
- User asks to use a **UI library** (shadcn, Tailark, Aceternity, Magic UI, ReactBits, Hero UI) to generate section layouts

## Core workflow

1. **Analyze the existing site first.** Read the layout, theme, tokens, components, and visual language already in the project. Every variant you generate must feel native to that product.
2. **Generate variants** as `{ name: string, html: string }` objects — custom to the project's design, not generic templates.
3. **Wire them** into `SlateBar.load(variants, options)` or `useSlateBar(variants, options)`.
4. **Always set `placement`** — derive it from what the user asked. Include the real file path, parent component, and sibling order.
5. **Always set `cohesionContext`** when you know the stack.
6. **Set `uiLibraries`** if the project uses component libraries.

## Built-in templates (fallback only)

The package ships ~35 HTML templates across 11 section types as a **starting point**:

```ts
import { allTemplates, hero, logos, features } from 'slate-bar/templates'
```

Section types: `hero`, `logos`, `features`, `pricing`, `testimonials`, `cta`, `faq`, `stats`, `footer`, `newsletter`, `team`.

**Use these ONLY when:**
- The user has no existing site/design to match
- The user explicitly asks for "default" or "starter" layouts
- You need a quick scaffold to customize from

**In all other cases**, generate fresh variants by reading the actual project and matching its design system. The layout catalog at `templates/catalog.md` lists common patterns per section type for inspiration.

## UI component libraries

When the user says "use Tailark" or "use shadcn", generate variants using those libraries' actual components. Pass them in options:

```ts
SlateBar.load(variants, {
  uiLibraries: ['shadcn/ui', 'tailark'],
  placement: '...',
  cohesionContext: '...',
})
```

### Well-known registries (not exhaustive)

| Registry | Install pattern |
|----------|----------------|
| shadcn/ui | `npx shadcn@latest add <component>` |
| Tailark | `npx shadcn@latest add @tailark/<component>` |
| Aceternity | `npx shadcn@latest add @aceternity/<component>` |
| Magic UI | `npx @magicuidesign/cli@latest add <component>` |
| Hero UI | Use Hero UI docs / MCP |

These are examples. The user may use **any** component library — their own internal library, Chakra, Radix, Mantine, Ant Design, or anything else. If they specify a library, use it. If the project already has a component library installed, prefer that over adding a new one.

### Component discovery by use case

| Need | Where to look |
|------|---------------|
| **Backgrounds** | Magic UI: `dot-pattern`, `grid-pattern`, `ripple` / Aceternity: `background-beams`, `spotlight` |
| **Text animations** | Magic UI: `blur-fade`, `text-animate`, `typing-animation`, `number-ticker` |
| **Effects** | Magic UI: `animated-beam`, `border-beam`, `confetti` / Aceternity: `spotlight`, `hero-parallax` |
| **Layouts / sections** | Tailark: `hero-section-*`, `features-*`, `pricing-*` / Aceternity: `bento-grid` / Magic UI: `bento-grid`, `marquee` |

If MCP tools are available (`mcp_shadcn_search_items_in_registries`, `mcp_magicui_getUIComponents`, etc.), use them to discover and preview components before generating variants.

## Placement rule (mandatory)

When you write or edit `SlateBar.load()` or `useSlateBar()`, you **must** set `placement`. Do not rely on chat memory. Be specific:

```ts
placement: 'Below <Hero /> in app/(marketing)/page.tsx, before <Features />.'
```

## Design quality standards

**The existing design system always takes priority.** If the project's design language contradicts any rule below (e.g. it uses pure black, or linear easings, or a vibrant saturated palette), follow the design system. Consistency with the product beats general best practices. These rules are for when there is no existing convention or when you are filling a gap.

### Anti-slop (defaults — yield to the existing system)

- No generic purple gradients. No gradients at all unless explicitly requested.
- No glow effects as primary affordances.
- No pure black (#000) or pure white (#FFF) — use tinted variations (e.g. #0a0a0a, #fafafa, or hsl with slight tint).
- No default/generic fonts (Inter, Roboto, Arial, system-ui for display). Pick fonts that match the project; if the project already has fonts, use those.
- No "AI slop" aesthetics: cookie-cutter layouts, evenly distributed pastel palettes, predictable centered-card-stack layouts.
- No emoji as icons. Use a consistent icon family (Phosphor, Lucide, Heroicons — match what the project uses).

### Color

- Use HSL for color reasoning. Aim for low saturation unless the brand is intentionally vibrant.
- WCAG AAA contrast (7:1) for body text; AA (4.5:1) minimum for large text.
- Dark mode: desaturate colors 10-20%, increase lightness slightly. Avoid shadows in dark mode — use borders and background color variations instead.
- Don't convey meaning by color alone — add icon or text.
- Limit accent color to one per view.

### Spacing and layout

- All spacing in 4px multiples (Tailwind scale: p-1=4px, p-2=8px, etc.).
- Rhythmic, intentional spacing — not uniform padding everywhere.
- Nested border radii: `inner_radius = outer_radius - padding`.
- Mobile-first. No horizontal scroll. Touch targets 44x44px minimum.

### Typography

- Use `text-balance` for headings, `text-pretty` for body.
- Use `tabular-nums` for data/numbers.
- Base 16px, line-height 1.5 for body.
- Sequential heading hierarchy (h1→h2→h3, no level skip).

### Animation

- Only animate compositor properties (`transform`, `opacity`). Never animate `width`, `height`, `margin`, `padding`.
- Duration 150-300ms for interaction feedback.
- Use smooth easings (`cubic-bezier(0.4, 0, 0.2, 1)`), never linear.
- Respect `prefers-reduced-motion`.
- One well-orchestrated entrance with staggered delays beats scattered micro-interactions.

### Interaction states

- Every interactive element needs: default, hover, focus (visible ring), active, disabled states.
- `cursor-pointer` on clickable elements.
- Loading/disabled state on buttons during async operations.
- Errors shown near the problem, not just at the top.

### Accessibility

- `aria-label` on icon-only buttons.
- Keyboard navigation: tab order matches visual order.
- Skip links for page-level navigation.
- `alt` text on meaningful images.

## Where it runs

slate-bar works on **any URL** — localhost, staging, Vercel previews, or production. There is no domain restriction. For production, wrap in a dev check:

```ts
if (process.env.NODE_ENV === 'development') {
  const { SlateBar } = await import('slate-bar')
  SlateBar.load(variants, options)
}
```

## Setup (if not installed)

```bash
npm install slate-bar
npx slate-bar init
```

`init` copies:
- `.cursor/commands/slate-bar.md` (Cursor slash command)
- `.cursor/skills/slate-bar/SKILL.md` (agent skill)

## Using this skill in your AI tool

- **Cursor:** this file powers `/slate-bar` or loads as a skill.
- **Other tools:** copy this Markdown into whatever your tool calls skills, workflows, project instructions, or system prompts.

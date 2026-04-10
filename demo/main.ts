import { SlateBar } from '../src/index'

SlateBar.load(
  [
  {
    name: 'Icon grid',
    html: `
      <section style="padding:2rem;font-family:system-ui;background:linear-gradient(135deg,#1e1b4b,#312e81);color:#e0e7ff;border-radius:16px;margin:1rem 2rem;">
        <h2 style="margin:0 0 1rem;font-size:1.5rem">Icon grid</h2>
        <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;max-width:36rem">
          ${['Spark', 'Bolt', 'Star', 'Heart', 'Shield', 'Zap', 'Globe', 'Lock']
            .map(
              (label) => `
            <div style="aspect-ratio:1;border-radius:12px;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:600">
              ${label}
            </div>`,
            )
            .join('')}
        </div>
      </section>`,
  },
  {
    name: 'Alternating rows',
    html: `
      <section style="margin:1rem 2rem;font-family:system-ui;border-radius:16px;overflow:hidden;border:1px solid #e5e5e5">
        ${['Features', 'Pricing', 'FAQ', 'Contact']
          .map(
            (title, i) => `
          <div style="padding:1.25rem 1.5rem;background:${i % 2 === 0 ? '#fff' : '#f4f4f5'};display:flex;justify-content:space-between;align-items:center">
            <span style="font-weight:600">${title}</span>
            <span style="color:#737373;font-size:0.875rem">Row ${i + 1}</span>
          </div>`,
          )
          .join('')}
      </section>`,
  },
  {
    name: 'Bento dark',
    html: `
      <section style="margin:1rem 2rem;font-family:system-ui;display:grid;grid-template-columns:2fr 1fr;grid-template-rows:120px 120px;gap:0.75rem;max-width:42rem">
        <div style="grid-row:span 2;background:#171717;color:#fafafa;border-radius:16px;padding:1.25rem;display:flex;flex-direction:column;justify-content:flex-end">
          <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;opacity:0.5">Hero</div>
          <div style="font-size:1.25rem;font-weight:700;margin-top:0.25rem">Bento layout</div>
        </div>
        <div style="background:#262626;color:#fafafa;border-radius:16px;padding:1rem;font-size:0.875rem">Stat A</div>
        <div style="background:#404040;color:#fafafa;border-radius:16px;padding:1rem;font-size:0.875rem">Stat B</div>
      </section>`,
  },
  ],
  {
    placement:
      'Demo: imagine this lives directly under the page hero on `app/page.tsx`, before any following section.',
    cohesionContext:
      'Demo page only: pretend this is a Next.js + Tailwind app; match neutral marketing spacing and system-ui type like the header above.',
  },
)

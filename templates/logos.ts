import type { SectionTemplate } from './types'

const LOGOS = ['Acme', 'Globex', 'Initech', 'Hooli', 'Pied Piper', 'Soylent']

export const logos: SectionTemplate[] = [
  {
    section: 'logos',
    name: 'Simple row with label',
    html: `<section style="padding:3rem 2rem;font-family:system-ui,sans-serif;text-align:center;max-width:64rem;margin:0 auto">
  <p style="font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;margin-bottom:2rem">Trusted by industry leaders</p>
  <div style="display:flex;align-items:center;justify-content:center;gap:3rem;flex-wrap:wrap">
    ${LOGOS.map((n) => `<span style="font-size:1.125rem;font-weight:700;color:#cbd5e1;letter-spacing:-0.01em">${n}</span>`).join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'logos',
    name: 'Grid cards',
    html: `<section style="padding:3rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto">
  <p style="text-align:center;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;margin-bottom:2rem">Our partners</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem">
    ${LOGOS.map((n) => `<div style="display:flex;align-items:center;justify-content:center;padding:1.5rem;border:1px solid #f1f5f9;border-radius:0.75rem"><span style="font-weight:700;color:#cbd5e1">${n}</span></div>`).join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'logos',
    name: 'Dark strip',
    html: `<section style="padding:2.5rem 2rem;background:#0f172a;font-family:system-ui,sans-serif">
  <div style="max-width:64rem;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:3rem;flex-wrap:wrap">
    ${LOGOS.map((n) => `<span style="font-size:1rem;font-weight:700;color:rgba(255,255,255,0.3)">${n}</span>`).join('\n    ')}
  </div>
</section>`,
  },
]

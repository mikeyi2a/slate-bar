import type { SectionTemplate } from './types'

export const features: SectionTemplate[] = [
  {
    section: 'features',
    name: 'Three-column icon grid',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto">
  <div style="text-align:center;margin-bottom:3rem">
    <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.75rem">Everything you need</h2>
    <p style="color:#64748b;max-width:32rem;margin:0 auto;line-height:1.6">A complete toolkit to build, test, and ship with confidence.</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem">
    ${['Lightning fast', 'Secure by default', 'Team-ready', 'Analytics built in', 'API-first', '24/7 support'].map((t) => `<div style="padding:1.5rem;border-radius:0.75rem;border:1px solid #f1f5f9"><div style="width:2.5rem;height:2.5rem;border-radius:0.5rem;background:#f1f5f9;margin-bottom:1rem"></div><h3 style="font-weight:700;margin:0 0 0.5rem;font-size:1rem">${t}</h3><p style="color:#64748b;font-size:0.875rem;line-height:1.5;margin:0">Short description of this feature and why it matters to users.</p></div>`).join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'features',
    name: 'Alternating rows — text + image',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto;display:flex;flex-direction:column;gap:4rem">
  ${['Ship in minutes', 'Real-time insights', 'Built for teams'].map((title, i) => `<div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center${i % 2 === 1 ? ';direction:rtl' : ''}">
    <div${i % 2 === 1 ? ' style="direction:ltr"' : ''}>
      <h3 style="font-size:1.5rem;font-weight:700;margin:0 0 0.75rem">${title}</h3>
      <p style="color:#64748b;line-height:1.6;margin:0">Detailed explanation of this feature. Describe the value, not just the mechanism.</p>
    </div>
    <div style="background:#f1f5f9;border-radius:1rem;aspect-ratio:16/10;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.875rem${i % 2 === 1 ? ';direction:ltr' : ''}">Image</div>
  </div>`).join('\n  ')}
</section>`,
  },
  {
    section: 'features',
    name: 'Bento grid',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2rem;text-align:center">How it works</h2>
  <div style="display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto auto;gap:1rem">
    <div style="grid-row:span 2;background:#0f172a;color:#f8fafc;border-radius:1rem;padding:2rem;display:flex;flex-direction:column;justify-content:flex-end;min-height:320px">
      <p style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;opacity:0.5;margin:0 0 0.5rem">Core</p>
      <h3 style="font-size:1.5rem;font-weight:700;margin:0">Unified workspace</h3>
    </div>
    <div style="background:#f1f5f9;border-radius:1rem;padding:1.5rem"><h3 style="font-weight:700;margin:0 0 0.5rem;font-size:1rem">Speed</h3><p style="color:#64748b;font-size:0.875rem;margin:0;line-height:1.5">Sub-100ms response times, globally.</p></div>
    <div style="background:#f1f5f9;border-radius:1rem;padding:1.5rem"><h3 style="font-weight:700;margin:0 0 0.5rem;font-size:1rem">Scale</h3><p style="color:#64748b;font-size:0.875rem;margin:0;line-height:1.5">From prototype to millions of users.</p></div>
  </div>
</section>`,
  },
  {
    section: 'features',
    name: 'Centered list with icons',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:40rem;margin:0 auto;text-align:center">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.75rem">Features</h2>
  <p style="color:#64748b;margin:0 0 3rem;line-height:1.6">Simple tools, extraordinary results.</p>
  <div style="display:flex;flex-direction:column;gap:2rem;text-align:left">
    ${['Instant deploys', 'Edge functions', 'Integrated storage', 'Team permissions'].map((t) => `<div style="display:flex;gap:1rem;align-items:flex-start"><div style="width:2rem;height:2rem;border-radius:0.5rem;background:#eef2ff;flex-shrink:0"></div><div><h3 style="font-weight:700;margin:0 0 0.25rem;font-size:1rem">${t}</h3><p style="color:#64748b;font-size:0.875rem;margin:0;line-height:1.5">Brief explanation of the benefit this feature provides.</p></div></div>`).join('\n    ')}
  </div>
</section>`,
  },
]

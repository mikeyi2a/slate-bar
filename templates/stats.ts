import type { SectionTemplate } from './types'

export const stats: SectionTemplate[] = [
  {
    section: 'stats',
    name: 'Four-stat row',
    html: `<section style="padding:4rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center">
    ${[
      { value: '10M+', label: 'Requests per day' },
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '150+', label: 'Countries served' },
      { value: '<50ms', label: 'Avg response time' },
    ]
      .map(
        (s) => `<div>
      <p style="font-size:2.5rem;font-weight:800;letter-spacing:-0.02em;margin:0;color:#111">${s.value}</p>
      <p style="color:#64748b;font-size:0.875rem;margin:0.5rem 0 0">${s.label}</p>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'stats',
    name: 'Dark background cards',
    html: `<section style="padding:4rem 2rem;font-family:system-ui,sans-serif;background:#0f172a">
  <div style="max-width:64rem;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
    ${[
      { value: '2.4M', label: 'Active developers' },
      { value: '580K', label: 'Projects deployed' },
      { value: '12B', label: 'API calls / month' },
    ]
      .map(
        (s) => `<div style="background:rgba(255,255,255,0.05);border-radius:1rem;padding:2rem;text-align:center">
      <p style="font-size:2.5rem;font-weight:800;letter-spacing:-0.02em;color:#f8fafc;margin:0">${s.value}</p>
      <p style="color:#94a3b8;font-size:0.875rem;margin:0.5rem 0 0">${s.label}</p>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'stats',
    name: 'Inline with dividers',
    html: `<section style="padding:3rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto;border-top:1px solid #f1f5f9;border-bottom:1px solid #f1f5f9">
  <div style="display:flex;align-items:center;justify-content:center;gap:3rem;flex-wrap:wrap">
    ${[
      { value: '50K+', label: 'Teams' },
      { value: '4.9★', label: 'Rating' },
      { value: '24/7', label: 'Support' },
      { value: '99.9%', label: 'Uptime' },
    ]
      .map(
        (s, i) => `${i > 0 ? '<div style="width:1px;height:2.5rem;background:#e2e8f0"></div>' : ''}<div style="text-align:center"><p style="font-size:1.5rem;font-weight:800;margin:0">${s.value}</p><p style="color:#94a3b8;font-size:0.75rem;margin:0.25rem 0 0">${s.label}</p></div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
]

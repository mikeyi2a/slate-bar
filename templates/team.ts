import type { SectionTemplate } from './types'

export const team: SectionTemplate[] = [
  {
    section: 'team',
    name: 'Grid with avatars',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto;text-align:center">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.75rem">Meet the team</h2>
  <p style="color:#64748b;margin:0 0 3rem;line-height:1.6">The people building the future of developer tools.</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem">
    ${[
      { name: 'Alex Morgan', role: 'CEO' },
      { name: 'Sam Rivera', role: 'CTO' },
      { name: 'Jordan Lee', role: 'Head of Design' },
      { name: 'Taylor Chen', role: 'Lead Engineer' },
    ]
      .map(
        (p) => `<div>
      <div style="width:5rem;height:5rem;border-radius:9999px;background:#f1f5f9;margin:0 auto 1rem"></div>
      <p style="font-weight:600;margin:0">${p.name}</p>
      <p style="color:#94a3b8;font-size:0.875rem;margin:0.25rem 0 0">${p.role}</p>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'team',
    name: 'Card grid with bios',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2.5rem;text-align:center">Our team</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
    ${[
      { name: 'Alex Morgan', role: 'CEO', bio: 'Previously at Stripe. Loves complex systems and simple interfaces.' },
      { name: 'Sam Rivera', role: 'CTO', bio: '10 years in distributed systems. Open source maintainer.' },
      { name: 'Jordan Lee', role: 'Head of Design', bio: 'Former IDEO. Believes every pixel tells a story.' },
    ]
      .map(
        (p) => `<div style="padding:2rem;border:1px solid #f1f5f9;border-radius:1rem">
      <div style="width:3.5rem;height:3.5rem;border-radius:9999px;background:#f1f5f9;margin-bottom:1rem"></div>
      <p style="font-weight:700;margin:0">${p.name}</p>
      <p style="color:#6366f1;font-size:0.875rem;margin:0.25rem 0 0.75rem">${p.role}</p>
      <p style="color:#64748b;font-size:0.875rem;line-height:1.6;margin:0">${p.bio}</p>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
]

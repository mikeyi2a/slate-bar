import type { SectionTemplate } from './types'

export const testimonials: SectionTemplate[] = [
  {
    section: 'testimonials',
    name: 'Three-card grid',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2.5rem;text-align:center">What people are saying</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
    ${[
      { quote: 'Completely transformed how our team ships. We went from weekly to daily deploys.', name: 'Sarah Chen', role: 'CTO, Acme' },
      { quote: 'The best developer experience I have used in 10 years of building products.', name: 'Marcus Rodriguez', role: 'Lead Engineer, Globex' },
      { quote: 'Simple, fast, and it just works. Exactly what we needed.', name: 'Ava Patel', role: 'Founder, NovaTech' },
    ]
      .map(
        (t) => `<div style="padding:2rem;border:1px solid #f1f5f9;border-radius:1rem;display:flex;flex-direction:column;gap:1.5rem">
      <p style="color:#334155;line-height:1.6;margin:0;flex:1">"${t.quote}"</p>
      <div style="display:flex;align-items:center;gap:0.75rem">
        <div style="width:2.5rem;height:2.5rem;border-radius:9999px;background:#f1f5f9;flex-shrink:0"></div>
        <div><p style="font-weight:600;font-size:0.875rem;margin:0">${t.name}</p><p style="color:#94a3b8;font-size:0.75rem;margin:0">${t.role}</p></div>
      </div>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'testimonials',
    name: 'Large centered quote',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;text-align:center">
  <div style="width:3rem;height:3rem;border-radius:9999px;background:#f1f5f9;margin:0 auto 2rem;display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:#94a3b8">"</div>
  <blockquote style="font-size:1.5rem;font-weight:500;line-height:1.5;letter-spacing:-0.01em;margin:0 0 2rem;color:#1e293b">"This platform saved our team hundreds of hours. The workflow feels magical — things that used to take days now take minutes."</blockquote>
  <div>
    <p style="font-weight:600;margin:0">Jamie Wilson</p>
    <p style="color:#94a3b8;font-size:0.875rem;margin:0.25rem 0 0">VP Engineering, Initech</p>
  </div>
</section>`,
  },
  {
    section: 'testimonials',
    name: 'Two-column with highlight',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
  <div style="background:#0f172a;color:#f8fafc;border-radius:1rem;padding:2.5rem;display:flex;flex-direction:column;justify-content:space-between">
    <p style="font-size:1.25rem;line-height:1.5;margin:0 0 2rem">"Moving to this platform was the best infrastructure decision we made all year."</p>
    <div><p style="font-weight:600;margin:0">Alex Kim</p><p style="color:rgba(255,255,255,0.5);font-size:0.875rem;margin:0.25rem 0 0">CTO, Hooli</p></div>
  </div>
  <div style="display:flex;flex-direction:column;gap:1.5rem">
    ${[
      { quote: 'Incredible DX. Our engineers actually enjoy deploying now.', name: 'Robin Lee', role: 'Staff Eng, Pied Piper' },
      { quote: 'Support response time is unreal. Under 5 minutes every time.', name: 'Dana Foster', role: 'Ops Lead, Soylent' },
    ]
      .map(
        (t) => `<div style="padding:2rem;border:1px solid #f1f5f9;border-radius:1rem;flex:1">
      <p style="color:#334155;line-height:1.6;margin:0 0 1.25rem">"${t.quote}"</p>
      <div><p style="font-weight:600;font-size:0.875rem;margin:0">${t.name}</p><p style="color:#94a3b8;font-size:0.75rem;margin:0">${t.role}</p></div>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
]

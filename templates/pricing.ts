import type { SectionTemplate } from './types'

export const pricing: SectionTemplate[] = [
  {
    section: 'pricing',
    name: 'Three-tier cards',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto;text-align:center">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.75rem">Pricing</h2>
  <p style="color:#64748b;margin:0 0 3rem;line-height:1.6">Start free. Scale when you're ready.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;text-align:left">
    ${[
      { name: 'Free', price: '$0', features: ['1 project', '10k requests/mo', 'Community support'] },
      { name: 'Pro', price: '$29', features: ['Unlimited projects', '1M requests/mo', 'Priority support', 'Analytics'] },
      { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'SSO & SAML', 'SLA', 'Dedicated CSM'] },
    ]
      .map(
        (tier, i) => `<div style="padding:2rem;border-radius:1rem;${i === 1 ? 'background:#0f172a;color:#f8fafc;' : 'border:1px solid #e2e8f0;'}display:flex;flex-direction:column;gap:1.5rem">
      <div>
        <p style="font-weight:600;margin:0 0 0.25rem">${tier.name}</p>
        <p style="font-size:2.5rem;font-weight:800;margin:0;letter-spacing:-0.02em">${tier.price}<span style="font-size:0.875rem;font-weight:400;${i === 1 ? 'color:rgba(255,255,255,0.5)' : 'color:#64748b'}">/mo</span></p>
      </div>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem;flex:1">
        ${tier.features.map((f) => `<li style="font-size:0.875rem;${i === 1 ? 'color:rgba(255,255,255,0.7)' : 'color:#64748b'}">✓ ${f}</li>`).join('')}
      </ul>
      <a href="#" style="display:block;text-align:center;padding:0.75rem;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;${i === 1 ? 'background:#fff;color:#0f172a' : 'background:#0f172a;color:#fff'}">Get started</a>
    </div>`,
      )
      .join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'pricing',
    name: 'Two-tier side by side',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:56rem;margin:0 auto">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2.5rem;text-align:center">Simple, transparent pricing</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
    <div style="padding:2.5rem;border:1px solid #e2e8f0;border-radius:1rem">
      <p style="font-weight:600;margin:0 0 0.5rem">Starter</p>
      <p style="font-size:3rem;font-weight:800;margin:0 0 1.5rem;letter-spacing:-0.02em">$0</p>
      <p style="color:#64748b;font-size:0.875rem;line-height:1.6;margin:0 0 2rem">For individuals and small projects getting off the ground.</p>
      <a href="#" style="display:block;text-align:center;padding:0.75rem;border:1px solid #e2e8f0;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;color:#111">Start free</a>
    </div>
    <div style="padding:2.5rem;background:#0f172a;color:#f8fafc;border-radius:1rem">
      <p style="font-weight:600;margin:0 0 0.5rem">Pro</p>
      <p style="font-size:3rem;font-weight:800;margin:0 0 1.5rem;letter-spacing:-0.02em">$49</p>
      <p style="color:rgba(255,255,255,0.6);font-size:0.875rem;line-height:1.6;margin:0 0 2rem">For growing teams that need power and flexibility.</p>
      <a href="#" style="display:block;text-align:center;padding:0.75rem;background:#fff;color:#0f172a;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Upgrade now</a>
    </div>
  </div>
</section>`,
  },
  {
    section: 'pricing',
    name: 'Comparison table',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:56rem;margin:0 auto;text-align:center">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2.5rem">Compare plans</h2>
  <div style="border:1px solid #e2e8f0;border-radius:1rem;overflow:hidden;text-align:left">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;background:#f8fafc;padding:1rem 1.5rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#64748b"><span>Feature</span><span>Free</span><span>Pro</span><span>Enterprise</span></div>
    ${['Projects', 'API requests', 'Support', 'Analytics', 'SSO'].map((f, i) => `<div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;padding:1rem 1.5rem;font-size:0.875rem;${i % 2 === 0 ? '' : 'background:#fafafa;'}border-top:1px solid #f1f5f9"><span>${f}</span><span style="color:#94a3b8">${i < 2 ? 'Limited' : i < 3 ? '✓' : '—'}</span><span>✓</span><span>✓</span></div>`).join('\n    ')}
  </div>
</section>`,
  },
]

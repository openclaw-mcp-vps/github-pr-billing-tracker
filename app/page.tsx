export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For Freelancers &amp; Dev Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn GitHub PR Activity into{' '}
          <span className="text-[#58a6ff]">Billable Hours</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically convert commits, PR reviews, and comments into time entries.
          AI categorizes work by client so you can invoice without the guesswork.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking — $9/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { stat: 'Auto', label: 'Time Capture' },
            { stat: 'AI', label: 'Client Tagging' },
            { stat: 'CSV', label: 'Invoice Export' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'GitHub OAuth integration',
              'Webhook-based PR activity tracking',
              'AI client categorization',
              'Editable time log dashboard',
              'CSV &amp; PDF invoice export',
              'Unlimited repos &amp; clients',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it track my time?',
              a: 'We connect to GitHub via OAuth and listen to webhooks. Every commit, PR review, and comment is timestamped and converted into a time entry using configurable duration rules.',
            },
            {
              q: 'How does AI client categorization work?',
              a: 'The AI analyzes repo names, PR titles, and commit messages to match activity to your configured clients. You can review and override any entry before exporting.',
            },
            {
              q: 'Can I export for invoicing?',
              a: 'Yes. Export your time logs as CSV or PDF, grouped by client and date range, ready to attach to any invoice.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} GitHub PR Billing Tracker. All rights reserved.
      </footer>
    </main>
  )
}

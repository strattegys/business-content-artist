import RevealOnScroll from './ui/RevealOnScroll'
import SectionLabel from './ui/SectionLabel'
import CTAButton from './ui/CTAButton'

const inclusions = [
  'Custom landing page + offer design',
  'Supporting content suite (LinkedIn, email, distribution)',
  'Live funnel execution and demonstration',
  'Team handoff and training session',
  '90 days of direct support',
  'All source files, templates, and playbooks',
]

export default function Pricing() {
  return (
    <section className="section-container">
      <RevealOnScroll>
        <div className="max-w-xl mx-auto text-center">
          <SectionLabel>INVESTMENT</SectionLabel>

          <div
            className="rounded-2xl overflow-hidden mt-6"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Top gradient bar */}
            <div
              className="h-1"
              style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-warm))' }}
            />

            <div className="p-10 md:p-12">
              <span
                className="font-mono inline-block text-xs tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6"
                style={{
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent)',
                }}
              >
                Content Funnel Build
              </span>

              <div className="mb-8">
                <span className="font-mono text-4xl md:text-5xl font-bold" style={{ color: 'var(--accent)' }}>
                  $X,XXX
                </span>
                <span className="block text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                  Fixed Project Price — No Surprises
                </span>
              </div>

              <ul className="text-left space-y-5 mb-10">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)' }} className="shrink-0 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <CTAButton href="#book" className="w-full">
                Book Your Strategy Call
              </CTAButton>

              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                Limited to a small number of engagements per quarter
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

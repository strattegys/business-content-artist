import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'

const credentials = [
  { icon: '\u{1F4BB}', text: '300+ low-code applications designed' },
  { icon: '\u{1F4C8}', text: 'A decade of B2B outbound campaigns' },
  { icon: '\u{1F3A8}', text: 'The Andy Warhol Model — factory production + distribution' },
  { icon: '\u{1F310}', text: 'Portfolio at signal.strattegys.com' },
]

export default function Trust() {
  return (
    <section className="section-container" style={{ background: 'var(--bg-secondary)' }}>
      <RevealOnScroll>
        <SectionHeading label="WHO'S BUILDING THIS" title="Meet the Business Content Artist" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        {/* Credentials card */}
        <RevealOnScroll delay={0.1}>
          <div
            className="rounded-xl p-6 space-y-5"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {credentials.map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {c.text}
                </span>
              </div>
            ))}
            <a
              href="https://signal.strattegys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono inline-block text-xs tracking-[1px] uppercase mt-4 no-underline transition-opacity hover:opacity-80"
              style={{ color: 'var(--accent)' }}
            >
              View Portfolio &rarr;
            </a>
          </div>
        </RevealOnScroll>

        {/* About text */}
        <RevealOnScroll delay={0.2}>
          <div className="space-y-5">
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              I'm Govind Davis — the Business Content Artist.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Not just a content creator, not just a marketer — an artist who builds high-impact business artifacts that tell your brand's story and drive measurable results.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I work exclusively with complex tech brands — SaaS, enterprise software, AI/ML, developer tools — where the value isn't immediately obvious and generic content falls flat.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My approach combines three pillars: <strong style={{ color: 'var(--text-primary)' }}>Strategy</strong> to understand your market and message, <strong style={{ color: 'var(--text-primary)' }}>Creation</strong> to build content that resonates, and <strong style={{ color: 'var(--text-primary)' }}>Distribution</strong> to get it in front of the right people. External credibility and a real distribution network — that's the difference.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

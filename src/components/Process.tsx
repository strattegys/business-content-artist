import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'

const steps = [
  {
    num: '01',
    title: 'Strategy Call',
    timing: 'Week 0',
    desc: 'Deep-dive into your product, market, and ICP. We map the funnel strategy, define the offer, and align on the vision.',
  },
  {
    num: '02',
    title: 'Offer & Page Build',
    timing: 'Weeks 1–2',
    desc: 'I design the offer structure and build the landing page. You review, we iterate until it hits.',
  },
  {
    num: '03',
    title: 'Content Creation',
    timing: 'Weeks 2–3',
    desc: 'The supporting content suite gets created — LinkedIn posts, email sequences, distribution assets — all engineered to drive traffic.',
  },
  {
    num: '04',
    title: 'Live Execution',
    timing: 'Weeks 3–4',
    desc: 'I run the funnel live. You watch the data come in. We optimize in real-time together.',
  },
  {
    num: '05',
    title: 'Handoff + 90-Day Support',
    timing: 'Week 4+',
    desc: "Your team takes over with the full playbook. I'm on call for 90 days to help you test, refine, and scale.",
  },
]

export default function Process() {
  return (
    <section className="section-container">
      <RevealOnScroll>
        <SectionHeading
          label="THE PROCESS"
          title="From Kickoff to Self-Sufficiency"
          subtitle="A clear, proven path from strategy to a live, running funnel your team owns."
        />
      </RevealOnScroll>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
          style={{ background: 'var(--border)' }}
        />

        {steps.map((step, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="flex gap-6 md:gap-8 mb-10 last:mb-0 relative">
              {/* Number circle */}
              <div
                className="font-mono shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-base font-bold z-10"
                style={{
                  border: '2px solid var(--accent)',
                  background: 'var(--bg-primary)',
                  color: 'var(--accent)',
                }}
              >
                {step.num}
              </div>

              {/* Content */}
              <div className="pt-1 md:pt-3">
                <span
                  className="font-mono text-xs tracking-[2px] uppercase block mb-1"
                  style={{ color: 'var(--accent-warm)' }}
                >
                  {step.timing}
                </span>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

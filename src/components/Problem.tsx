import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'

const painPoints = [
  {
    label: 'The Gap',
    text: "Your technology is sophisticated, but your content reads like everyone else's. Generic posts and surface-level campaigns can't communicate the depth of what you've built.",
  },
  {
    label: 'The Trap',
    text: "Your content is either too technical — speaking to engineers, not buyers — or too watered down to mean anything. Neither converts.",
  },
  {
    label: 'The Cost',
    text: "Without a real content funnel, your sales team carries the entire load. Every deal starts cold. Every conversation starts from scratch.",
  },
]

export default function Problem() {
  return (
    <section className="section-container">
      <RevealOnScroll>
        <SectionHeading
          label="THE PROBLEM"
          title="Great Technology. Invisible Brand."
          subtitle="Complex B2B brands are sitting on incredible ideas — but their content doesn't do them justice."
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {painPoints.map((point, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div
              className="rounded-xl p-8 text-center"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <span
                className="font-mono text-xs tracking-[2px] uppercase block mb-3"
                style={{ color: 'var(--accent-warm)' }}
              >
                {point.label}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {point.text}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'

const faqs = [
  {
    q: 'What kinds of brands is this for?',
    a: "Complex tech — SaaS, enterprise software, AI/ML, developer tools. If explaining what you do is harder than building it, this is for you.",
  },
  {
    q: 'What if I already have a landing page?',
    a: "This isn't a redesign service. We build a complete funnel from offer to distribution. Your existing page might be part of the puzzle, but we're architecting the whole system.",
  },
  {
    q: "How much of my team's time does this take?",
    a: "Minimal during the build — I do the heavy lifting. Your team gets involved during handoff and the 90-day support window, which is where the real learning happens.",
  },
  {
    q: 'What happens after 90 days?',
    a: "You're self-sufficient. That's the whole point. Your team knows how to create, test, and iterate on funnels independently. You won't need me anymore — and that's by design.",
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Absolutely. Visit signal.strattegys.com for the portfolio — visual, experiential content that makes people stop and pay attention.',
  },
  {
    q: "What's the timeline from kickoff to live funnel?",
    a: 'Approximately 4 weeks to a live, running funnel. Then 90 days of support to test, refine, and scale.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden transition-colors"
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${open ? 'var(--border-accent)' : 'var(--border)'}`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer"
        style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)' }}
      >
        <span className="font-semibold text-sm md:text-base pr-4">{q}</span>
        <span
          className="font-mono text-lg shrink-0 transition-transform duration-300"
          style={{
            color: 'var(--accent)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section-container" style={{ background: 'var(--bg-secondary)' }}>
      <RevealOnScroll>
        <SectionHeading label="FREQUENTLY ASKED" title="Questions Before We Start" />
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}

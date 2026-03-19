import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'

const deliverables = [
  {
    icon: '\u{1F3AF}',
    title: 'Custom Landing Page',
    desc: 'A high-converting landing page designed around your specific offer — clear messaging, compelling visuals, and a CTA that drives action.',
  },
  {
    icon: '\u{1F4A1}',
    title: 'Killer Offer Design',
    desc: "We architect the offer itself — packaging, positioning, objection handling. Not just a pretty page, but an offer people can't ignore.",
  },
  {
    icon: '\u{1F4E3}',
    title: 'Supporting Content Suite',
    desc: 'LinkedIn posts, email sequences, and distribution content engineered to drive the right traffic into your funnel.',
  },
  {
    icon: '\u{1F680}',
    title: 'Live Execution & Demo',
    desc: "I don't just hand you assets. I run the funnel live so you can see exactly how it performs in the wild — real traffic, real data.",
  },
  {
    icon: '\u{1F465}',
    title: 'Team Handoff & Training',
    desc: 'Your team gets the playbook, the templates, and the knowledge to replicate the process and create their own variations independently.',
  },
  {
    icon: '\u{1F6E1}\uFE0F',
    title: '90 Days of Support',
    desc: 'Three months of direct access for testing, refining, and iterating until your funnel is dialed in and your team is self-sufficient.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="section-container" style={{ background: 'var(--bg-secondary)' }}>
      <RevealOnScroll>
        <SectionHeading
          label="WHAT YOU GET"
          title="Everything You Need to Launch and Run a Content Funnel"
          subtitle="A complete, executed funnel — not a deck of recommendations you'll never implement."
        />
      </RevealOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {deliverables.map((d, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <Card icon={d.icon} title={d.title}>
              {d.desc}
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

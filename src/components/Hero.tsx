import { useEffect, useState } from 'react'
import CTAButton from './ui/CTAButton'

function FadeUp({ delay, children, className = '' }: { delay: number; children: React.ReactNode; className?: string }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay * 1000)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,146,47,0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(59,191,178,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="section-container text-center max-w-4xl pt-28">
        {/* Wordmark */}
        <FadeUp delay={0.1} className="mb-6">
          <span
            className="font-brand inline-block text-sm font-bold tracking-[6px] uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            Strattegys
          </span>
        </FadeUp>

        {/* Label */}
        <FadeUp delay={0.15} className="mb-8">
          <span
            className="font-mono inline-block text-xs tracking-[3px] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Content Funnel Build — Limited Engagements
          </span>
        </FadeUp>

        {/* Headline — serif display */}
        <FadeUp delay={0.25}>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Get a{' '}
            <span style={{ color: 'var(--accent)' }}>Done-For-You
            <br />Content Funnel</span>{' '}
            That
            <br />Runs Without You
          </h1>
        </FadeUp>

        {/* Subheading */}
        <FadeUp delay={0.4}>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            A complete content funnel — landing page, killer offer, supporting content — built, launched, and handed off to your team with 90 days of support.
          </p>
        </FadeUp>

        {/* CTA row */}
        <FadeUp delay={0.55} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <CTAButton href="#book">Get Started &rarr;</CTAButton>
          <CTAButton href="https://signal.strattegys.com" variant="secondary">
            See My Work
          </CTAButton>
        </FadeUp>

        {/* Trust line */}
        <FadeUp delay={0.65}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Free consultation &bull; Fixed project price &bull; 90-day support included
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

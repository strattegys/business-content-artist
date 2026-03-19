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
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(232,146,47,0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(59,191,178,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="section-container text-center max-w-4xl pt-28">
        {/* Badge */}
        <FadeUp delay={0.1} className="mb-8">
          <span
            className="font-mono inline-flex items-center gap-2 text-xs tracking-[2px] uppercase px-5 py-2.5 rounded-full"
            style={{
              border: '1px solid var(--border-accent)',
              background: 'var(--accent-glow)',
              color: 'var(--accent)',
            }}
          >
            <span
              className="pulse-dot inline-block w-2 h-2 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            Content Funnel Build — Limited Engagements
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Get a{' '}
            <span style={{ color: 'var(--accent)' }}>Done-For-You Content Funnel</span>
            <br />
            That Runs Without You.
          </h1>
        </FadeUp>

        {/* Subheading */}
        <FadeUp delay={0.35}>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            A complete content funnel — landing page, killer offer, supporting content — built, launched, and handed off to your team with 90 days of support.
          </p>
        </FadeUp>

        {/* Supporting text */}
        <FadeUp delay={0.45}>
          <p
            className="text-base max-w-xl mx-auto mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            Landing page. Killer offer. Supporting content. Live execution. 90 days of hands-on support. One fixed price.
          </p>
        </FadeUp>

        {/* Price placeholder */}
        <FadeUp delay={0.55} className="mb-8">
          <span className="font-mono text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>
            $X,XXX
          </span>
          <span className="block text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Fixed Project Price
          </span>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.7} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CTAButton href="#book">Book Your Strategy Call</CTAButton>
          <CTAButton href="https://signal.strattegys.com" variant="secondary">
            See My Work
          </CTAButton>
        </FadeUp>
      </div>
    </section>
  )
}

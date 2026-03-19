import RevealOnScroll from './ui/RevealOnScroll'
import CTAButton from './ui/CTAButton'

export default function FinalCTA() {
  return (
    <section id="book" className="section-container text-center relative">
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,146,47,0.08), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <RevealOnScroll>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Ready to Build a Content Funnel
          <br />
          <span style={{ color: 'var(--accent)' }}>That Actually Converts?</span>
        </h2>

        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Let's talk about your brand, your market, and how a content funnel can change the way you generate demand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CTAButton href="https://calendly.com">
            Book Your Strategy Call
          </CTAButton>
        </div>

        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Or reach out directly:{' '}
          <a
            href="mailto:gdavis@strattegys.com"
            className="no-underline transition-opacity hover:opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            gdavis@strattegys.com
          </a>
        </p>
      </RevealOnScroll>
    </section>
  )
}

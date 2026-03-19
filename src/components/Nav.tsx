import CTAButton from './ui/CTAButton'

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: 'rgba(11, 22, 34, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <a
        href="#"
        className="font-brand text-sm font-bold tracking-[4px] uppercase no-underline"
        style={{ color: 'var(--text-primary)' }}
      >
        Strattegys
      </a>
      <CTAButton href="#book" className="!py-2.5 !px-5 !text-sm">
        Get Started &rarr;
      </CTAButton>
    </nav>
  )
}

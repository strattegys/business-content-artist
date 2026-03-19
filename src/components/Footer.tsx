export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-6 text-sm relative z-10"
      style={{
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <span>&copy; {new Date().getFullYear()} Govind Davis / Business Content Artist</span>
        <span className="hidden sm:inline" style={{ color: 'var(--border)' }}>|</span>
        <a
          href="https://signal.strattegys.com"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-opacity hover:opacity-80"
          style={{ color: 'var(--text-secondary)' }}
        >
          Portfolio
        </a>
        <span className="hidden sm:inline" style={{ color: 'var(--border)' }}>|</span>
        <a
          href="mailto:gdavis@strattegys.com"
          className="no-underline transition-opacity hover:opacity-80"
          style={{ color: 'var(--text-secondary)' }}
        >
          gdavis@strattegys.com
        </a>
      </div>
    </footer>
  )
}

import type { ReactNode } from 'react'

interface Props {
  icon: string
  title: string
  children: ReactNode
}

export default function Card({ icon, title, children }: Props) {
  return (
    <div
      className="relative rounded-xl p-6 transition-all duration-300 overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border-accent)'
        el.style.transform = 'translateY(-3px)'
        el.style.background = 'var(--bg-card-hover)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border)'
        el.style.transform = 'translateY(0)'
        el.style.background = 'var(--bg-card)'
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, var(--accent), var(--accent-warm))',
        }}
      />
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </p>
    </div>
  )
}

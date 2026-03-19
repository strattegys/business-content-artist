import type { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: Props) {
  const base = 'font-brand inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer no-underline'

  const styles = variant === 'primary'
    ? {
        background: 'var(--accent)',
        color: '#0a0a0f',
        padding: '1rem 2.5rem',
        fontSize: '1.05rem',
        boxShadow: '0 0 30px var(--accent-glow)',
      }
    : {
        background: 'transparent',
        color: 'var(--accent)',
        padding: '1rem 2.5rem',
        fontSize: '1.05rem',
        border: '1px solid var(--border-accent)',
      }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
      style={styles}
      onMouseEnter={e => {
        if (variant === 'primary') {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px var(--accent-glow), 0 0 100px rgba(0,212,255,0.1)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
        } else {
          (e.currentTarget as HTMLElement).style.background = 'var(--accent-glow)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
        }
      }}
      onMouseLeave={e => {
        if (variant === 'primary') {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px var(--accent-glow)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        } else {
          (e.currentTarget as HTMLElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        }
      }}
    >
      {children}
    </a>
  )
}

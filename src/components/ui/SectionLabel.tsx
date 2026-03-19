interface Props {
  children: string
}

export default function SectionLabel({ children }: Props) {
  return (
    <span
      className="font-mono inline-block text-xs tracking-[3px] uppercase mb-4"
      style={{ color: 'var(--accent)' }}
    >
      {children}
    </span>
  )
}

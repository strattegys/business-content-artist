import SectionLabel from './SectionLabel'

interface Props {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

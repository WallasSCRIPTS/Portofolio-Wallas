function SectionHead({ index, label, note, light = false }) {
  return (
    <div
      className={`section-head${light ? ' section-head--light' : ''}`}
      data-reveal
    >
      <span className="section-head__index mono">({index})</span>
      <span className="section-head__label mono">{label}</span>
      <span className="section-head__line" aria-hidden="true" />
      <span className="section-head__note mono">{note}</span>
    </div>
  )
}

export default SectionHead

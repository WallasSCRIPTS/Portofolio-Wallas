import { useId } from 'react'
import LogoMark from './LogoMark'

function RotatingBadge({
  className = '',
  text = 'Disponível para projetos · Wallas · 2026 · ',
}) {
  const rawId = useId()
  const id = `badge-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`

  return (
    <div className={`rotating-badge ${className}`} aria-hidden="true">
      <svg className="rotating-badge__ring" viewBox="0 0 200 200">
        <defs>
          <path
            id={id}
            d="M100,100 m-77,0 a77,77 0 1,1 154,0 a77,77 0 1,1 -154,0"
            fill="none"
          />
        </defs>
        <text>
          <textPath
            href={`#${id}`}
            startOffset="0"
            textLength="475"
            lengthAdjust="spacing"
          >
            {text}
          </textPath>
        </text>
      </svg>
      <LogoMark className="rotating-badge__mark" strokeWidth={6} />
    </div>
  )
}

export default RotatingBadge

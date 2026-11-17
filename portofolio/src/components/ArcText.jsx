import { useId } from 'react'

function ArcText({ className = '' }) {
  const rawId = useId()
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '')
  const arcId = `arc-${id}`

  return (
    <svg
      className={`arc-text ${className}`}
      viewBox="0 0 1200 140"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <path
          id={arcId}
          d="M 70 130 A 1650 1650 0 0 1 1130 130"
          fill="none"
        />
      </defs>
      <path
        d="M 70 130 A 1650 1650 0 0 1 1130 130"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 9"
        opacity="0.65"
      />
      <text
        fill="currentColor"
        fontFamily="Space Mono, monospace"
        fontSize="13"
        letterSpacing="4.5"
        opacity="0.8"
      >
        <textPath href={`#${arcId}`} startOffset="0">
          PORTFOLIO · PORTFOLIO · PORTFOLIO · PORTFOLIO · PORTFOLIO ·
        </textPath>
      </text>
    </svg>
  )
}

export default ArcText

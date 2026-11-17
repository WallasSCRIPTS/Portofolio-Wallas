export function Arrow({ direction = 'up-right', className = '' }) {
  const paths = {
    'up-right': 'M6 18 18 6M8 6h10v10',
    right: 'M4 12h16M13 5l7 7-7 7',
    down: 'M12 4v16M5 13l7 7 7-7',
    up: 'M12 20V4M5 11l7-7 7 7',
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d={paths[direction]} />
    </svg>
  )
}

export function Plus({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function Asterisk({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 1v22M3.4 4.6l17.2 14.8M20.6 4.6 3.4 19.4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

export function Triangle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="m8 2 6 12H2L8 2Z" fill="currentColor" />
    </svg>
  )
}

export function Close({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

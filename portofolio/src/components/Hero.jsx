import { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const element = heroRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let frame = 0
    const onMove = (event) => {
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        element.style.setProperty('--mx', x.toFixed(3))
        element.style.setProperty('--my', y.toFixed(3))
      })
    }

    const reset = () => {
      element.style.setProperty('--mx', '0')
      element.style.setProperty('--my', '0')
    }

    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', reset)

    return () => {
      cancelAnimationFrame(frame)
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', reset)
    }
  }, [])

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <svg className="hero__defs" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="glass-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".2" stopColor="#68c9ff" />
            <stop offset=".42" stopColor="#f7fdff" />
            <stop offset=".64" stopColor="#587bff" />
            <stop offset=".82" stopColor="#e9faff" />
            <stop offset="1" stopColor="#4771d8" />
          </linearGradient>
          <linearGradient id="glass-face" x1="0" y1="0" x2=".8" y2="1">
            <stop offset="0" stopColor="#e7faff" stopOpacity=".78" />
            <stop offset=".42" stopColor="#378bdc" stopOpacity=".28" />
            <stop offset="1" stopColor="#182c72" stopOpacity=".72" />
          </linearGradient>
          <radialGradient id="glass-shine" cx=".28" cy=".2" r=".9">
            <stop offset="0" stopColor="#fff" stopOpacity=".95" />
            <stop offset=".25" stopColor="#8ee4ff" stopOpacity=".28" />
            <stop offset="1" stopColor="#4c70ff" stopOpacity=".04" />
          </radialGradient>
          <filter id="glass-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="hero__label mono">
        <span>/GRAPHIC DESIGN</span>
        <span>/3D ARTIST</span>
      </div>

      <div className="hero__aura" aria-hidden="true" />
      <div className="hero__surface" aria-hidden="true">
        <span className="hero__surface-line" />
      </div>
      <div className="hero__particles" aria-hidden="true" />

      <h1 className="hero__title" aria-label="Portfolio">
        <span>Port</span>
        <span>folio</span>
      </h1>

      <svg
        className="hero__symbol hero__symbol--x"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <path
          className="glass-face"
          d="M37 9 60 32 83 9l28 28-23 23 23 23-28 28-23-23-23 23L9 86l23-24L9 37z"
        />
        <path
          className="glass-edge"
          d="m37 9 23 23L83 9l28 28-23 23 23 23-28 28-23-23-23 23L9 86l23-24L9 37z"
        />
        <path className="glass-highlight" d="m17 37 20-20 18 18m30-18 20 20" />
        <path className="glass-shadow" d="m17 84 19 19 18-18m32 18 19-19" />
      </svg>

      <svg
        className="hero__symbol hero__symbol--circle"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <ellipse className="glass-face" cx="60" cy="58" rx="39" ry="27" transform="rotate(28 60 58)" />
        <ellipse className="glass-edge" cx="60" cy="58" rx="39" ry="27" transform="rotate(28 60 58)" />
        <ellipse className="glass-inner" cx="60" cy="58" rx="27" ry="15" transform="rotate(28 60 58)" />
        <path className="glass-highlight" d="M38 31c11-8 25-8 37-1m20 43c-4 8-11 13-20 15" />
      </svg>

      <svg
        className="hero__symbol hero__symbol--triangle"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <path className="glass-face" d="m60 13 48 88H12z" />
        <path className="glass-edge" d="m60 13 48 88H12z" />
        <path className="glass-shadow" d="m60 13 13 88h35z" />
        <path className="glass-highlight" d="m60 21 38 72M20 94h79" />
      </svg>

      <svg
        className="hero__symbol hero__symbol--square"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <path className="glass-face" d="m27 14 69 13 10 69-69-13z" />
        <path className="glass-edge" d="m27 14 69 13 10 69-69-13z" />
        <path className="glass-shadow" d="m27 14 13 69 66 13-10-69z" />
        <path className="glass-highlight" d="m34 22 58 11m9 56-55-10" />
      </svg>

      <span className="hero__year">2025</span>

      <div className="hero__credits mono">
        <span>Thien Truc Nguyen</span>
        <span>Karrina Nguyen</span>
      </div>
      <svg
        className="hero__credit-mark"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <path
          className="glass-face"
          d="M37 9 60 32 83 9l28 28-23 23 23 23-28 28-23-23-23 23L9 86l23-24L9 37z"
        />
        <path
          className="glass-edge"
          d="m37 9 23 23L83 9l28 28-23 23 23 23-28 28-23-23-23 23L9 86l23-24L9 37z"
        />
      </svg>
    </section>
  )
}

export default Hero

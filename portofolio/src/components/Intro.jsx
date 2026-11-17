import { useEffect, useState } from 'react'
import LogoMark from './LogoMark'

function Intro() {
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setPhase('gone')
      return undefined
    }

    document.documentElement.classList.add('intro-active')
    const outTimer = window.setTimeout(() => setPhase('leaving'), 1050)
    const goneTimer = window.setTimeout(() => setPhase('gone'), 1950)

    return () => {
      document.documentElement.classList.remove('intro-active')
      window.clearTimeout(outTimer)
      window.clearTimeout(goneTimer)
    }
  }, [])

  useEffect(() => {
    if (phase === 'gone') {
      document.documentElement.classList.remove('intro-active')
    }
  }, [phase])

  if (phase === 'gone') return null

  return (
    <div
      className={`intro${phase === 'leaving' ? ' is-leaving' : ''}`}
      aria-hidden="true"
    >
      <div className="intro__red" />
      <div className="intro__mark">
        <LogoMark strokeWidth={5} />
      </div>
      <div className="intro__word">
        <span className="intro__outline">Wallas</span>
        <span className="intro__solid">Wallas</span>
      </div>
      <div className="intro__meta mono">
        <span>Portfolio / 2026</span>
        <span>Carregando experiência</span>
      </div>
      <div className="intro__bar">
        <span />
      </div>
    </div>
  )
}

export default Intro

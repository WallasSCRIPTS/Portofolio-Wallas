import { useEffect, useRef } from 'react'
import ArcText from './ArcText'
import FanDeck from './FanDeck'
import LogoMark from './LogoMark'
import { Plus, Triangle } from './Icons'

function Hero({ onOpenProject }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    let raf = 0

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const mx = (event.clientX - rect.left) / rect.width - 0.5
      const my = (event.clientY - rect.top) / rect.height - 0.5

      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', mx.toFixed(3))
        el.style.setProperty('--my', my.toFixed(3))
      })
    }

    const reset = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
    }
  }, [])

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <div className="hero__top">
        <p className="hero__welcome">
          Bem-vindo
          <br />
          ao meu
        </p>
        <p className="hero__top-note mono">
          Portfólio
          <br />
          <span>2026 — BR</span>
        </p>
      </div>

      <div className="hero__red" aria-hidden="true" />

      <div className="hero__title-wrap">
        <span className="hero__side hero__side--left" aria-hidden="true">
          <Triangle />
        </span>
        <h1 className="hero__title">
          <span className="hero__title-ghost" aria-hidden="true">
            Portfolio
          </span>
          <span className="hero__title-outline" aria-hidden="true">
            Portfolio
          </span>
          <span className="hero__title-solid">Portfolio</span>
        </h1>
        <span className="hero__side hero__side--right" aria-hidden="true">
          <Triangle />
        </span>
      </div>

      <div className="hero__meta">
        <span className="mono">Wallas</span>
        <span className="hero__meta-center mono">Criativo independente</span>
        <span className="mono">Desenvolvedor criativo</span>
      </div>

      <FanDeck onOpenProject={onOpenProject} />

      <ArcText className="hero__arc" />

      <div className="hero__signature" aria-hidden="true">
        <LogoMark className="hero__signature-mark" strokeWidth={6} eye={false} />
        <span className="mono">Wallas / 26</span>
      </div>

      <span className="hero__scroll mono">
        Scroll
        <span className="hero__scroll-line" aria-hidden="true" />
        <span aria-hidden="true">↓</span>
      </span>

      <Plus className="hero__plus hero__plus--tl" />
      <Plus className="hero__plus hero__plus--tr" />
      <Plus className="hero__plus hero__plus--bl" />
      <Plus className="hero__plus hero__plus--br" />
      <Plus className="hero__plus hero__plus--ml" />
      <Plus className="hero__plus hero__plus--mr" />
    </section>
  )
}

export default Hero

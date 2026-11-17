import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import LogoMark from './LogoMark'
import { Plus, Triangle } from './Icons'

const slots = [
  { angle: -58, x: -42, y: 126, z: 1 },
  { angle: -38, x: -28, y: 58, z: 2 },
  { angle: -18, x: -14, y: 12, z: 3 },
  { angle: 18, x: 14, y: 12, z: 3 },
  { angle: 38, x: 28, y: 58, z: 2 },
  { angle: 58, x: 42, y: 126, z: 1 },
]

const variants = ['deep', 'noire', 'one', 'cairo', 'concrete', 'flora']

const brandStyle = {
  '--a': '0deg',
  '--x': '0vw',
  '--y': '-12px',
  '--z': 7,
}

function CardBody({ variant, project }) {
  if (variant === 'brand') {
    return (
      <>
        <Triangle className="brand-tri brand-tri--top" />
        <span className="brand-eyebrow">Portfolio</span>
        <LogoMark className="brand-mark" strokeWidth={4.5} />
        <span className="brand-foot">Wallas / 2026</span>
        <Triangle className="brand-tri brand-tri--bottom" />
      </>
    )
  }

  if (variant === 'flora') {
    return (
      <>
        <figure className="fc-media">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </figure>
        <div className="fc-caption">
          <span className="fc-micro">Botânica · 2023</span>
          <span className="fc-title">Flora</span>
        </div>
        <Plus className="fc-plus fc-plus--tr" />
        <span className="fc-corner-index">06</span>
      </>
    )
  }

  if (variant === 'deep') {
    return (
      <>
        <img
          className="fc-cover"
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <span className="fc-vignette" />
        <span className="fc-micro fc-micro--top">Experimento · 01</span>
        <span className="fc-vertical">Deep Impact</span>
        <span className="fc-ring" />
        <span className="fc-disc">11</span>
      </>
    )
  }

  if (variant === 'noire') {
    return (
      <>
        <img
          className="fc-cover fc-cover--noire"
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <span className="fc-eyes">Give<br />your<br />eyes</span>
        <div className="fc-bottom-bar">
          <span className="fc-title fc-title--small">Noire</span>
          <span className="fc-micro fc-micro--light">2025</span>
        </div>
        <Plus className="fc-plus fc-plus--tr fc-plus--light" />
      </>
    )
  }

  if (variant === 'one') {
    return (
      <>
        <figure className="fc-media fc-media--one">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </figure>
        <span className="fc-bignum">1:1</span>
        <div className="fc-caption fc-caption--row">
          <span className="fc-micro">Automotive</span>
          <span className="fc-micro">2025</span>
        </div>
      </>
    )
  }

  if (variant === 'cairo') {
    return (
      <>
        <img
          className="fc-cover fc-cover--cairo"
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <span className="fc-arch" />
        <span className="fc-vertical fc-vertical--right">Cairo<br />Nights</span>
        <span className="fc-micro fc-micro--bottom">Identidade · 04</span>
        <span className="fc-dots" />
      </>
    )
  }

  return (
    <>
      <img
        className="fc-cover fc-cover--concrete"
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
      <span className="fc-vertical fc-vertical--left">Concrete</span>
      <span className="fc-micro fc-micro--bottom">Arquitetura · 05</span>
    </>
  )
}

function FanDeck({ onOpenProject }) {
  const deckRef = useRef(null)
  const wheelRef = useRef(0)
  const unlockRef = useRef(0)
  const [offset, setOffset] = useState(1)

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return undefined

    const onWheel = (event) => {
      event.preventDefault()

      const now = window.performance.now()
      if (now < unlockRef.current) return

      wheelRef.current += event.deltaY
      if (Math.abs(wheelRef.current) < 26) return

      const direction = wheelRef.current > 0 ? 1 : -1
      wheelRef.current = 0
      unlockRef.current = now + 360
      setOffset((value) => (value + direction + slots.length) % slots.length)
    }

    deck.addEventListener('wheel', onWheel, { passive: false })

    return () => deck.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div
      className="deck"
      ref={deckRef}
      data-cursor="GIRAR"
      aria-label="Projetos em destaque. Use o scroll para girar o leque."
      onPointerLeave={() => {
        wheelRef.current = 0
      }}
    >
      <div className="deck__parallax">
        <div className="deck__sway">
          <div
            className="fan-card fan-card--brand"
            style={brandStyle}
            key="brand-card"
            aria-label="Wallas, portfólio 2026"
          >
            <CardBody variant="brand" />
          </div>

          {projects.map((project, index) => {
            const slot = slots[(index + offset) % slots.length]
            const variant = variants[index]
            const style = {
              '--a': `${slot.angle}deg`,
              '--x': `${slot.x}vw`,
              '--y': `${slot.y}px`,
              '--z': slot.z,
            }

            return (
              <button
                type="button"
                className={`fan-card fan-card--${variant}`}
                style={style}
                key={project.id}
                onClick={() => onOpenProject(project)}
                data-cursor="VER"
                aria-label={`Abrir projeto ${project.title}`}
              >
                <CardBody variant={variant} project={project} />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FanDeck

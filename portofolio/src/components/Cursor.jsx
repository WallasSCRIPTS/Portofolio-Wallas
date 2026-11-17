import { useEffect, useRef } from 'react'

const INTERACTIVE =
  'a, button, input, textarea, select, summary, label, [role="button"], [data-cursor]'

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return undefined

    const dot = dotRef.current
    const ring = ringRef.current
    const labelEl = labelRef.current
    if (!dot || !ring || !labelEl) return undefined

    document.body.classList.add('has-custom-cursor')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ease = reduceMotion ? 1 : 0.18

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let visible = false
    let hovering = false
    let pressed = false
    let label = ''
    let frame = 0

    const syncClasses = () => {
      ring.classList.toggle('is-hovering', hovering && !label)
      ring.classList.toggle('has-label', Boolean(label))
      ring.classList.toggle('is-down', pressed)
      ring.style.opacity = visible ? '1' : '0'
      dot.style.opacity = visible ? '1' : '0'
    }

    const syncHover = (event) => {
      const target = event.target
      const interactive =
        target instanceof Element ? target.closest(INTERACTIVE) : null
      const nextHovering = Boolean(interactive)
      const nextLabel = interactive?.getAttribute('data-cursor')?.trim() ?? ''

      if (nextHovering !== hovering) hovering = nextHovering
      if (nextLabel !== label) {
        label = nextLabel
        labelEl.textContent = nextLabel
      }

      syncClasses()
    }

    const render = () => {
      ringX += (pointerX - ringX) * ease
      ringY += (pointerY - ringY) * ease

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`

      frame = window.requestAnimationFrame(render)
    }

    const onPointerMove = (event) => {
      if (!visible) {
        visible = true
        ringX = event.clientX
        ringY = event.clientY
      }

      pointerX = event.clientX
      pointerY = event.clientY
      syncHover(event)
    }

    const onPointerDown = () => {
      pressed = true
      syncClasses()
    }

    const onPointerUp = () => {
      pressed = false
      syncClasses()
    }

    const onMouseOut = (event) => {
      if (event.relatedTarget) return
      visible = false
      syncClasses()
    }

    const onWindowBlur = () => {
      visible = false
      pressed = false
      syncClasses()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    window.addEventListener('pointercancel', onPointerUp, { passive: true })
    window.addEventListener('blur', onWindowBlur)
    document.addEventListener('mouseout', onMouseOut)

    syncClasses()
    frame = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
      window.removeEventListener('blur', onWindowBlur)
      document.removeEventListener('mouseout', onMouseOut)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__ring" ref={ringRef}>
        <span className="cursor__label" ref={labelRef} />
      </div>
      <div className="cursor__dot" ref={dotRef} />
    </div>
  )
}

export default Cursor

import { useEffect, useRef } from 'react'
import { Arrow, Close } from './Icons'

function ProjectModal({ project, onClose, onNext }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    const previousFocus = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute('disabled'))

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal">
      <button
        type="button"
        className="modal__backdrop"
        onClick={onClose}
        aria-label="Fechar projeto"
        tabIndex={-1}
      />

      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        ref={panelRef}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          ref={closeRef}
        >
          Fechar
          <Close />
        </button>

        <div className="modal__media">
          <img
            src={project.image}
            alt={project.alt}
            loading="eager"
            decoding="async"
          />
          <span className="modal__index">
            Projeto {project.index} — {project.year}
          </span>
        </div>

        <div className="modal__content">
          <span className="modal__kicker">{project.kicker}</span>
          <h2 className="modal__title" id="project-modal-title">
            {project.title}
          </h2>
          <p className="modal__desc">{project.description}</p>

          <dl className="modal__meta">
            <div>
              <dt>Função</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Ano</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>

          <div className="modal__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button type="button" className="modal__next" onClick={onNext}>
            Próximo projeto
            <Arrow direction="up-right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

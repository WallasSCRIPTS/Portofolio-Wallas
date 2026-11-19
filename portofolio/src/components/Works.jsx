import { projects } from '../data/projects'
import { Arrow } from './Icons'
import LayeredTitle from './LayeredTitle'
import SectionHead from './SectionHead'

function Works({ onOpenProject }) {
  return (
    <section className="section works" id="projetos">
      <SectionHead index="02" label="Selected works" note="Trabalhos selecionados" />

      <div className="works__head">
        <LayeredTitle className="works__title" data-reveal>
          Selected works
        </LayeredTitle>

        <div className="works__side" data-reveal style={{ '--reveal-delay': '0.1s' }}>
          <span className="works__count">(06)</span>
          <p>
            Uma seleção de trabalhos entre identidade, interfaces e experimentos
            digitais. Cada projeto é um recorte de processo, não só de resultado.
          </p>
        </div>
      </div>

      <div className="works__grid">
        {projects.map((project, i) => (
          <article className="project" key={project.id} data-reveal>
            <button
              type="button"
              className="project__hit"
              onClick={() => onOpenProject(project)}
              aria-label={`Abrir projeto ${project.title}`}
              data-cursor="ABRIR"
            >
              <div className="project__media">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                />
                {i === 0 && <span className="project__sticker">Destaque</span>}
                <span className="project__hover">
                  Ver projeto
                  <Arrow direction="up-right" />
                </span>
              </div>
            </button>

            <div className="project__info">
              <span className="project__index mono">{project.index}</span>
              <div>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__cat">{project.category}</p>
              </div>
              <span className="project__year mono">{project.year}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="works__cta" data-reveal>
        <p>
          Tem um projeto
          <br />
          em mente?
        </p>
        <a className="arrow-link" href="#contato" data-cursor="FALAR">
          Vamos conversar
          <Arrow direction="up-right" />
        </a>
      </div>
    </section>
  )
}

export default Works

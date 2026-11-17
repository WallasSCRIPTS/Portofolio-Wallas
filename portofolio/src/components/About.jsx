import { projects } from '../data/projects'
import { Arrow } from './Icons'
import LayeredTitle from './LayeredTitle'
import LogoMark from './LogoMark'
import RotatingBadge from './RotatingBadge'
import SectionHead from './SectionHead'

const capabilities = [
  'Direção de arte',
  'UI/UX',
  'Front-end',
  'Motion',
  'Identidade visual',
  '3D',
]

function About() {
  return (
    <section className="section about" id="sobre">
      <SectionHead index="01" label="Sobre" note="Quem está por trás" />

      <div className="about__title-row">
        <LayeredTitle className="about__title" data-reveal>
          Sobre
        </LayeredTitle>
        <p className="about__lead" data-reveal style={{ '--reveal-delay': '0.1s' }}>
          Design, código e movimento em uma mesma direção.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__visual" data-reveal>
          <div className="about__stack">
            <div className="mini-card mini-card--photo">
              <img
                src={projects[1].image}
                alt={projects[1].alt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mini-card mini-card--brand">
              <LogoMark strokeWidth={4.5} />
              <span>Wallas / 26</span>
            </div>

            <div className="mini-card mini-card--flora">
              <img
                src={projects[5].image}
                alt={projects[5].alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <RotatingBadge className="about__badge" />
        </div>

        <div className="about__content">
          <p className="about__manifesto" data-reveal>
            Sou <strong>Wallas</strong>, criativo que pensa em sistemas — não em peças
            isoladas.
          </p>

          <p className="about__body" data-reveal style={{ '--reveal-delay': '0.08s' }}>
            Trabalho na interseção entre arte e tecnologia, do primeiro rascunho à
            última linha de código. Meu processo é movido por curiosidade,
            experimentação e uma atenção quase obsessiva aos detalhes.
          </p>

          <p className="about__body" data-reveal style={{ '--reveal-delay': '0.14s' }}>
            Cada projeto começa com uma pergunta simples: qual é a sensação que essa
            marca precisa deixar? O resto — grid, tipografia, movimento — nasce dessa
            resposta.
          </p>

          <div className="about__stats" data-reveal style={{ '--reveal-delay': '0.18s' }}>
            <div className="about__stat">
              <strong>06</strong>
              <span>Projetos selecionados</span>
            </div>
            <div className="about__stat">
              <strong>04</strong>
              <span>Frentes de atuação</span>
            </div>
            <div className="about__stat">
              <strong>∞</strong>
              <span>Curiosidade em estoque</span>
            </div>
          </div>

          <div className="about__tags" data-reveal style={{ '--reveal-delay': '0.22s' }}>
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <a
            className="arrow-link about__link"
            href="#contato"
            data-reveal
            data-cursor="FALAR"
            style={{ '--reveal-delay': '0.26s' }}
          >
            Vamos criar algo juntos
            <Arrow direction="up-right" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

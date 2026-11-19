import { services } from '../data/projects'
import { Arrow } from './Icons'
import LayeredTitle from './LayeredTitle'
import Marquee from './Marquee'
import SectionHead from './SectionHead'

const stack = [
  'React',
  'Vite',
  'JavaScript',
  'TypeScript',
  'CSS',
  'WebGL',
  'Figma',
  'After Effects',
  'Blender',
  'Git',
]

function Services() {
  return (
    <section className="section services" id="servicos" data-header-dark>
      <SectionHead
        index="03"
        label="Experimental"
        note="Visual experiments"
        light
      />

      <div className="services__head">
        <LayeredTitle className="services__title" light data-reveal>
          Experimental
        </LayeredTitle>
        <p className="services__intro" data-reveal style={{ '--reveal-delay': '0.1s' }}>
          Um laboratório visual entre identidade, imagem, movimento, 3D e código.
          Cada projeto começa com espaço para experimentar.
        </p>
      </div>

      <div className="services__list">
        {services.map((service) => (
          <a
            className="service"
            href="#contato"
            key={service.index}
            data-reveal
            data-cursor="FALAR"
          >
            <span className="service__index mono">{service.index}</span>

            <div>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__desc">{service.description}</p>
            </div>

            <div className="service__tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <Arrow className="service__arrow" direction="up-right" />
          </a>
        ))}
      </div>

      <div className="services__stack" data-reveal>
        <span className="mono">Stack / Tools</span>
        <Marquee items={stack} speed={42} separator="·" />
      </div>
    </section>
  )
}

export default Services

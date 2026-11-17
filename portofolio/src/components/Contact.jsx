import { contactEmail, socials } from '../data/projects'
import { Arrow, Asterisk } from './Icons'
import RotatingBadge from './RotatingBadge'
import SectionHead from './SectionHead'

function Contact() {
  return (
    <section className="section contact" id="contato">
      <SectionHead index="04" label="Contato" note="Vamos conversar" />

      <div className="contact__body">
        <h2 className="contact__title">
          <span className="contact__line--solid">Vamos</span>
          <span className="contact__line--outline">
            conversar<span className="contact__title-dot">.</span>
          </span>
          <span className="contact__red" aria-hidden="true" />
          <span className="contact__asterisk" aria-hidden="true">
            <Asterisk />
          </span>
        </h2>

        <RotatingBadge
          className="contact__badge"
          text="Vamos criar juntos · Wallas · 2026 · "
        />
      </div>

      <div className="contact__grid">
        <div className="contact__cta">
          <span className="contact__label mono">
            (Novo projeto / orçamento / um oi)
          </span>
          <a
            className="contact__email"
            href={`mailto:${contactEmail}`}
            data-cursor="EMAIL"
          >
            {contactEmail}
            <Arrow direction="up-right" />
          </a>
        </div>

        <div className="contact__aside">
          <p>
            Tem uma ideia, um projeto ou só quer trocar uma ideia sobre design,
            código e tudo o que existe entre os dois? Me chama. Respondo rápido.
          </p>

          <div className="contact__socials">
            {socials.map((social) => (
              <a
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
                <Arrow direction="up-right" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

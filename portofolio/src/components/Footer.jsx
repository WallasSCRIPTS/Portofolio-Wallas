import { socials } from '../data/projects'
import { Arrow } from './Icons'

function Footer() {
  return (
    <footer className="footer" data-header-dark>
      <div className="footer__top">
        <a className="footer__brand" href="#inicio" aria-label="Wallas — início">
          Wallas
          <span>Portfolio — 2026</span>
        </a>

        <div className="footer__socials">
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

        <a className="footer__top-link" href="#inicio">
          Voltar ao topo
          <Arrow direction="up" />
        </a>
      </div>

      <div className="footer__bottom mono">
        <span>Feito com código &amp; café</span>
        <span>Brasil — UTC−3</span>
        <span>Wallas © 2026 — v.02</span>
      </div>
    </footer>
  )
}

export default Footer

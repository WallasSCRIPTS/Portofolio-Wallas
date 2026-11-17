import { contactEmail, socials } from '../data/projects'
import { Arrow } from './Icons'

const links = [
  { id: 'inicio', label: 'Início', index: '01' },
  { id: 'sobre', label: 'Sobre', index: '02' },
  { id: 'projetos', label: 'Projetos', index: '03' },
  { id: 'servicos', label: 'Serviços', index: '04' },
  { id: 'contato', label: 'Contato', index: '05' },
]

function Menu({ open, onClose }) {
  return (
    <div
      className={`menu${open ? ' is-open' : ''}`}
      id="site-menu"
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <div className="menu__red" aria-hidden="true" />
      <div className="menu__inner">
        <nav className="menu__nav" aria-label="Menu principal">
          {links.map((link) => (
            <a
              className="menu__link"
              href={`#${link.id}`}
              key={link.id}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              <span className="menu__index mono">{link.index}</span>
              <span className="menu__label">{link.label}</span>
              <Arrow className="menu__arrow" direction="up-right" />
            </a>
          ))}
        </nav>

        <aside className="menu__aside">
          <div className="menu__block">
            <span className="menu__caption mono">(Contato)</span>
            <a
              className="menu__email"
              href={`mailto:${contactEmail}`}
              tabIndex={open ? 0 : -1}
            >
              {contactEmail}
            </a>
          </div>

          <div className="menu__block">
            <span className="menu__caption mono">(Redes)</span>
            <div className="menu__socials">
              {socials.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={open ? 0 : -1}
                >
                  {social.label}
                  <Arrow direction="up-right" />
                </a>
              ))}
            </div>
          </div>

          <div className="menu__block">
            <span className="menu__caption mono">(Base)</span>
            <p className="menu__location">
              Brasil
              <br />
              <span className="mono">UTC−3 / 2026</span>
            </p>
          </div>
        </aside>
      </div>

      <div className="menu__footer mono">
        <span>Wallas © 2026</span>
        <span>Design &amp; código</span>
        <span>Portfolio — v.02</span>
      </div>
    </div>
  )
}

export default Menu

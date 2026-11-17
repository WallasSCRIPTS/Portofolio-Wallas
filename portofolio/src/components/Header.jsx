import LogoMark from './LogoMark'
import { Close } from './Icons'

function Header({ menuOpen, scrolled, light, onToggleMenu }) {
  return (
    <header
      className={`site-head${scrolled ? ' is-scrolled' : ''}${
        menuOpen ? ' is-menu-open' : ''
      }${light ? ' is-light' : ''}`}
    >
      <a
        className="site-head__brand"
        href="#inicio"
        aria-label="Wallas — voltar ao início"
      >
        <span className="site-head__name">Wallas</span>
        <span className="site-head__sub mono">Portfolio © 2026</span>
      </a>

      <div className="site-head__right">
        <span className="site-head__status mono">
          <span className="site-head__dot" aria-hidden="true" />
          Disponível para projetos
        </span>
        <button
          type="button"
          className="menu-trigger"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          data-cursor={menuOpen ? 'FECHAR' : 'MENU'}
        >
          <span className="menu-trigger__label mono">
            {menuOpen ? 'Fechar' : 'Menu'}
          </span>
          <span className="menu-trigger__icon">
            {menuOpen ? (
              <Close className="menu-trigger__close" />
            ) : (
              <LogoMark className="menu-trigger__mark" strokeWidth={5.5} />
            )}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header

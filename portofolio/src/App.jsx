import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Marquee from './components/Marquee'
import Menu from './components/Menu'
import ProjectModal from './components/ProjectModal'
import Services from './components/Services'
import Works from './components/Works'
import { projects } from './data/projects'
import useReveal from './hooks/useReveal'

const tickerItems = [
  'Design de marca',
  'Interfaces digitais',
  'Motion & 3D',
  'Desenvolvimento',
  'Direção de arte',
  '2026',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [headerLight, setHeaderLight] = useState(false)
  const progressRef = useRef(null)

  useReveal()

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement
      const max = root.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`
      }

      setScrolled((previous) => {
        const next = window.scrollY > 80
        return previous === next ? previous : next
      })

      const probe = 48
      const overDark = Array.from(
        document.querySelectorAll('[data-header-dark]'),
      ).some((element) => {
        const rect = element.getBoundingClientRect()
        return rect.top <= probe && rect.bottom >= probe
      })

      setHeaderLight((previous) => (previous === overDark ? previous : overDark))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const locked = menuOpen || Boolean(activeProject)
    document.body.style.overflow = locked ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, activeProject])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      if (activeProject) {
        setActiveProject(null)
      } else if (menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject, menuOpen])

  const openProject = useCallback((project) => {
    setMenuOpen(false)
    setActiveProject(project)
  }, [])

  const closeProject = useCallback(() => setActiveProject(null), [])

  const nextProject = useCallback(() => {
    setActiveProject((current) => {
      const index = projects.findIndex((project) => project.id === current?.id)
      return projects[(index + 1) % projects.length]
    })
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), [])

  return (
    <>
      <Intro />
      <Cursor />
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />

      <Header
        menuOpen={menuOpen}
        scrolled={scrolled}
        light={headerLight}
        onToggleMenu={toggleMenu}
      />
      <Menu open={menuOpen} onClose={closeMenu} />

      <main>
        <Hero onOpenProject={openProject} />

        <div className="ticker" data-header-dark>
          <Marquee items={tickerItems} speed={38} />
        </div>

        <About />
        <Works onOpenProject={openProject} />
        <Services />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={activeProject}
        onClose={closeProject}
        onNext={nextProject}
      />
    </>
  )
}

export default App

import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function GalaxyHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const isMobile = window.innerWidth < 600

  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const [activePath, setActivePath] = useState("/")
  const linkRefs = useRef([])

  // atualiza underline quando activePath muda
  useEffect(() => {
    const activeIndex = links.findIndex(link => link.to === activePath)
    if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
      setUnderlineStyle({
        left: linkRefs.current[activeIndex].offsetLeft,
        width: linkRefs.current[activeIndex].offsetWidth
      })
    } else {
      setUnderlineStyle({ left: 0, width: 0 })
    }
  }, [activePath])

  // remove underline se fora da home (ex: /lambo)
  useEffect(() => {
    if (location.pathname !== "/") {
      setActivePath("none")
    }
  }, [location.pathname])

  // observa scroll e muda activePath
  useEffect(() => {
    const sections = [
      { id: "about", path: "/about" },
      { id: "projects", path: "/projects" },
      { id: "contact", path: "/contact" }
    ]

    const onScroll = () => {
      if (location.pathname !== "/") return; // só faz na home
      let found = false

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top))
          if (visibleHeight > el.offsetHeight * 0.5) {
            setActivePath(sections[i].path)
            found = true
            break
          }
        }
      }

      if (!found) {
        setActivePath("/")
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const scrollAndSet = (id, path) => {
    const el = document.getElementById(id)
    navigate("/", { replace: true })
    setTimeout(() => {
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      setActivePath(path)
    }, 50)
  }

  const handleClick = (link) => {
    if (link.to === "/about") {
      scrollAndSet("about", "/about")
    } else if (link.to === "/projects") {
      scrollAndSet("projects", "/projects")
    } else if (link.to === "/contact") {
      scrollAndSet("contact", "/contact")
    } else if (link.to === "/") {
      navigate("/")
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActivePath("/")
    }
  }

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {links.map((link, index) => (
          <a
            key={index}
            ref={el => linkRefs.current[index] = el}
            onClick={() => handleClick(link)}
            style={{
              ...styles.link,
              fontSize: isMobile ? '1rem' : '1.5rem',
              cursor: 'pointer'
            }}
          >
            {link.label}
          </a>
        ))}
        {underlineStyle.width > 0 && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: underlineStyle.left,
            width: underlineStyle.width,
            height: '3px',
            background: '#fff',
            boxShadow: '0 0 10px #fff',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            pointerEvents: 'none'
          }} />
        )}
      </nav>
    </header>
  )
}

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

const isMobile = window.innerWidth < 600;

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '600px',
    height: '80px',
    background: 'radial-gradient(circle at 50% 0%, rgba(220,220,220,0.3), rgba(0,0,0,0))',
    borderBottomLeftRadius: '300px',
    borderBottomRightRadius: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(220,220,220,0.5)',
    backdropFilter: 'blur(8px)',
    zIndex: 10,
    overflow: 'hidden',
    padding: '0 10px',
  },
  nav: {
    position: 'relative',
    display: 'flex',
    gap: isMobile ? '20px' : '40px',
    zIndex: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    textShadow: '0 0 8px #ddd',
    transition: 'all 0.3s',
    position: 'relative'
  }
}

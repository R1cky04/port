import { Link } from 'react-router-dom'

export default function GalaxyHeader() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
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
  },
  nav: {
    display: 'flex',
    gap: '40px',
    zIndex: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    textShadow: '0 0 8px #ddd',
    transition: 'all 0.3s',
  }
}

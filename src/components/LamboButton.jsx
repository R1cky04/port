import { Link } from 'react-router-dom'

export default function LamboButton() {
  const isMobile = window.innerWidth < 600

  return (
    <div style={{
      position: 'absolute',
      right: '30px',
      bottom: isMobile ? '100px' : '50px',
      zIndex: 2,
    }}>
      <Link to="/Lambo" style={{
        display: 'inline-block',
        padding: isMobile ? '12px 35px' : '20px 50px',
        fontSize: isMobile ? '1.2rem' : '1.8rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '40px',
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 0 20px #fff',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px #fff'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px #fff'}
      >
        Lambo
      </Link>
    </div>
  )
}

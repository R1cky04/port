import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Link } from 'react-router-dom'
import GalaxyStars from '../components/GalaxyStars'
import NebulaParticles from '../components/NebulaParticles'
import ProfileCard from '../components/ProfileCard'
import avatar from '../assets/avatar.png'
import icon from '../assets/logo.png'

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'black',
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff99ff" />

        <GalaxyStars />
        <NebulaParticles />

        <OrbitControls
          target={[0, 0, 0]}
          autoRotate
          autoRotateSpeed={0.2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}>
        <ProfileCard
          name="Ricardo Aleluia"
          title="Software Engineer"
          handle="ricky_aleluia"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatar}
          iconUrl={icon}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>

      {/* Botão grande "Lambo" no canto inferior direito */}
      <div style={{
        position: 'absolute',
        right: '30px',
        bottom: '30px',
        zIndex: 2,
      }}>
        <Link to="/Lambo" style={{
          display: 'inline-block',
          padding: '20px 50px',       // bem maior
          fontSize: '1.8rem',          // maior texto
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
    </div>
  )
}

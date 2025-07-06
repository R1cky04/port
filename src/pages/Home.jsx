import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GalaxyStars from '../components/GalaxyStars'
import NebulaParticles from '../components/NebulaParticles'
import ProfileCard from '../components/ProfileCard'
import LamboButton from '../components/LamboButton'
import SpotifyPlayer from '../components/SpotifyPlayer'
import avatar from '../assets/avatar.png'

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
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => window.open("https://www.instagram.com/ricky_aleluia/", "_blank")}
        />
      </div>

      <LamboButton />
      <SpotifyPlayer />
    </div>
  )
}

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GalaxyStars from '../components/GalaxyStars'
import NebulaParticles from '../components/NebulaParticles'
import ProfileCard from '../components/ProfileCard'
import LamboButton from '../components/LamboButton'
import SpotifyPlayer from '../components/SpotifyPlayer'
import Beams from '../components/Beams'
import avatar from '../assets/avatar.png'

export default function Home() {
  const isMobile = window.innerWidth < 768;  // podes ajustar para 600 se quiseres

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Beams background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* 3D Canvas background */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'black',
          zIndex: 1
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

      {/* Profile card */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${isMobile ? 1 : 1.2})`,
        zIndex: 2,
        transition: 'transform 0.3s'
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

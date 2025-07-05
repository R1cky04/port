import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MyModel from '../components/MyModel'

export default function Lambo() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={1.2} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={1.6} />
        <pointLight position={[0, 2, 2]} intensity={1.5} distance={10} decay={2} />

        <MyModel scale={1.5} />

        <OrbitControls
          enableZoom={true}
          minDistance={5}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Botão com setas glow */}
      <div style={{
        position: 'fixed',
        bottom: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        zIndex: 10
      }}>
        <span style={{
          fontSize: '4rem',
          color: '#ff00ff',
          textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
          animation: 'pulse 2s infinite'
        }}>→</span>

        <button
          style={{
            padding: '20px 50px',
            fontSize: '2rem',
            background: 'linear-gradient(90deg, #ff00cc, #3333ff)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(255,0,255,0.8)',
            transition: 'transform 0.3s'
          }}
          onClick={() => window.open('https://gofund.me/2f6617b7', '_blank')}
          onMouseEnter={e => e.target.style.transform = 'scale(1.15)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          Donate for Lambo
        </button>

        <span style={{
          fontSize: '4rem',
          color: '#00ffff',
          textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
          animation: 'pulse 2s infinite alternate'
        }}>←</span>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { text-shadow: 0 0 10px, 0 0 20px, 0 0 30px; transform: scale(1);}
            50% { text-shadow: 0 0 20px, 0 0 30px, 0 0 40px; transform: scale(1.2);}
            100% { text-shadow: 0 0 10px, 0 0 20px, 0 0 30px; transform: scale(1);}
          }
        `}
      </style>
    </div>
  )
}

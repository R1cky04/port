import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MyModel from '../components/MyModel'
import Lightning from '../components/Lightning'

export default function Lambo() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Lightning background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      {/* Canvas with 3D model on top */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
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
      </div>

      {/* Botão com setas glow */}
      <div className="donate-container">
        <span className="arrow left">→</span>

        <button
          className="donate-button"
          onClick={() => window.open('https://gofund.me/2f6617b7', '_blank')}
          onMouseEnter={e => e.target.style.transform = 'scale(1.15)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          Donate for Lambo
        </button>

        <span className="arrow right">←</span>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { text-shadow: 0 0 10px, 0 0 20px, 0 0 30px; transform: scale(1);}
            50% { text-shadow: 0 0 20px, 0 0 30px, 0 0 40px; transform: scale(1.2);}
            100% { text-shadow: 0 0 10px, 0 0 20px, 0 0 30px; transform: scale(1);}
          }

          .donate-container {
            position: fixed;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 30px;
            z-index: 10;
          }

          .arrow {
            font-size: 4rem;
            animation: pulse 2s infinite;
          }

          .arrow.left {
            color: #ff00ff;
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
          }

          .arrow.right {
            color: #00ffff;
            text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
            animation: pulse 2s infinite alternate;
          }

          .donate-button {
            padding: 20px 50px;
            font-size: 2rem;
            background: linear-gradient(90deg, #ff00cc, #3333ff);
            border: none;
            border-radius: 12px;
            color: white;
            cursor: pointer;
            box-shadow: 0 0 25px rgba(255,0,255,0.8);
            transition: transform 0.3s;
          }

          @media (max-width: 600px) {
            .arrow {
              font-size: 2.5rem;
            }
            .donate-button {
              padding: 12px 30px;
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </div>
  )
}

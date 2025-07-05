import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GalaxyStars from '../components/GalaxyStars';
import NebulaParticles from '../components/NebulaParticles';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    { title: "About Ricardo Aleluia", content: "I'm a Computer Engineering student from Algarve University, currently finishing my degree. Passionate about programming, AI, and exploring new challenges." },
    { title: "Skills", content: "Python, Java, C, OOP, Git, Fullstack Concepts, Web APIs, Networking (TCP/IP, Routing), Scrum & Agile." },
    { title: "Experience", content: "Sales Promoter at Lado do Avesso & Real Estate Consultant at Remax." },
    { title: "Education", content: "BSc in Computer Engineering at University of Algarve. Fluent in Portuguese & English, with some Spanish knowledge." },
    { title: "Interests", content: "Surf, Gym, Coding & AI, Socializing, Entrepreneurship, Innovation." }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const goToSlide = index => setCurrent(index);

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'black',
          zIndex: 0
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

      {/* Quadro grande com slides */}
      <div style={{
        position: 'relative',
        width: '80vw',
        height: '80vh',
        margin: 'auto',
        top: '10vh',
        background: 'rgba(0,0,0,0.4)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 30px rgba(255,255,255,0.3)',
        color: '#fff',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '20px', maxWidth: '600px' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{slides[current].title}</h2>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.7' }}>{slides[current].content}</p>
          </motion.div>
        </AnimatePresence>

        {/* Seta para próximo */}
        <div
          onClick={nextSlide}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '30px',
            fontSize: '3rem',
            cursor: 'pointer',
            color: '#fff',
            textShadow: '0 0 10px #fff, 0 0 20px #fff',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.3)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          ➔
        </div>

        {/* Seta para anterior */}
        <div
          onClick={prevSlide}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '30px',
            fontSize: '3rem',
            cursor: 'pointer',
            color: '#fff',
            textShadow: '0 0 10px #fff, 0 0 20px #fff',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.3)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          ⇦
        </div>

        {/* Pontos para navegar */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          display: 'flex',
          gap: '12px'
        }}>
          {slides.map((_, i) => (
            <div key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: current === i ? '18px' : '12px',
                height: current === i ? '18px' : '12px',
                borderRadius: '50%',
                background: current === i ? '#ff00ff' : '#888',
                boxShadow: current === i ? '0 0 10px #ff00ff' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

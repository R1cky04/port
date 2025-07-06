import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GalaxyStars from '../components/GalaxyStars';
import NebulaParticles from '../components/NebulaParticles';
import Threads from '../components/Threads';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      title: "About me:",
      content: [
        "FullName: Ricardo Miguel Brás Aleluia",
        "Age: 21",
        "Nationality: Portuguese",
        "Location: Faro, Algarve, Portugal",
        "Currently studying Computer Engineering"
      ]
    },
    {
      title: "Skills",
      content: [
        "Algorithms & Data Structures",
        "Java (OOP)",
        "C (Imperative & Systems)",
        "Python",
        "JavaScript & React",
        "SQL & Databases",
        "Computer Networks (TCP/IP)",
        "Operating Systems & Processes",
        "Parallel & Distributed Systems",
        "Software Engineering",
        "Web Development (HTML/CSS/JS)",
        "Artificial Intelligence",
        "Human-Computer Interaction (HCI)",
        "Graphics & Compilers",
        "Communication & Teamwork",
        "Project Management",
        "Probability, Statistics & Numerical Analysis",
        "Math: Linear Algebra, Discrete & Analysis"
      ]
    }
  ];

  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth < 600;

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

      <div style={{
        position: 'relative',
        width: isMobile ? '85vw' : '550px',
        minHeight: isMobile ? '55vh' : '520px',
        margin: 'auto',
        top: isMobile ? '15vh' : '25vh',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 25px rgba(255,255,255,0.25)',
        color: '#fff',
        overflow: 'hidden',
        padding: '35px',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        
        {/* Threads topo */}
        <div style={{ width: '100%', height: '80px', position: 'relative' }}>
          <Threads amplitude={0.5} distance={0.3} enableMouseInteraction={false} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#fff',
              textAlign: 'left'
            }}>
              {slides[current].title}
            </div>

            <div style={{
              maxHeight: isMobile ? '300px' : '320px',
              overflowY: 'auto',
              paddingRight: '10px'
            }}>
              <ul style={{
                listStyleType: 'disc',
                textAlign: 'left',
                paddingLeft: '1.2rem',
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                lineHeight: '1.7'
              }}>
                {slides[current].content.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Threads fundo */}
        <div style={{ width: '100%', height: '80px', position: 'relative' }}>
          <Threads amplitude={0.5} distance={0.3} enableMouseInteraction={false} />
        </div>

        {/* Prev */}
        <div
          onClick={prevSlide}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontSize: '2.5rem',
            cursor: 'pointer',
            color: '#fff',
            textShadow: '0 0 8px #fff',
            transform: 'scaleX(-1)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.3) scaleX(-1)'}
          onMouseLeave={e => e.target.style.transform = 'scaleX(-1)'}
        >
          ➔
        </div>

        {/* Next */}
        <div
          onClick={nextSlide}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '2.5rem',
            cursor: 'pointer',
            color: '#fff',
            textShadow: '0 0 8px #fff',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.3)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          ➔
        </div>

        {/* Dots */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px'
        }}>
          {slides.map((_, i) => (
            <div key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: current === i ? '16px' : '12px',
                height: current === i ? '16px' : '12px',
                borderRadius: '50%',
                background: '#fff',
                boxShadow: current === i ? '0 0 6px #fff' : 'none',
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

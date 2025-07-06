import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GalaxyStars from '../components/GalaxyStars';
import NebulaParticles from '../components/NebulaParticles';

import emailIcon from '../assets/email.png';
import instaIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.png';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contacts = [
    { icon: emailIcon, text: "ricardo.m.aleluia@gmail.com", link: "mailto:ricardo.m.aleluia@gmail.com" },
    { icon: instaIcon, text: "@ricky_aleluia", link: "https://instagram.com/ricky_aleluia" },
    { icon: whatsappIcon, text: "+351 919091248", link: "https://wa.me/351919091248" }
  ];

  const isMobile = window.innerWidth < 600;

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
        width: isMobile ? '80vw' : '35vw',  // <--- alterado aqui
        minHeight: isMobile ? '35vh' : '40vh',
        margin: 'auto',
        top: isMobile ? '25vh' : '30vh',
        background: 'rgba(0,0,0,0.4)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 20px rgba(255,255,255,0.2)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: isMobile ? '20px' : '30px',
        gap: isMobile ? '20px' : '25px',
        zIndex: 1
      }}>
        {contacts.map((contact, i) => (
          <a key={i} href={contact.link} target="_blank" rel="noopener noreferrer" style={{
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            textShadow: '0 0 5px #fff',
            transition: 'all 0.3s'
          }}
            onMouseEnter={e => e.target.style.textShadow = '0 0 12px #fff'}
            onMouseLeave={e => e.target.style.textShadow = '0 0 5px #fff'}
          >
            <img src={contact.icon} alt={contact.text} style={{ width: isMobile ? '25px' : '35px', height: isMobile ? '25px' : '35px' }} />
            {contact.text}
          </a>
        ))}
      </div>
    </div>
  );
}

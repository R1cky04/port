import CircularGallery from '../components/CircularGallery'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    { image: 'https://picsum.photos/800/600?1', title: 'My Portfolio', description: 'A fullstack portfolio with React and Node.' },
    { image: 'https://picsum.photos/800/600?2', title: 'Crypto Tracker', description: 'App to track crypto prices with alerts.' },
    { image: 'https://picsum.photos/800/600?3', title: 'E-commerce Store', description: 'Secure software e-store with NestJS.' },
    { image: 'https://picsum.photos/800/600?4', title: '3D Galaxy', description: 'WebGL galaxy using Three.js and shaders.' },
    { image: 'https://picsum.photos/800/600?5', title: 'Casino Platform', description: 'Online casino with React & microservices.' }
  ]

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.galleryWrapper}>
        <CircularGallery
          items={projects}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          onProjectClick={setSelectedProject}
        />
      </div>

      {selectedProject && (
        <div style={styles.modalBackdrop} onClick={() => setSelectedProject(null)}>
          <div style={styles.modal}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    padding: '100px 20px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '40px',
    textShadow: '0 0 10px #fff',
  },
  galleryWrapper: {
    height: '600px',
    width: '100%',
    position: 'relative',
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#111',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 20px #fff',
    maxWidth: '400px',
    textAlign: 'center'
  }
}

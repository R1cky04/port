import { useState, useRef } from 'react'
import cover from '../assets/cover.png'

export default function SpotifyPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [open, setOpen] = useState(false)

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.volume = 0.2
      audioRef.current.play().catch(err => console.log("Play bloqueado"))
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* PLAYER */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: open ? '20px' : '-200px',
        width: '200px',
        background: '#121212',
        borderRadius: '12px',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: 'sans-serif',
        zIndex: 10,
        transition: 'left 0.4s'
      }}>
        <img
          src={cover}
          alt="cover"
          style={{ width: '100%', height: 'auto' }}
        />
        <div style={{ padding: '10px' }}>
          <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>TELEKINESIS</div>
          <div style={{ fontSize: '0.8rem', color: '#b3b3b3' }}>Travis Scott</div>
          <div style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button
              onClick={toggleAudio}
              style={{
                background: 'transparent',
                border: '2px solid #fff',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: '#fff',
                fontSize: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {playing ? '⏸' : '⏵'}
            </button>
          </div>
        </div>
      </div>

      {/* PUXADOR SEMPRE VISÍVEL */}
      <div 
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: open ? '230px' : '5px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: '#121212',
          border: '2px solid #fff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '1.2rem',
          boxShadow: '0 0 5px #fff',
          zIndex: 11,
          transition: 'left 0.4s'
        }}
      >
        {open ? '←' : '➔'}
      </div>
    </>
  )
}

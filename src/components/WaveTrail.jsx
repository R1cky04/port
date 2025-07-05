import { useEffect, useRef } from 'react'

export default function WaveTrail() {
  const canvasRef = useRef(null)
  const points = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    window.addEventListener('resize', () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    })

    const addPoint = (x, y) => {
      points.current.push({ x, y, alpha: 1 })
      if (points.current.length > 50) {
        points.current.shift()
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(204, 102, 255, ${p.alpha})`
        ctx.fill()
        p.alpha -= 0.02
      }

      requestAnimationFrame(draw)
    }

    draw()

    const handleMove = (e) => {
      addPoint(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  )
}

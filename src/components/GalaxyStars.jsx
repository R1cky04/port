import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'

export default function GalaxyStars() {
  const starsRef = useRef()

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.01
      starsRef.current.rotation.x += delta * 0.005
    }
  })

  return (
    <Stars
      ref={starsRef}
      radius={80}
      depth={80}
      count={8000}
      factor={5}
      saturation={2}  // vai puxar cores mais fortes
      fade
      speed={2}
    />
  )
}

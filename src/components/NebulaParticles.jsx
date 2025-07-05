import { Points, PointMaterial } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'

export default function NebulaParticles() {
  const particles = useMemo(() => {
    const positions = []
    for (let i = 0; i < 2000; i++) {
      positions.push((Math.random() - 0.5) * 200)
      positions.push((Math.random() - 0.5) * 200)
      positions.push((Math.random() - 0.5) * 200)
    }
    return new Float32Array(positions)
  }, [])

  return (
    <Points positions={particles} frustumCulled>
      <PointMaterial
        transparent
        size={0.2}
        sizeAttenuation
        depthWrite={false}
        color={'#cc66ff'}
        // usa um gradiente: lilás / rosa / azul
        vertexColors={false}
      />
    </Points>
  )
}

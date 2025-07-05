import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function MyModel(props) {
  const { scene } = useGLTF('/models/lambo.glb') // <- direto no public
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/lambo.glb')

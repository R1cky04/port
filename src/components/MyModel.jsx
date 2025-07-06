import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function MyModel(props) {
  const path = import.meta.env.BASE_URL + 'models/lambo.glb'
  const { scene } = useGLTF(path)
  return <primitive object={scene} {...props} />
}

useGLTF.preload(import.meta.env.BASE_URL + 'models/lambo.glb')

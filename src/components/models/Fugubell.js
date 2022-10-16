import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Fugubell(props) {
  const { nodes, materials } = useGLTF('/models/cap3/fugubell.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.1, 0.19, -0.03]} rotation={[0.23, 1.28, -0.24]} scale={0.34}>
        <mesh geometry={nodes.beanie001.geometry} material={materials.body} />
        <mesh geometry={nodes.beanie001_1.geometry} material={materials.underpeak} />
        <mesh geometry={nodes.beanie001_2.geometry} material={materials.patch} />
        <mesh geometry={nodes.beanie001_3.geometry} material={materials.button} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cap3/fugubell.gltf')

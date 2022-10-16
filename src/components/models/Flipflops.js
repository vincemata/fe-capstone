import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Flipflops(props) {
  const { nodes, materials } = useGLTF('/models/slipper1/Slipper.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.08, -0.29, -0.03]} rotation={[0, 1.47, 0]} scale={[-0.52, 0.52, 0.52]}>
        <mesh geometry={nodes.Slipper_1.geometry} material={materials.Footbed} />
        <mesh geometry={nodes.Slipper_2.geometry} material={materials.Outsole} />
        <mesh geometry={nodes.Slipper_3.geometry} material={materials.Midsole} />
        <mesh geometry={nodes.Slipper_4.geometry} material={materials.Strap} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/slipper1/Slipper.gltf')

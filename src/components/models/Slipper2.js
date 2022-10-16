/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Slipper2(props) {
  const { nodes, materials } = useGLTF('/models/slipper2/sandals.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.2, -0.24, 0]} rotation={[0, 1.49, 0]} scale={[-0.57, 0.57, 0.57]}>
        <mesh geometry={nodes.Sandals_1.geometry} material={materials.Footbed} />
        <mesh geometry={nodes.Sandals_2.geometry} material={materials.Outsole} />
        <mesh geometry={nodes.Sandals_3.geometry} material={materials.Midsole} />
        <mesh geometry={nodes.Sandals_4.geometry} material={materials.Strap} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/slipper2/sandals.gltf')
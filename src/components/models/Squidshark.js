import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Squidshark(props) {
  const { nodes, materials } = useGLTF('/models/shoe2/squidshark.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.27, -0.02, 0]} rotation={[-Math.PI, 1.53, -Math.PI]} scale={0.49}>
        <mesh geometry={nodes.Squidshark_1.geometry} material={materials.Tip} />
        <mesh geometry={nodes.Squidshark_2.geometry} material={materials.Insole} />
        <mesh geometry={nodes.Squidshark_3.geometry} material={materials.Midsole} />
        <mesh geometry={nodes.Squidshark_4.geometry} material={materials.Pulltab} />
        <mesh geometry={nodes.Squidshark_5.geometry} material={materials.Vamp} />
        <mesh geometry={nodes.Squidshark_6.geometry} material={materials.Insole} />
        <mesh geometry={nodes.Squidshark_7.geometry} material={materials.Outsole} />
        <mesh geometry={nodes.Squidshark_8.geometry} material={materials.Tongue} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/shoe2/squidshark.gltf')

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Truffle(props) {
  const { nodes, materials } = useGLTF('/models/shoe4/truffle.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.06, -0.01, 0]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={0.49}>
        <mesh geometry={nodes.Truffle_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Truffle_2.geometry} material={materials.Laces} />
        <mesh geometry={nodes.Truffle_3.geometry} material={materials.Outsole} />
        <mesh geometry={nodes.Truffle_4.geometry} material={materials.Toecap} />
        <mesh geometry={nodes.Truffle_5.geometry} material={materials.Vamp} />
        <mesh geometry={nodes.Truffle_6.geometry} material={materials.Midsole} />
        <mesh geometry={nodes.Truffle_7.geometry} material={materials.Patch} />
        <mesh geometry={nodes.Truffle_8.geometry} material={materials.Heelcap} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/shoe4/truffle.gltf')

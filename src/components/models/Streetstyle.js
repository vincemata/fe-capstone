import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Streetstyle(props) {
  const { nodes, materials } = useGLTF('/models/cap2/streetstyle.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.18, -0.98, 0]} rotation={[1.63, 1.37, -1.63]} scale={0.3}>
        <mesh geometry={nodes.Streestyle.geometry} material={materials.Panel} />
        <mesh geometry={nodes.Streestyle_1.geometry} material={materials.Visor} />
        <mesh geometry={nodes.Streestyle_2.geometry} material={materials.Backstrap} />
        <mesh geometry={nodes.Streestyle_3.geometry} material={materials.Closure} />
        <mesh geometry={nodes.Streestyle_4.geometry} material={materials.Button} />
        <mesh geometry={nodes.Streestyle_5.geometry} material={materials.Patch} />
        <mesh geometry={nodes.Streestyle_6.geometry} material={materials.Underpeak} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cap2/streetstyle.gltf')

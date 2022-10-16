import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Baseball(props) {
  const { nodes, materials } = useGLTF('/models/cap1//baseball.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.4, -0.93, 0]} rotation={[1.55, 1.12, -1.56]} scale={0.3}>
        <mesh geometry={nodes.Hed_CAP007__M_CAP007003.geometry} material={materials.Panel} />
        <mesh geometry={nodes.Hed_CAP007__M_CAP007003_1.geometry} material={materials.Visor} />
        <mesh geometry={nodes.Hed_CAP007__M_CAP007003_2.geometry} material={materials.Patch} />
        <mesh geometry={nodes.Hed_CAP007__M_CAP007003_3.geometry} material={materials.Backstrap} />
        <mesh geometry={nodes.Hed_CAP007__M_CAP007003_4.geometry} material={materials.Closure} />
        <mesh geometry={nodes.Hed_CAP007__M_CAP007003_5.geometry} material={materials.Eyelet} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cap1/baseball.gltf')

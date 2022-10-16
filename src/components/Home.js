import React, {Suspense} from 'react';
import './Home.css';
import { Canvas} from '@react-three/fiber'
import {OrbitControls,BakeShadows,Stage} from '@react-three/drei'
import MainShoe from '../components/models/Shoe1.js';
import Card from "./Card.js";


export default function Home() {
  return (
    <>
    <div id='container-home'>
        <div className='tagline'>
            <div className='details'>
                <p className='caption'>Customize your products with your own style</p>
                <h2 className='title'>3D preview & live quotations</h2>
                <p className='subtitle'>Boosting your sales has never been so easy</p>
            </div>
        </div>
        <div className='preview'>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 40 }}>
                    <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                    <MainShoe/>
                    </Stage>
                    <BakeShadows />
                    </Suspense>
                    <OrbitControls 
                        autoRotate 
                        autoRotateSpeed={15} 
                        enablePan={true}
                        enableZoom={false} 
                        enableRotate={true}
                    />           
            </Canvas>
        </div>
    </div>
    <div className='products-home'>
        <Card/>
    </div>
    </>
  )
}

import React, {Suspense} from 'react';
import './Card.css'
import { Canvas} from '@react-three/fiber'
import {OrbitControls,BakeShadows,Stage} from '@react-three/drei'
import Squidshark from '../components/models/Squidshark.js';
import Norimaki from '../components/models/Norimaki.js';
import Baseball from '../components/models/Baseball.js';
import Streestyle from '../components/models/Streetstyle.js';
import Slipper2 from './models/Slipper2.js';
import Sandal from './models/Sandal.js';


export default function Card() {
  return (
    <>
    <div id="container-card">
		<div className='container-products'>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 80], fov: 50  }}>
							<Suspense fallback={null}>
							<Stage environment="city" intensity={0.3}>
							<Squidshark/>
							</Stage>
							<BakeShadows/>
							</Suspense>
							<OrbitControls 
								minPolarAngle = {Math.PI/2.1} 
								maxPolarAngle = {Math.PI/2.1} 
								enablePan={true} enableZoom={false} 
								enableRotate={true} rotation
							/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>SQUIDSHARK</p>
					<p className=''>$100</p>
				</div>
			</div>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Baseball/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
							minPolarAngle = {Math.PI/2.1} 
							maxPolarAngle = {Math.PI/2.1} 
							enablePan={true} enableZoom={false} 
							enableRotate={true} rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>ZBCA23</p>
				</div>
			</div>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 60  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Sandal/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
						minPolarAngle = {Math.PI/2.1} 
						maxPolarAngle = {Math.PI/2.1} 
						enablePan={true} 
						enableZoom={false} enableRotate={true} rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>ZBCA23</p>
				</div>
			</div>
		</div>
		<div className='container-products'>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 80], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Norimaki/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
							minPolarAngle = {Math.PI/2.1}
							maxPolarAngle = {Math.PI/2.1} 
							enablePan={true} 
							enableZoom={false} 
							enableRotate={true} rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>NORIMAKI</p>
				</div>
			</div>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Streestyle/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
							minPolarAngle = {Math.PI/2.1} 
							maxPolarAngle = {Math.PI/2.1} 
							enablePan={true} 
							enableZoom={false} 
							enableRotate={true} rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>ZBCA23</p>
				</div>
			</div>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Slipper2/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
							minPolarAngle = {Math.PI/2.1} 
							maxPolarAngle = {Math.PI/2.1} 
							enablePan={true} 
							enableZoom={false} 
							enableRotate={true} rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>ZBCA23</p>
				</div>
			</div>
		</div>
    </div>
    </>
  )
}

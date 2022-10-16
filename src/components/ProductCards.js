import React, {Suspense} from 'react';
import './ProductCards.css'
import { Canvas} from '@react-three/fiber'
import {OrbitControls,BakeShadows,Stage} from '@react-three/drei'
import Squidshark from '../components/models/Squidshark.js';
import Norimaki from '../components/models/Norimaki.js';
import Truffle from '../components/models/Truffle.js';
import Baseball from '../components/models/Baseball.js';
import Streestyle from '../components/models/Streetstyle.js';
import Fugubell from '../components/models/Fugubell.js';
import Slipper2 from './models/Slipper2.js';
import Sandal from './models/Sandal.js';
import Flipflops from './models/Flipflops';


export default function ProductCards() {
  return (
    <>
    <div id="container-card">
		{/* Row 1 */}
		<div className='container-products'>
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 80], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Squidshark/>
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
					<p className='product-name'>SQUIDSHARK</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/squidshark'>CUSTOMIZE</a>         
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
							enablePan={true} 
							enableZoom={false} 
							enableRotate={true} rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>BASEBALL</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/baseball'>CUSTOMIZE</a>   
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
							enableZoom={false} 
							enableRotate={true} 
							rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>Delta</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/delta'>CUSTOMIZE</a>   
				</div>
			</div>
		</div>

		{/* Row 2 */}
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
							enableRotate={true} 
							rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>NORIMAKI</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/norimaki'>CUSTOMIZE</a>   
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
							enableRotate={true} 
							rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>STREETSTYLE</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/streetstyle'>CUSTOMIZE</a>   
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
							enableRotate={true} 
							rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>FISHFRY</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/fishfry'>CUSTOMIZE</a>   
				</div>
			</div>
		</div>

			{/* Row 3 */}
			<div className='container-products'> 
			 	<div className='card'>
					<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 80], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Truffle/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
							minPolarAngle = {Math.PI/2.1} 
							maxPolarAngle = {Math.PI/2.1} 
							enablePan={true} 
							enableZoom={false} 
							enableRotate={true} 
							rotation
						/>  
					</Canvas>
					</div>
				<div className='product-details'>
					<p className=''>TRUFFLE</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/truffle'>CUSTOMIZE</a>   
				</div>
			</div>

			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 50  }}>
							<Suspense fallback={null}>
							<Stage environment="city" intensity={0.3}>
							<Fugubell/>
							</Stage>
							<BakeShadows />
							</Suspense>
							<OrbitControls 
								minPolarAngle = {Math.PI/2.1}
								maxPolarAngle = {Math.PI/2.1} 
								enablePan={true} 
								enableZoom={false} 
								enableRotate={true} 
								rotation
							/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>FUGUBELL</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/fugubell'>CUSTOMIZE</a>   
				</div>
			</div>
			
			<div className='card'>
				<div className='product-model'>
					<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 50  }}>
						<Suspense fallback={null}>
						<Stage environment="city" intensity={0.3}>
						<Flipflops/>
						</Stage>
						<BakeShadows />
						</Suspense>
						<OrbitControls 
							minPolarAngle = {Math.PI/2.1} 
							maxPolarAngle = {Math.PI/2.1} 
							enablePan={true} 
							enableZoom={false} 
							enableRotate={true} 
							rotation
						/>  
					</Canvas>
				</div>
				<div className='product-details'>
					<p className=''>TSINELAS</p>
					<p className='product-price'>$100</p>
                    <a className='customize-btn' href='/products/tsinelas'>CUSTOMIZE</a>   
				</div>
			</div>
		</div>
    </div>
    </>
  )
}

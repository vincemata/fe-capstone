import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'

function Fishfry({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/slipper2/sandals.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0.2, -0.24, 0]} rotation={[0, 1.49, 0]} scale={[-0.57, 0.57, 0.57]}>
          <mesh geometry={nodes.Sandals_1.geometry} material={materials.Footbed} material-color={props.customColors.footbed} />
          <mesh geometry={nodes.Sandals_2.geometry} material={materials.Outsole} material-color={props.customColors.outsole} />
          <mesh geometry={nodes.Sandals_3.geometry} material={materials.Midsole} material-color={props.customColors.midsole} />
          <mesh geometry={nodes.Sandals_4.geometry} material={materials.Strap} material-color={props.customColors.strap} />
        </group>
      </group>
    )
}


function Slipper2() {
  const [footbed,setFootbed] = useState("#ffffff")
  const [outsole,setOutsole] = useState("#ffffff")
  const [midsole,setMidsole] = useState("#ffffff")
  const [strap,setStrap] = useState("#ffffff")

  return (
    <div className='configurator'>
        <div className="wrapper-configurator">
        <div className="configurator-canvas">
            <div className='canvas-view'>
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 80], fov:40  }}>
                      <Suspense fallback={null}>
                      <Stage environment="city" intensity={0.3}>
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Fishfry customColors={{footbed:footbed, strap:strap,midsole:midsole,outsole:outsole }}/>
                          <BakeShadows />
                          </Stage>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                   </div>
                </div>
            <div className="card-configurator">
                <h2>Customize Colors</h2>
                <p className='product-name'>Product Model:Squidshark</p>
                <p className='product-price'>Total Price:$100</p>
                <div className='colors-container'>
                    <div className='color-parts'>
                        <label for="tip">Footbed</label>
                        <input type="color" id="footbed" name="footbed"
                              value={footbed} 
                              onChange={(e) => setFootbed(e.target.value)}/>
                   
                      </div>
                    <div className='color-parts'>
                        <label for="strap">Strap</label>
                        <input type="color" id="strap" name="strap"
                                value= {strap}
                                onChange={(e) => setStrap(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="midsole">Midsole</label>
                        <input type="color" id="midsole" name="midsole"
                                value={midsole} 
                                onChange={(e) => setMidsole(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="outsole">Outsole</label>
                        <input type="color" id="outsole" name="outsole"
                                value={outsole} 
                                onChange={(e) => setOutsole(e.target.value)}/>
                    </div>
               
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Slipper2;



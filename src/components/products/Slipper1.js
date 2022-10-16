import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'

function Delta({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/slipper3/sandal.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-0.16, 0.05, 0]} rotation={[0, 1.56, 0]} scale={[-0.52, 0.52, 0.52]}>
          <mesh geometry={nodes.Sandals_1.geometry} material={materials.Footbed} material-color={props.customColors.footbed} />
          <mesh geometry={nodes.Sandals_2.geometry} material={materials.Strap} material-color={props.customColors.strap} />
          <mesh geometry={nodes.Sandals_3.geometry} material={materials.Backstrap} material-color={props.customColors.backstrap} />
          <mesh geometry={nodes.Sandals_4.geometry} material={materials.Midsole} material-color={props.customColors.midsole} />
          <mesh geometry={nodes.Sandals_5.geometry} material={materials.Outsole} material-color={props.customColors.outsole} />
          <mesh geometry={nodes.Sandals_6.geometry} material={materials.Patch} material-color={props.customColors.patch} />
          <mesh geometry={nodes.Sandals_7.geometry} material={materials.Holder} material-color={props.customColors.holder} />
        </group>
      </group>
    )
  
}


function Slipper1() {
 
  const [footbed,setFootbed] = useState("#ffffff")
  const [strap,setStrap] = useState("#ffffff")
  const [backstrap,setBackstrap] = useState("#ffffff")
  const [midsole,setMidsole] = useState("#ffffff")
  const [outsole,setOutsole] = useState("#ffffff")
  const [patch,setPatch] = useState("#ffffff")
  const [holder,setHolder] = useState("#ffffff")

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
                          <Delta customColors={{footbed:footbed, strap:strap , backstrap:backstrap,midsole:midsole,outsole:outsole,patch:patch,holder:holder }}/>
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
                        <label for="backstrap">Backstrap</label>
                        <input type="color" id="backstrap" name="backstrap"
                                value={backstrap} 
                                onChange={(e) => setBackstrap(e.target.value)}/>
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
                    <div className='color-parts'>
                        <label for="patch">Patch</label>
                        <input type="color" id="patch" name="patch"
                                value={patch} 
                                onChange={(e) => setPatch(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="holder">Holder</label>
                        <input type="color" id="holder" name="holder"
                                value={holder} 
                                onChange={(e) => setHolder(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Slipper1;



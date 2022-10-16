import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'




function Baseball({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/cap1//baseball.gltf')
return (
  <group  ref={group} {...props} dispose={null}>
    <group position={[-0.4, -0.93, 0]} rotation={[1.55, 1.12, -1.56]} scale={0.3}>
      <mesh geometry={nodes.Hed_CAP007__M_CAP007003.geometry} material={materials.Panel} material-color={props.customColors.panel}/>
      <mesh geometry={nodes.Hed_CAP007__M_CAP007003_1.geometry} material={materials.Visor} material-color={props.customColors.visor} />
      <mesh geometry={nodes.Hed_CAP007__M_CAP007003_2.geometry} material={materials.Patch} material-color={props.customColors.patch} />
      <mesh geometry={nodes.Hed_CAP007__M_CAP007003_3.geometry} material={materials.Backstrap} material-color={props.customColors.backstrap} />
      <mesh geometry={nodes.Hed_CAP007__M_CAP007003_4.geometry} material={materials.Closure} material-color={props.customColors.closure} />
      <mesh geometry={nodes.Hed_CAP007__M_CAP007003_5.geometry} material={materials.Eyelet} material-color={props.customColors.eyelet} />
    </group>
  </group>

  )
}

function Cap1() {
  const [panel,setPanel] = useState("#ffffff")
  const [visor,setVisor] = useState("#ffffff")
  const [patch,setPatch] = useState("#ffffff")
  const [backstrap,setBackstrap] = useState("#ffffff")
  const [closure,setClosure] = useState("#ffffff")
  const [eyelet,setEyelet] = useState("#ffffff")

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
                          <Baseball customColors={{panel:panel, visor:visor , patch:patch,backstrap:backstrap,closure:closure,eyelet:eyelet}}/>
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
                <p className='product-name'>Product Model:Baseball</p>
                <p className='product-price'>Total Price:$100</p>
                <div className='colors-container'>
                    <div className='color-parts'>
                        <label for="panel">Panel</label>
                        <input type="color" id="panel" name="panel"
                              value={panel} 
                              onChange={(e) => setPanel(e.target.value)}/>
                   
                      </div>
                    <div className='color-parts'>
                        <label for="visor">Visor</label>
                        <input type="color" id="visor" name="visor"
                                value= {visor}
                                onChange={(e) => setVisor(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="patch">Patch</label>
                        <input type="color" id="patch" name="patch"
                                value={patch} 
                                onChange={(e) => setPatch(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="backstrap">Backstrap</label>
                        <input type="color" id="backstrap" name="backstrap"
                                value={backstrap} 
                                onChange={(e) => setBackstrap(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="closure">Closure</label>
                        <input type="color" id="closure" name="closure"
                                value={closure} 
                                onChange={(e) => setClosure(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="eyelet">Eyelet</label>
                        <input type="color" id="eyelet" name="eyelet"
                                value={eyelet} 
                                onChange={(e) => setEyelet(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Cap1;



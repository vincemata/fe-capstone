import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'



function Fugubell({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/cap3/fugubell.gltf')
    return (
    <group ref={group} {...props} dispose={null}>
        <group position={[-0.1, 0.19, -0.03]} rotation={[0.23, 1.28, -0.24]} scale={0.34}>
        <mesh geometry={nodes.beanie001.geometry} material={materials.body}  material-color={props.customColors.body} />
        <mesh geometry={nodes.beanie001_1.geometry} material={materials.underpeak} material-color={props.customColors.underpeak} />
        <mesh geometry={nodes.beanie001_2.geometry} material={materials.patch} material-color={props.customColors.patch} />
        <mesh geometry={nodes.beanie001_3.geometry} material={materials.button} material-color={props.customColors.button} />
        </group>
    </group>
    )
}



function Cap3() {
  const [body,setBody] = useState("#ffffff")
  const [underpeak,setUnderpeak] = useState("#ffffff")
  const [patch,setPatch] = useState("#ffffff")
  const [button,setButton] = useState("#ffffff")


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
                          <Fugubell customColors={{body:body,  patch:patch,button:button,underpeak:underpeak}}/>
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
                        <label for="body">Body</label>
                        <input type="color" id="body" name="body"
                              value={body} 
                              onChange={(e) => setBody(e.target.value)}/>
                   
                      </div>
                    <div className='color-parts'>
                        <label for="patch">Patch</label>
                        <input type="color" id="patch" name="patch"
                                value= {patch}
                                onChange={(e) => setPatch(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="closure">Button</label>
                        <input type="color" id="button" name="button"
                                value={button} 
                                onChange={(e) => setButton(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="underpeak">Underpeak</label>
                        <input type="color" id="underpeak" name="underpeak"
                                value={underpeak} 
                                onChange={(e) => setUnderpeak(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Cap3;



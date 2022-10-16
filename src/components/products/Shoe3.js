import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'

function Truffle({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/shoe4/truffle.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-0.06, -0.01, 0]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={0.49}>
          <mesh geometry={nodes.Truffle_1.geometry} material={materials.Main} material-color={props.customColors.main} />
          <mesh geometry={nodes.Truffle_2.geometry} material={materials.Laces}  material-color={props.customColors.laces} />
          <mesh geometry={nodes.Truffle_3.geometry} material={materials.Outsole}  material-color={props.customColors.outsole} />
          <mesh geometry={nodes.Truffle_4.geometry} material={materials.Toecap}  material-color={props.customColors.toecap} />
          <mesh geometry={nodes.Truffle_5.geometry} material={materials.Vamp}  material-color={props.customColors.vamp} />
          <mesh geometry={nodes.Truffle_6.geometry} material={materials.Midsole}  material-color={props.customColors.midsole} />
          <mesh geometry={nodes.Truffle_7.geometry} material={materials.Patch}  material-color={props.customColors.patch} />
          <mesh geometry={nodes.Truffle_8.geometry} material={materials.Heelcap}  material-color={props.customColors.heelcap} />
        </group>
      </group>
    )
}



function Shoe3() {
  const [main,setMain] = useState("#ffffff")
  const [laces,setLaces] = useState("#ffffff")
  const [outsole,setOutsole] = useState("#ffffff")
  const [toecap,setToecap] = useState("#ffffff")
  const [vamp,setVamp] = useState("#ffffff")
  const [midsole,setMidsole] = useState("#ffffff")
  const [patch,setPatch] = useState("#ffffff")
  const [heelcap,setHeelcap] = useState("#ffffff")


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
                          <Truffle customColors={{main:main,  midsole:midsole,laces:laces,vamp:vamp,outsole:outsole,patch:patch,toecap:toecap,heelcap:heelcap}}/>
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
                        <label for="main">Main</label>
                        <input type="color" id="main" name="main"
                              value={main} 
                              onChange={(e) => setMain(e.target.value)}/>
                   
                      </div>
                    <div className='color-parts'>
                        <label for="patch">Patch</label>
                        <input type="color" id="patch" name="patch"
                                value= {patch}
                                onChange={(e) => setPatch(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="midsole">Midsole</label>
                        <input type="color" id="midsole" name="midsole"
                                value={midsole} 
                                onChange={(e) => setMidsole(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="laces">Laces</label>
                        <input type="color" id="laces" name="laces"
                                value={laces} 
                                onChange={(e) => setLaces(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="vamp">Vamp</label>
                        <input type="color" id="vamp" name="vamp"
                                value={vamp} 
                                onChange={(e) => setVamp(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="outsole">Outsole</label>
                        <input type="color" id="outsole" name="outsole"
                                value={outsole} 
                                onChange={(e) => setOutsole(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="heelcap">Heelcap</label>
                        <input type="color" id="heelcap" name="heelcap"
                                value={heelcap} 
                                onChange={(e) => setHeelcap(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="toecap">Toecap</label>
                        <input type="color" id="toecap" name="toecap"
                                value={toecap} 
                                onChange={(e) => setToecap(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Shoe3;



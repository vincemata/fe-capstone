import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'

function Squidshark({...props}) {
    const group = useRef()
  const { nodes, materials } = useGLTF('/models/shoe2/squidshark.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.27, -0.02, 0]} rotation={[-Math.PI, 1.53, -Math.PI]} scale={0.49}>
        <mesh geometry={nodes.Squidshark_1.geometry} material={materials.Tip}  material-color={props.customColors.tip}/>
        <mesh geometry={nodes.Squidshark_2.geometry} material={materials.Insole} material-color={props.customColors.insole} />
        <mesh geometry={nodes.Squidshark_3.geometry} material={materials.Midsole} material-color={props.customColors.midsole} />
        <mesh geometry={nodes.Squidshark_4.geometry} material={materials.Pulltab} material-color={props.customColors.pulltab} />
        <mesh geometry={nodes.Squidshark_5.geometry} material={materials.Vamp} material-color={props.customColors.vamp} />
        <mesh geometry={nodes.Squidshark_6.geometry} material={materials.Insole} material-color={props.customColors.strap} />
        <mesh geometry={nodes.Squidshark_7.geometry} material={materials.Outsole} material-color={props.customColors.outsole} />
        <mesh geometry={nodes.Squidshark_8.geometry} material={materials.Tongue} material-color={props.customColors.tongue} />
      </group>
    </group>
  )
}

function Shoe1() {
 
  const [tip,setTip] = useState("#ffffff")
  const [insole,setInsole] = useState("#ffffff")
  const [midsole,setMidsole] = useState("#ffffff")
  const [pulltab,setPulltab] = useState("#ffffff")
  const [vamp,setVamp] = useState("#ffffff")
  const [outsole,setOutsole] = useState("#ffffff")
  const [tongue,setTongue] = useState("#ffffff")

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
                          <Squidshark customColors={{tip:tip, insole:insole , midsole:midsole,pulltab:pulltab,vamp:vamp,outsole:outsole,tongue:tongue }}/>
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
                        <label for="tip">Tip</label>
                        <input type="color" id="tip" name="tip"
                              value={tip} 
                              onChange={(e) => setTip(e.target.value)}/>
                   
                      </div>
                    <div className='color-parts'>
                        <label for="insole">Strap</label>
                        <input type="color" id="insole" name="insole"
                                value= {insole}
                                onChange={(e) => setInsole(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="midsole">Midsole</label>
                        <input type="color" id="midsole" name="midsole"
                                value={midsole} 
                                onChange={(e) => setMidsole(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="pulltab">Pulltab</label>
                        <input type="color" id="pulltab" name="pulltab"
                                value={pulltab} 
                                onChange={(e) => setPulltab(e.target.value)}/>
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
                        <label for="tongue">Tongue</label>
                        <input type="color" id="tongue" name="tongue"
                                value={tongue} 
                                onChange={(e) => setTongue(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Shoe1;



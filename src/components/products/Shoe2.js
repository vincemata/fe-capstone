import './ProductView.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,BakeShadows,Stage} from '@react-three/drei'

function Norimaki({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/shoe3/norimaki.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-0.26, 0.01, -0.05]} rotation={[0, 1.56, 0]} scale={0.49}>
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020.geometry} material={materials.Mainc}  material-color={props.customColors.main} />
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_1.geometry} material={materials.Patch}  material-color={props.customColors.patch} />
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_2.geometry} material={materials.Foxing}  material-color={props.customColors.foxing} />
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_3.geometry} material={materials.Pulltab}   material-color={props.customColors.pulltab}/>
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_4.geometry} material={materials.Slip}  material-color={props.customColors.slip} />
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_5.geometry} material={materials.Midsole}  material-color={props.customColors.midsole} />
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_6.geometry} material={materials.Outsole}  material-color={props.customColors.outsole} />
          <mesh geometry={nodes.Shs_SHI014__M_SHI014020_7.geometry} material={materials.Insole}  material-color={props.customColors.insole} />
        </group>
      </group>
  )
}


function Shoe2() {
  const [main,setMain] = useState("#ffffff")
  const [patch,setPatch] = useState("#ffffff")
  const [foxing,setFoxing] = useState("#ffffff")
  const [pulltab,setPulltab] = useState("#ffffff")
  const [slip,setSlip] = useState("#ffffff")
  const [midsole,setMidsole] = useState("#ffffff")
  const [outsole,setOutsole] = useState("#ffffff")
  const [insole,setInsole] = useState("#ffffff")

  return (
    <div className='configurator'>
        <div className="wrapper-configurator">
        <div className="configurator-canvas">
            <div className='canvas-view'>
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 80], fov:50  }}>
                      <Suspense fallback={null}>
                      <Stage environment="city" intensity={0.3}>
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Norimaki customColors={{main:main, patch:patch , foxing:foxing,pulltab:pulltab,slip:slip,midsole:midsole,outsole:outsole,insole:insole }}/>
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
                        <label for="foxing">Foxing</label>
                        <input type="color" id="foxing" name="foxing"
                                value={foxing} 
                                onChange={(e) => setFoxing(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="pulltab">Pulltab</label>
                        <input type="color" id="pulltab" name="pulltab"
                                value={pulltab} 
                                onChange={(e) => setPulltab(e.target.value)}/>
                    </div>
                    <div className='color-parts'>
                        <label for="slip">Slip</label>
                        <input type="color" id="slip" name="slip"
                                value={slip} 
                                onChange={(e) => setSlip(e.target.value)}/>
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
                        <label for="insole">Insole</label>
                        <input type="color" id="insole" name="insole"
                                value={insole} 
                                onChange={(e) => setInsole(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className='add-to-cart-btn'>Add to Cart</button>
            
                
            </div>
        </div>
    </div>
  );
}

export default Shoe2;



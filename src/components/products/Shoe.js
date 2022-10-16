import './index.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.setStripes}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.soul}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}material-color={props.customColors.soul} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.soul}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.soul}/>
    </group>
  )
}


function Shoe() {
 
  const [mesh,setMesh] = useState("#ffffff")
  const [stripes,setStripes] = useState("#ffffff")
  const [soul,setSoul] = useState("#ffffff")

  return (
    <div className='configurator'>
        <div className="wrapper-configurator">
        <div className="configurator-canvas">
                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Model customColors={{mesh:mesh, stripes:stripes , soul:soul }}/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                </div>
            <div className="card-configurator">
                <h2>Customize Colors</h2>
                <div className='colors'>
                    <div className='color-parts'>
                        <label for="mesh">Main</label>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                   
                      </div>

                    <div className='color-parts'>
                        <label for="stripes">Stripes</label>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                
                    </div>
                    <div className='color-parts'>
                        <label for="soul">Soul</label>
                        <input type="color" id="soul" name="soul"
                                value={soul} 
                                onChange={(e) => setSoul(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Shoe;

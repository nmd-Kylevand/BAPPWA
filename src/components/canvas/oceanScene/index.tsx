import * as THREE from 'three'
import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { FBXLoader, Water } from 'three-stdlib'
import dynamic from 'next/dynamic'

extend({ Water })
const Ship = dynamic(() => import('@/components/canvas/ship').then((mod) => mod.Ship), { ssr: false })

function Ocean() {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, '/img/waternormals.jpeg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
        () => ({
            textureWidth: 512,
            textureHeight: 512,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: false,
            format: gl.encoding
        }),
        [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

// function Ship() {
//     const ref = useRef()
//     const ship = useLoader(FBXLoader, '/ship.fbx')

//     useFrame((state, delta) => {
//         ref.current.position.y = -23
//     })
//     return (
//         <mesh ref={ref} scale={1}>
//             <primitive object={ship}/>
//         </mesh>
//     )
// }

const CameraAnimation = () => {
    const [started, setStarted] = useState(false)
    const vec = new THREE.Vector3()

    useEffect(() => {
        setStarted(true)
    },[])

    useFrame(state => {
        if (started) {
            state.camera.lookAt(15, 7, 2)
            state.camera.position.lerp(vec.set(-8, 8, -14), .016)
        }
        setStarted(false)
 
        return null
    })

    return null
}

export function Model() {
    return (
        <>
            <ambientLight />
            <CameraAnimation/>
            {/* <pointLight position={[100, 100, 100]} />
            <pointLight position={[-100, -100, -100]} /> */}
            <Suspense fallback={null}>
                
                <Ocean />
                <Ship scale={100} distances={[0, 500]} position={[0, -21, 0]} />
            </Suspense>
            <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
            <OrbitControls enableZoom={false} />
        </>    
        
    )
}

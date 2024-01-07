// @ts-nocheck
import { OrbitControls, OrthographicCamera, PerspectiveCamera, useAnimations, useFBX } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader, GLTFLoader, TGALoader } from "three-stdlib";
import * as THREE from 'three'
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
THREE.Cache.enabled = true

const Ship = dynamic(() => import('@/components/canvas/ship').then((mod) => mod.Ship), { ssr: false })


export function Chatham({playAnimation}) {


    THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())
    const fbx = useLoader(FBXLoader, '/chatham.fbx', ((mesh) => {
        mesh.side = 2
    }))
    console.log(fbx.children)
    fbx.children.map((mesh) => {
        
        console.log(mesh)
    })
    const animationRef = useRef()

    
    return (
        <group  dispose={null}>
            <ambientLight/>
            <PerspectiveCamera makeDefault fov={90} position={[0, 0, 0]} zoom={0} />
            <OrbitControls  enableZoom={true} autoRotateSpeed={1.0} minPolarAngle={0} maxPolarAngle={1.5}/>
            <mesh ref={animationRef}><Ship scale={0.5} distances={[0, 20]} position={[-0.868, -0.1, 2.269]} /></mesh>

            <primitive  camera={{ position: [10, 10, 10] }} object={fbx}/>
        </group>
        
    )
    
}

export function Gibraltar({playAnimation}){

    const fbx = useLoader(FBXLoader, '/gibraltar2.fbx')
    const animationRef = useRef()
    console.log(fbx)

    return (
        <group dispose={null}>
            <ambientLight />
            <OrbitControls autoRotate={true} enableZoom={true} autoRotateSpeed={1.0} minPolarAngle={0} maxPolarAngle={1.5} />
            {/* <mesh ref={animationRef}><Ship scale={0.005} distances={[0, 20]} position={[-0.868, -0.1, 2.269]} /></mesh> */}

            <primitive camera={{ position: [0, 0, 0] }} scale={0.05} object={fbx} />
        </group>

    
    )
    
}

export function Toulon({playAnimation}){

    const fbx = useLoader(FBXLoader, '/toulon.fbx')
    const animationRef = useRef()


    return (
        <group dispose={null}>
            <ambientLight />
            <PerspectiveCamera makeDefault fov={90} position={[0, 0, 0]} zoom={0} />
            <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={1.0} minPolarAngle={0} maxPolarAngle={1.5} />
            <mesh ref={animationRef}><Ship distances={[0, 20]} position={[-0.868, -0.1, 2.269]} /></mesh>

            <primitive camera={{ position: [10, 10, 10] }} object={fbx} />
        </group>

    )
}

export function CapeStVincent({playAnimation}){

    const fbx = useLoader(FBXLoader, '/CapeStVincent2.fbx')
    const animationRef = useRef()


    return (
        <group dispose={null}>
            <ambientLight />
            <PerspectiveCamera makeDefault fov={180} position={[0, 0, 0]} zoom={0} />
            <OrbitControls autoRotate={true} enableZoom={true} autoRotateSpeed={1.0} minPolarAngle={0} maxPolarAngle={1.5} />
            <mesh ref={animationRef}><Ship distances={[0, 20]} position={[-0.868, -0.1, 2.269]} /></mesh>

            <primitive camera={{ position: [10, 10, 10] }} object={fbx} />
        </group>

    )
}

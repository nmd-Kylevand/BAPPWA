// @ts-nocheck
import { OrbitControls, OrthographicCamera, PerspectiveCamera, useAnimations, useFBX } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader, GLTFLoader, TGALoader } from "three-stdlib";
import * as THREE from 'three'
import { useEffect, useRef } from "react";
THREE.Cache.enabled = true


export function Chatham({playAnimation}) {


    // THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())
    const fbx = useLoader(GLTFLoader, '/chatham.glb')
    
    // const {animations} = fbx;
    
    // const {clips} = useAnimations(animations)
    // let mixer = new THREE.AnimationMixer(fbx)
    // const action = mixer.clipAction(clips[0])

    // useFrame((state, delta) => mixer.update(delta))

    // useEffect(() => {
    //     if(playAnimation === true){
    //         action.play()

    //     }
    // },[playAnimation,action])

    return (
        <group  dispose={null}>
            <ambientLight/>
            <PerspectiveCamera makeDefault fov={90} position={[0, 0, 0]} zoom={0} />
            <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={1.0} minPolarAngle={0} maxPolarAngle={1.5}/>
            <primitive  camera={{ position: [10, 10, 10] }} object={fbx}/>
        </group>
        
    )
    
}

export function Gibraltar({playAnimation}){

    const group = useRef<THREE.Group>()

    THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())
    const fbx = useLoader(FBXLoader, '/gibraltar.fbx')
    const {animations} = fbx;
    
    const {clips} = useAnimations(animations)
    let mixer = new THREE.AnimationMixer(fbx)
    const action = mixer.clipAction(clips[0])

    useFrame((state, delta) => mixer.update(delta))

    useEffect(() => {
        if(playAnimation === true){
            action.play()

        }
    },[playAnimation,action])
    return (
        <group ref={group} dispose={null}>
            <ambientLight/>
            <OrthographicCamera makeDefault  zoom={0.3}
        top={500}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={7000}
        position={[40, 150, -590]} />
            <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={1.5}/>
            <primitive  camera={{ position: [100, 100, 100] }} object={fbx}/>
        </group>
    )
    
}

export function Toulon({playAnimation}){

    const group = useRef<THREE.Group>()

    THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())
    const fbx = useLoader(FBXLoader, '/toulon.fbx')
    const {animations} = fbx;
    
    const {clips} = useAnimations(animations)
    let mixer = new THREE.AnimationMixer(fbx)
    const action = mixer.clipAction(clips[0])

    useFrame((state, delta) => mixer.update(delta))

    useEffect(() => {
        if(playAnimation === true){
            action.play()

        }
    },[playAnimation,action])

    return (
        <group ref={group} dispose={null}>
            <ambientLight/>
            <OrthographicCamera makeDefault  zoom={1}
        top={500}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={1000}
        position={[40, 150, -590]} />
            <OrbitControls autoRotate={true} autoRotateSpeed={1.0} enableZoom={false} minPolarAngle={0} maxPolarAngle={1.5}/>
            <primitive  camera={{ position: [100, 100, 100] }} object={fbx}/>
        </group>
    )
}

export function CapeStVincent({playAnimation}){

    const group = useRef<THREE.Group>()

    THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())
    const fbx = useLoader(FBXLoader, '/CapeStVincent.fbx')
    const {animations} = fbx;
    
    const {clips} = useAnimations(animations)
    let mixer = new THREE.AnimationMixer(fbx)
    const action = mixer.clipAction(clips[0])

    useFrame((state, delta) => mixer.update(delta))

    useEffect(() => {
        if(playAnimation === true){
            action.play()

        }
    },[playAnimation,action])

    return (
        <group ref={group} dispose={null}>
            <ambientLight/>
            <OrthographicCamera makeDefault  zoom={1}
        top={500}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={1000}
        position={[-40, 150, 590]} />
            <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={1.5}/>
            <primitive  camera={{ position: [100, 100, 100] }} object={fbx}/>
        </group>
    )
}

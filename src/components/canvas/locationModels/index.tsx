import { Three } from "@/helpers/components/Three";
import { useFBX } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { FBXLoader, OBJLoader, TGALoader } from "three-stdlib";
import * as THREE from 'three'


export function Chatham() {
    THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())

    // const scene = new THREE.Scene()
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );


    // loader.load('chatham2.fbx',(fbx) => {
    //     console.log(fbx)
    //     scene.add(fbx)

    // })
    // function animate() {
    
    //     renderer.render( scene, camera );
    // }

    // animate()

    
    const fbx = useLoader(FBXLoader, '/Chatham_fixed.fbx')    
    return <primitive camera={{ position: [10, 10, 10] }} object={fbx}/>
    
}
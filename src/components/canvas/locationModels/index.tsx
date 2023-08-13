import { Three } from "@/helpers/components/Three";
import { useFBX } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { FBXLoader, OBJLoader, TGALoader } from "three-stdlib";
import * as THREE from 'three'


export function Chatham() {
    THREE.DefaultLoadingManager.addHandler(/\.tga$/i, new TGALoader())
    const fbx = useLoader(FBXLoader, '/Chatham_fixed.fbx')    
    return <primitive camera={{ position: [10, 10, 10] }} object={fbx}/>
    
}
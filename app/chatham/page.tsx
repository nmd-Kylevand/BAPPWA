"use client"

// import Loader from "@/components/loader/Loader";
import { Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { styled } from "styled-components";
import './chatham.css';
import Loader from "@/components/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@/components/detailOverlay/Overlay";
import hugeText from './text'



const Model = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Chatham), {
    ssr: false, 
        loading: () => <Loader text='May 1765, England'/>,
        
    })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

export default function Page() {

    const [show, setShow] = useState(false)

    return (
            <>
                <View className="background-image flex h-full w-full flex-col items-center justify-center">
                    
                    <ambientLight/>
                        <Model/>
                        <PerspectiveCamera makeDefault fov={90} position={[750, 200, 700]} />
                        <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={1.0} minPolarAngle={0} maxPolarAngle={1.5}/>
                        <Html as="div">
                            
                             <div className={"w-96 absolute right-96 " + (show ? '-top-8' : 'top-80' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">Chatham England</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /></h1>
                                
                                <h3 className="fontBold mt-5 w-96 text-xl">7 May 1765</h3>
                                { show ? <Overlay text={hugeText}/> : null}

                            </div>

                        </Html>
                </View>

            </>
            

    )
}
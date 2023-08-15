"use client"

// import Loader from "@/components/loader/Loader";
import { Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@/components/detailOverlay/Overlay";
import hugeText from './text'
import SliderButton from "@/components/slider/Slider";
import { useSpeechSynthesis } from "react-speech-kit";

let isLoading;

const Model = dynamic(() => import('@/components/canvas/ocean/index').then((mod) => mod.Model), {
    ssr: false, 
        loading: () => {
        
        return <Loader text='May 1765, England'/> 
    },
        
    })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

const TextComponent = () => {
    return(
        <>
               <p>The Battle of Ushan, also known as the First Battle of Ushant, occurred during the American Revolutionary War between French and British fleets. On July 9th, HMS Victory under Admiral Keppel sailed with a fleet of 30 ships, spotting the French fleet on July 23rd.</p>
               <br/>
               <p> The battle saw tactical shifts and damage to both sides, but French escaped under night cover. The Trial of Viscount Keppel followed in 1778, arising from the battle's aftermath, involving accusations between Keppel and Admiral Palliser. Both were acquitted, but the trial strained the British Navy and stirred public and political controversies.</p>
        </>
    )
}
export default function Page() {
    const [show, setShow] = useState(false)
    const [play, setPlay] = useState(false)
    const [isCompleted, setCompleted] = useState(false)

    // Callback to check if the child component, SliderButton, is fully actived. A boolean is then passed to the 3dmodel to start the animation.
    const onComplete = (isCompleted) => {
        setCompleted(isCompleted)
    }

    const {speak, cancel} = useSpeechSynthesis()

    useEffect(() => {
        play ? speak({text:hugeText, rate: 0.9}) : cancel()
    }, [play])
    
    return (
            <>
                <View className="background-image relative h-full w-full items-center justify-center">
                        <Model playAnimation={isCompleted}/>
                        <Html as="div">
                             <div className={"w-96 absolute right-96 " + (show ? '-top-44' : 'top-72' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">160 km west of Ushant </span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">27 July 1778</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">First battle of Ushant</h3>
                                { show ? <Overlay text={<TextComponent/>}/> : null}

                            </div>

                        </Html>
                </View>
                <div className="absolute right-96 top-72 h-60">   
                    <SliderButton sliderEnd={onComplete} direction="vertical"/>

                </div>


            </>
            

    )
}
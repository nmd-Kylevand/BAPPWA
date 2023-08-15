"use client"

import { Html } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@/components/detailOverlay/Overlay";
import hugeText from './text'
import SliderButton from "@/components/slider/Slider";
import { useSpeechSynthesis } from "react-speech-kit";

const Model = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Chatham), {
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
                <p>The HMS Victory was ordered by the British Admiralty to be built as a 100-gun first-rate ship of the line. The ship, designed by naval architect Sir Thomas Slade, 
                began construction at the Chatham Dockyard.</p>
                <br/>
                <p> Around 6000 trees were used for the construction of the hull which is equivalent to 60 acres of forest. Amounting to a total of £63,176 (over £50 million today).
                It was an unpopular decision among sailors to name the ship Victory as the previous ship which had that name sunk with all on board in the English channel, 25 years before the Victory.
                On 7 May 1765 the Victory was finally launched, but it wasn’t until 13 years later that it would see its first active service in the War of American Independence (1775-83). Due to its excellent design of the underwater hull, the Victory would prove itself successful in sailing faster than many of its smaller consorts.
            </p>
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
                {/* @ts-ignore */}
                <View className="background-image relative h-full w-full items-center justify-center">
                        <Model playAnimation={isCompleted}/>
                        <Html as="div" zIndexRange={[0, 0]}>
                             <div className={"w-96 absolute right-96 " + (show ? '-top-44' : 'top-72' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">Chatham England</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">7 May 1765</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">Launch of the HMS Victory</h3>
                                { show ? <Overlay text={<TextComponent/>}/> : null}

                            </div>

                        </Html>
                </View>
                <div className="absolute right-96 top-72 z-0  h-60">   
                    <SliderButton sliderEnd={onComplete} direction="vertical"/>

                </div>


            </>
            

    )
}
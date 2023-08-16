"use client"

import { Html} from "@react-three/drei";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@/components/detailOverlay/Overlay";
import hugeText from './text'
import { useSpeechSynthesis } from "react-speech-kit";
import Link from "next/link";

const Slider = dynamic(() => import('@/components/slider/Slider'), {ssr: false})

const Model = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Gibraltar), {
    ssr: false, 
        loading: () => {
        
        return <Loader text='June 1779, Spain'/> 
    },
        
    })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

const TextComponent = () => {
    return(
        <>
                <p>The Siege of Gibraltar took place during the American Revolutionary War and lasted from 1779 to 1783. It involved a prolonged blockade and military campaign by the Spanish and French forces against the British-held fortress of Gibraltar. The objective was to capture Gibraltar and gain control of the strategic Mediterranean passage.</p>
                <br/>
                <p> By the year 1782, the HMS Victory had already amassed a significant number of distinguished naval battle accolades. It assumed the role of Lord Howe&apos;s flagship of a powerful escort flotilla for a convoy of transports and actively participated in the Relief of Gibraltar on October 11th of the same year. The significance of this relief operation cannot be emphasized enough. The supplies that the ships brought allowed the Gibraltar garrison to continue to hold out against the besieging forces. Moreover, this decisive action ensured the continuous presence of the British at the gateway to the Mediterranean.</p>
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
                            <div className="absolute -top-80 w-96 lg:right-44 2xl:right-96">
                                <Link className="fontBold uppercase text-white" href="/overview">Back</Link>

                                </div>
                             <div className={"w-96 lg:right-44 absolute 2xl:right-96 " + (show ? '-top-48' : 'lg:top-64 2xl:top-74' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">Gibraltar</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">24 June 1779</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">Siege of Gibraltar</h3>
                                { show ? <Overlay text={<TextComponent/>}/> : null}

                            </div>

                        </Html>
                </View>
                <div className="absolute right-96 top-72 z-0 h-60  lg:right-24 2xl:right-96">   
                    <Slider sliderEnd={onComplete} direction="vertical"/>

                </div>


            </>
            

    )
}
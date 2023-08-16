"use client"

// import Loader from "@/components/loader/Loader";
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

const Model = dynamic(() => import('@/components/canvas/ocean/index').then((mod) => mod.Model), {
    ssr: false, 
        loading: () => {
        
        return <Loader text='July 1778, France'/> 
    },
        
    })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

const TextComponent = () => {
    return(
        <>
               <p>December 12th  1781, a French convoy sailing from Brest to the East and West indie with reinforcements and stores, encounters a British squadron commanded by Rear Admiral Richard Kempenfelt in the HMS Victory with orders to intercept the French convoy.</p>
               <br/>
               <p>At first, Guichen&apos;s fleet positioned themselves in a downwind position relative to the convoy. This strategic placement enabled the British ships to swiftly descend upon and seize 15 ships transporting troops and resources, all before the French ships could intervene.
                </p>
                <br/>
               <p> Although Kempenfelt&apos;s fleet lacked the strength to engage the 19 French escorts directly, the French convoy, knowingly taking the chance of sailing during the stormy season in the North Atlantic to evade British forces, found themselves scattered amidst a powerful gale shortly after. Consequently, the majority of the ships were compelled to retreat back to port.   </p>
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
                        {/* @ts-ignore */}
                        <Model playAnimation={isCompleted}/>
                        <Html as="div" zIndexRange={[0, 0]}>
                            <div className="absolute -top-80 right-96 w-96  lg:right-44 2xl:right-96">
                                <Link className="fontBold uppercase text-white" href="/overview">Back</Link>

                                </div>
                             <div className={"w-96 absolute lg:right-44 2xl:right-96  " + (show ? '-top-44' : 'lg:top-64 2xl:top-74' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">160 km west of Ushant </span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">17 December 1781</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">Second battle of Ushant</h3>
                                { show ? <Overlay text={<TextComponent/>}/> : null}

                            </div>

                        </Html>
                </View>
                <div className="absolute right-96 top-72 z-0 h-60 lg:right-24 2xl:right-96">   
                    <Slider sliderEnd={onComplete} direction="vertical"/>

                </div>


            </>
            

    )
}
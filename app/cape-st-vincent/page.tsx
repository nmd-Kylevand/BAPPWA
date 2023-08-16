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

const Model = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.CapeStVincent), {
    ssr: false, 
        loading: () => {
        
        return <Loader text='February 1797, Portugal'/> 
    },
        
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

const TextComponent = () => {
    return(
        <>
            <p>The Battle of Cape St. Vincent on February 14, 1797, was a key naval engagement in the French Revolutionary Wars near Cape St. Vincent. Admiral John Jervis led the British Royal Navy with HMS Victory, facing Admiral José de Córdoba&apos;s Spanish fleet. The Spanish fleet (24 ships) aimed to protect a convoy to Cádiz, but Admiral Jervis (15 British ships) intercepted them. </p>
            <br/>
            <p>At 11 AM, Jervis signals &apos;Form a battle line near Victory.&apos; The British line sails south between Spanish columns. At 11:12 AM, Jervis orders &apos;Engage the enemy.&apos; At 11:30 AM, Jervis signals intent to pass through enemy lines, exploiting their split formation. At 12:08 PM, the British fleet tacks to attack the Spanish leeward side.</p>
            <br/>
            <p>HMS Victory&apos;s 104 guns were heavily used, notably against the 112-gun Principe de Asturias. The latter suffered damage due to the admiral&apos;s hesitation, receiving broadsides from Victory. The battle resulted in British losses of 73 dead, 327 wounded. Spanish losses: 4 ships, 250 dead, 550 wounded, 3000 captured.</p>
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
                        <div className="absolute -top-80 lg:right-44 2xl:right-96">
                            <Link className="fontBold uppercase text-white" href="/overview">Back</Link>

                            </div>
                             <div className={"w-96 absolute lg:right-44 2xl:right-96 " + (show ? '-top-48' : 'lg:top-64 2xl:top-74' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">Cape St. Vincent</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">14 February 1797</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">Battle of Cape St. Vincent</h3>
                                { show ? <Overlay text={<TextComponent/>}/> : null}

                            </div>

                        </Html>
                </View>
                <div className="absolute top-72 z-0 h-60 lg:right-24 2xl:right-96">
                      
                    <Slider sliderEnd={onComplete} direction="vertical"/>

                </div>


            </>
            

    )
}
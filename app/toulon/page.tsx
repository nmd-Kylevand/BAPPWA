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

const Model = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Toulon), {
    ssr: false, 
        loading: () => {
        
        return <Loader text='August 1793, France'/> 
    },
        
    })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

const TextComponent = () => {
    return(
        <>
                <p>Toulon, a port city on the Mediterranean coast, was a significant naval stronghold, housing the entire French Mediterranean Fleet. Outraged by the Jacobins&apos; perceived tyranny, the moderate republicans rebelled but were later supplanted by royalists as leaders of the uprising. Faced with the imminent arrival of a Republican army, the desperate rebels sought assistance from the British fleet commanded by Admiral Lord Samuel Hood. Hood, wary of a trap, sent Lieutenant Edward Cooke to assess the rebels&apos; intentions and negotiate an alliance.</p><br/>
                <p>Cooke successfully made contact with the rebel leaders, who agreed to surrender the city and the French ships to the British in exchange for protection and the promise of return after the war. Acting swiftly, Hood seized the opportunity. Accompanied by his flagship, HMS Victory, and 19 ships-of-the-line, he sailed into the harbor on 28 August. The Republican sailors, including Admiral Saint-Julien, had already left the city upon realizing the agreement between the royalists and the British. This allowed Hood to capture Toulon and the French fleet without any resistance.</p>
                <br/>
                <p> The battle of Toulon would not only prove itself to be a important military engagement of the French Revolutionary Wars, which would ultimately end up in a loss for the Anglo-Spanish alliance, but also would be the first military battle win for a young artillery officer named Napoleon Bonaparte by forcing withdrawal of the Anglo-Spanish fleet. </p></>
    )
}
export default function Page() {
    const [show, setShow] = useState(false)
    const [play, setPlay] = useState(false)
    const [isCompleted, setCompleted] = useState(false)

    // Callback to check if the child component, SliderButton, is fully actived. A boolean is then passed to the 3dmodel to start the animation.
    const onComplete = (isCompleted) => {
        console.log(isCompleted)
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
                             <div className={"w-96 absolute  lg:right-44 2xl:right-96 " + (show ? '-top-48' : 'lg:top-64 2xl:top-74' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">Toulon</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">28 August 1793</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">Siege of Toulon</h3>
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
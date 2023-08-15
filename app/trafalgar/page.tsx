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
import SliderButton from "@/components/slider/Slider";
import { useSpeechSynthesis } from "react-speech-kit";


const Model = dynamic(() => import('@/components/canvas/ocean/index').then((mod) => mod.Model), {
    ssr: false, 
        loading: () => {
        
        return <Loader text='October 1805, Spain'/> 
    },
        
    })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    
  })

const TextComponent = () => {
    return(
        <>
            
            <p>On the 21st, the Franco-Spanish fleet (33 ships) led by Admirals Villeneuve and Gravina spotted the British fleet near Cape Trafalgar, 20 miles west. The Victory signaled to change course, prompting the enemy to expose its port side. Lord Nelson hoisted the iconic signal &apos;England expects that every man will do his duty&apos; at 11:40 AM.</p>
            <br/>
            <p>At noon, action began, with Fougueux firing at Royal Sovereign. British Admirals hoisted flags, each with two Union Jacks. The Victory suffered heavy fire, losing men, including Nelson&apos;s secretary. Nelson aimed to break the enemy line but faced resistance. Nonetheless, Victory pressed on, targeting the Bucentaure, Villeneuve&apos;s flagship.</p>
            Around 12:30, Victory hit Bucentaure&apos;s stern and engaged nearby ships. It collided with Redoutable, battling it side by side. Other British ships joined, despite light winds, facing challenges and losses.
            <br/>
            <p>During the fight, Nelson was wounded by a musket ball from Redoutable. He continued commanding, even in agony. By 4:30 PM, the battle ended; Nelson learned of victory. Despite severe wounds, he inquired about Hardy&apos;s safety.</p>
            <br/>
            <p>Hardy reported 14 captured enemy ships. Victory suffered damage with casualties. Post-battle, she faced further harm and instability but reached Gibraltar with Neptune&apos;s help.</p>
            <br/>
            <p>Nelson&apos;s body was preserved in brandy. The ship sailed to England, arriving at Spithead on December 4th. Victory bore marks of battle, flag at half-mast. Notable damage was on the figurehead, symbolizing loss. It was repaired, depicting two boys on the shield, signifying peace.</p>       
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
                             <div className={"w-96 -z-50 absolute right-96 " + (show ? '-top-48' : 'top-72' )}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">Trafalgar</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></h1>
                                
                                <h3 className="mt-2 w-96 text-xl">21 October 1805</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">Battle of Trafalgar</h3>
                                { show ? <Overlay text={<TextComponent/>}/> : null}

                            </div>

                        </Html>
                </View>
                <div className="absolute right-96 top-72 z-0 h-60">   
                    <SliderButton sliderEnd={onComplete} direction="vertical"/>

                </div>


            </>
            

    )
}
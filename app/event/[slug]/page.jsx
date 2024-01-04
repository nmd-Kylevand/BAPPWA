"use client"
import { Html } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@/components/detailOverlay/Overlay";
import { useSpeechSynthesis } from "react-speech-kit";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionConfig, motion } from "framer-motion";
import {transition} from "../../../src/helpers/transition"
import { LayoutCamera } from "framer-motion-3d";
import { degToRad } from "three/src/math/MathUtils";


const Toulon = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Toulon), {
    ssr: false,
    loading: () => {

        return <Loader text='August 1793, France' />
    },

})
const Gibraltar = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Gibraltar), {
    ssr: false,
    loading: () => {

        return <Loader text='June 1779, Spain' />
    },

})
const Chatham = dynamic(() => import('@/components/canvas/locationModels/Chatham').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='May 1765, England' />
    },

})
const CapeStVincent = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.CapeStVincent), {
    ssr: false,
    loading: () => {

        return <Loader text='February 1797, Portugal' />
    },

})
const OceanModel = dynamic(() => import('@/components/canvas/ocean/index').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='July 1778, France' />
    },

})

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,

})



export default function Page({params}) {
    const [event, setEvent] = useState({})
    const [show, setShow] = useState(false)
    const [play, setPlay] = useState(false)
    const [isCompleted, setCompleted] = useState(false)
    const [isFullscreen, setFullscreen] = useState(false);
    const prevScrollY = useRef(0);

    const pathname = usePathname()
    // Callback to check if the child component, SliderButton, is fully actived. A boolean is then passed to the 3dmodel to start the animation.
    const onComplete = (isCompleted) => {
        setCompleted(isCompleted)
    }

    const slug = pathname.substring(pathname.lastIndexOf('/') + 1)
    const { speak, cancel } = useSpeechSynthesis()
    
 

    
    
    useEffect(() => {
        const getEventBySlug = async (slug) => {
            const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + `/api/Events/${slug}`, {
                mode: 'no-cors',
            })

            const {event} = await res.json();
            setEvent(event)
        }
        getEventBySlug(params.slug)
        play ? speak({ text: event?.description, rate: 0.9 }) : cancel()

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // You can adjust the threshold value based on your requirement
            const scrollThreshold = 50;

            const textPopUpTreshold = 650;

            // Check if scrolling down
            if (scrollPosition > scrollThreshold && !isFullscreen) {
                setFullscreen(true)
            }

            // Check if scrolling up
            if (scrollPosition <= scrollThreshold && isFullscreen) {
                setFullscreen(false)
            }

            // Check if scrolling down for text pop up
            if (scrollPosition > textPopUpTreshold && !show) {
                setShow(true)
            }
            // Check if scrolling up for text pop up
            if (scrollPosition <= textPopUpTreshold && show) {
                setShow(false)
            }

           
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

       
    }, [params.slug, play, isFullscreen])

    const renderSwitch = (param) => {
        switch (param) {
            case 'siege_of_toulon':
                return <Toulon playAnimation={isCompleted} />
            case 'siege_of_gibraltar':
                return <Gibraltar playAnimation={isCompleted} />
            case 'launch_of_the_hms_victory':
                return <Chatham playAnimation={isCompleted} />
            case 'battle_of_cape_st._vincent':
                return <CapeStVincent playAnimation={isCompleted} />
            default:
                return <OceanModel playAnimation={isCompleted} />
                
        }
    }

    return (
        <>
            
                {/* @ts-ignore */}
            <div className="background-image relative mb-44 h-full w-full items-center justify-center overflow-y-auto">
                    
                    <div >
                        <div className={show ? 'h-full w-full bg-black/40' : ''}>
                            <div className="fixed left-10 top-16 ">
                                <Link className="fontBold uppercase text-white" href="/overview">Back</Link>

                            </div>
                            <div className={"w-[40rem] fixed  md:right-[5rem] xl:right-[45rem] 2xl:right-96 " + (show ? 'top-[10rem] 	' : 'md:top-[30rem] 2xl:top-84 ')}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">{event.location}</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <button><FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></button></h1>

                                <h3 className="mt-2 w-96 text-xl">{event.date}</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">{event.title}</h3>
                                {show ? <Overlay text={event.description} /> : null}

                            </div>
                        </div>
                        

                    </div>
                    <MotionConfig transition={transition}> 
                         <div
                            data-is-fullscreen={isFullscreen}
                            onScroll={() => setFullscreen(!isFullscreen)}
                        >
                            <motion.div className="container" layout>
                                <View className="h-full w-full ">
                                    <LayoutCamera
                                        initial={false}
                                    transition={{ duration: 10 }}

                                        animate={
                                            isFullscreen
                                                ? {
                                                    x: 10,
                                                    y: 5,
                                                    z: 10,
                                                    rotateY: degToRad(90),
                                                    fov: 30
                                                }
                                                : { x: 1, y: 0.25, z: 25, fov: 5 }
                                        }
                                    />
                                    {renderSwitch(slug)}
                                    
                                </View>
                                
                            </motion.div>
                        </div> 
                    </MotionConfig> 
                    
                    
                    

                </div>
                <div className="h-full"></div>
                <div className="h-full"></div>
                


            


        </>
    )
}

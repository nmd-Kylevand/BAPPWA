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
import { CapeStVincent, Chatham, Gibraltar, OceanModel, Toulon } from "./locations";




const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,

})



export default function Page({params}) {
    const [event, setEvent] = useState({})
    const [show, setShow] = useState(true)
    const [play, setPlay] = useState(false)
    const [isCompleted, setCompleted] = useState(false)
    const [isFullscreen, setFullscreen] = useState(false);

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
            if (scrollPosition > textPopUpTreshold && show) {
                setShow(false)
            }
            // Check if scrolling up for text pop up
            if (scrollPosition <= textPopUpTreshold && !show) {
                setShow(true)
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
                return (
                    <>
                    <LayoutCamera
                            initial={false}
                        transition={{ duration: 10 }}

                            animate={
                                isFullscreen
                                    ? {
                                        x: 20,
                                        y: 5,
                                        z: 18,
                                        rotateY: degToRad(90),
                                        fov: 15
                                    }
                                    : { x: -25, y: 0.25, z: 30, fov: 5 }
                            }
                        />
                    <Toulon playAnimation={isCompleted} />
                    </>
                )
            case 'siege_of_gibraltar':
                return (
                    <>
                         <LayoutCamera
                            initial={false}
                        transition={{ duration: 10 }}

                            animate={
                                isFullscreen
                                    ? {
                                        x: 20,
                                        y: 5,
                                        z: 10,
                                        rotateY: degToRad(90),
                                        fov: 30
                                    }
                                    : { x: 1, y: -1, z: -100, fov: 3 }
                            }
                        />
                        <Gibraltar playAnimation={isCompleted} />

                    </>
                )
            case 'launch_of_the_hms_victory':
                return (
                    <>
                        
                            <LayoutCamera
                                initial={false}
                                transition={{ duration: 10 }}

                                animate={
                                    isFullscreen
                                        ? {
                                            x: 0,
                                            y: 15,
                                            z: 80,
                                            rotateY: degToRad(20),
                                            fov: 5
                                        }
                                        : { x: 0, y: 2, z: 50, fov: 5 }
                                }
                            />
                            <Chatham playAnimation={isCompleted} />

                    </>)
            case 'battle_of_cape_st._vincent':
                return (
                    <>
                        <LayoutCamera
                            initial={false}
                            transition={{ duration: 10 }}

                            animate={
                                isFullscreen
                                    ? {
                                        x: 0,
                                        y: 15,
                                        z: 80,
                                        rotateY: degToRad(20),
                                        fov: 5
                                    }
                                    : { x: 0, y: 2, z: 50, fov: 5 }
                            }
                        />
                        <CapeStVincent playAnimation={isCompleted} />
                    </>
                )
            default:
                return (<>
                    <LayoutCamera
                        initial={false}
                        transition={{ duration: 10 }}

                        animate={
                            isFullscreen
                                ? {
                                    x: 20,
                                    y: 5,
                                    z: 350,
                                    rotateY: degToRad(60),
                                    fov: 30
                                }
                                : { x: 350, y: 3, z: 350, fov: 10 }
                        }
                    />
                    <OceanModel playAnimation={isCompleted} />
            </>)
                
        }
    }

    return (
        <>

                {/* @ts-ignore */}
            <div className=" relative z-40  h-full w-full items-center justify-center overflow-y-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden	">

                        <div className={show ? 'fixed h-full w-full bg-black/40' : ''}>
                            <div className="fixed left-10 top-16 ">
                                <a className="fontBold uppercase text-white" href="/overview">Back</a>

                            </div>
                            <div className={"w-[40rem] fixed left-24   " + (show ? 'top-[15rem] 	' : 'md:top-[20rem] lg:top-[25rem] 2xl:top-[40rem]')}>
                                <h1 className=" fontBlack w-96 "><span className="text-4xl">{event.location}</span> <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-4 cursor-pointer text-white" icon={faChevronDown} /> <button><FontAwesomeIcon className="ml-3 cursor-pointer text-base" onClick={() => setPlay(!play)} icon={faVolumeHigh} /></button></h1>

                                <h3 className="mt-2 w-96 text-xl">{event.date}</h3>
                                <h3 className="fontBold my-5  w-96 text-2xl">{event.title}</h3>
                                {show ? <Overlay text={event.description} /> : null}

                            </div>
                        </div>
                        

                    <MotionConfig transition={transition}> 
                         <div
                            data-is-fullscreen={isFullscreen}
                            onScroll={() => setFullscreen(!isFullscreen)}
                        >
                            <motion.div className="container" layout>
                                <View className="mt-[5rem] h-full w-full">
                                    
                                    {renderSwitch(slug)}
                                    
                                </View>
                                
                            </motion.div>
                        </div> 
                    </MotionConfig> 
                    
                    
                    

                </div>
                <div className="background-image h-full"></div>
                <div className="background-image h-full"></div>
                


            


        </>
    )
}

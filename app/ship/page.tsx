/* eslint-disable react/no-unescaped-entities */
"use client"

import Loader from "@/components/loader/Loader"
import { Html } from "@react-three/drei"
import dynamic from "next/dynamic"
import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import shipPainting from "../../public/img/victory.png"
import shipPhoto from "../../public/img/victory2.png"
import Image from "next/image"
import sails from "../../public/img/sails.png"
import captain from "../../public/img/HoratioNelson1.png"
import { useScroll, useTransform, motion } from "framer-motion"

const OceanScene = dynamic(() => import('@/components/canvas/oceanScene/index').then((mod) => mod.Model),
    {
        ssr: false,
        loading: () => <Html as='div'>
            <div role="status">
                <svg aria-hidden="true" className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </Html>
    })

   




export default function Page() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0,1], [0, -50])
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -450]);

    return (
        <>
            <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>

                <OceanScene/>
            </Canvas>
            <div ref={container} className="cloudy_background overflow-hidden 	 bg-[#DEDEDE] text-[#434343]">
                <motion.div style={{ y: md }} className="grid grid-cols-3 gap-4 pt-8 uppercase">
                    <p className="ml-14 text-xs tracking-[0.2rem] text-[#434343]">Chatham</p>
                    <p className="justify-self-center text-xs  tracking-[0.2rem] text-[#434343]">Construction</p>
                    <p className="mr-14 justify-self-end text-xs  tracking-[0.2rem] text-[#434343]">1759</p>
                </motion.div>
                <motion.div style={{ y: lg }} className="ml-[24rem] pt-56">
                    <Image
                        src={shipPainting}
                        alt="painting of the HMS Victory"
                        className=" absolute md:right-[10rem] md:w-[45%]  xl:right-[26rem] 2xl:w-[45%]"/>
                    <Image
                        src={shipPhoto}
                        alt="old photo of the HMS Victory"
                        className="mt-40 sm:w-[75%] md:w-[45%] 2xl:w-[45%]"
                    />
                </motion.div>
                <motion.div style={{y: md}} className="flex items-center justify-center pt-14">
                    <p className="w-[53rem] leading-10 text-[#434343]">6,000 trees were using during HMS Victory’s construction and it was built with 104 guns, crewed by 821 sailors. From bowsprit to taffrail, Victory is 226 feet 6 inches long. It also has a width of 51 feet and 10 inches, and weighs 2,196.6 metric tons. In 1780, the bottom of the ship was coated with 3,923 sheets of copper in order to prevent shipworm from weakening it over time.</p>
                </motion.div>
                <div className="pt-44">
                    
                    <p className="pb-44 text-center text-xs uppercase tracking-[0.2rem]  text-[#434343]">Sails and knots</p>
                    <div className="flex items-center justify-center uppercase">
                        <p className="w-[53rem] text-center text-2xl text-[#434343]">The HMS Victory has three masts and had a total of thirty-seven sails.  The fastest the ship was ever recorded as going was 11 knots, which is the equivalent of 12 miles per hour.</p>

                    </div>
                    <motion.div style={{y:lg}} className="flex items-center justify-center pt-[25rem]">
                        <Image
                            src={sails}
                            alt="image of some sails"
                            className="w-1/3"
                        />
                    </motion.div>
                  
                </div>
                <div className="relative bottom-72 sm:left-[15rem] md:left-[55rem] lg:left-[55rem]  2xl:left-[75rem]" >
                    <motion.div style={{y: lg}} className="">
                        <p className="pb-44 text-xs uppercase tracking-[0.2rem] text-[#434343]  md:ml-44 lg:ml-[12rem] 2xl:ml-[18rem]">The captain</p>
                        <Image
                            src={captain}
                            alt="image of Nelson"
                            className="w-1/3"
                        />
                        <p className="w-[30rem] pt-14 leading-10 text-[#434343]">Victory's most famous Admiral was Horatio Nelson who flew his flag from her between May 1803 and October 1805 as Commander-in-Chief of the Mediterranean Fleet. For eighteen months Nelson blockaded the French fleet under Admiral Villeneuve in Toulon.</p>

                    </motion.div>
                 </div>
                <div className="absolute pl-10 md:top-[200rem]   2xl:top-[240rem]">
                    <div className="pb-36">
                        <p className="pb-16 text-xs uppercase tracking-[0.2rem]  text-[#434343]">Don't drink the water</p>
                        <p className="w-[30rem] text-[#434343]">
                            As with most ships of the era, the crew didn’t drink water on board.  The most common beverages amongst the men were wine and beer.
                        </p>
                    </div>
                    <div>
                        <p className="py-16 text-xs uppercase tracking-[0.2rem] text-[#434343]">Copper bottom</p>
                        <p className="w-[30rem] text-[#434343]">
                            In 1780, the bottom of the ship was covered with 3,923 sheets of copper.  The purpose of this was to protect the ship below the waterline from shipworm, which are mollusks that have a habit of boring into the wood, weakening it over time.

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
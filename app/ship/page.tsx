"use client"

import Loader from "@/components/loader/Loader"
import { Html } from "@react-three/drei"
import dynamic from "next/dynamic"
import { Suspense, useEffect, useState } from "react"
import { getData } from "../api/Events/route"
import { Canvas } from "@react-three/fiber"
import shipPainting from "../../public/img/victory.png"
import shipPhoto from "../../public/img/victory2.png"
import Image from "next/image"
import sails from "../../public/img/sails.png"
import captain from "../../public/img/HoratioNelson1.png"

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

   


    return (
        <>
            <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>

                <OceanScene/>
            </Canvas>
            <div>
                <div>
                    <p>Chatham</p>
                    <p>Construction</p>
                    <p>1759</p>
                </div>
                <div>
                    <Image
                        src={shipPainting}
                        alt="painting of the HMS Victory"/>
                    <Image
                        src={shipPhoto}
                        alt="old photo of the HMS Victory"
                    />
                </div>
                <div>
                    <p>6,000 trees were using during HMS Victory’s construction and it was built with 104 guns, crewed by 821 sailors. From bowsprit to taffrail, Victory is 226 feet 6 inches long. It also has a width of 51 feet and 10 inches, and weighs 2,196.6 metric tons. In 1780, the bottom of the ship was coated with 3,923 sheets of copper in order to prevent shipworm from weakening it over time.</p>
                </div>
                <div>
                    <p>Sails and knots</p>
                    <p>The HMS Victory has three masts and had a total of thirty-seven sails.  The fastest the ship was ever recorded as going was 11 knots, which is the equivalent of 12 miles per hour.</p>
                        <Image
                        src={sails}
                        alt="image of some sails"
                        />
                </div>
                <div>
                    <p>The captain</p>
                    <Image
                        src={captain}
                        alt="image of Nelson"
                    />
                    <p>Victory's most famous Admiral was Horatio Nelson who flew his flag from her between May 1803 and October 1805 as Commander-in-Chief of the Mediterranean Fleet. For eighteen months Nelson blockaded the French fleet under Admiral Villeneuve in Toulon.</p>
                </div>
                <div>
                    <p>Don't drink the water</p>
                    <p>
                        As with most ships of the era, the crew didn’t drink water on board.  The most common beverages amongst the men were wine and beer.
                    </p>
                </div>
                <div>
                    <p>Copper bottom</p>
                    <p>
                        In 1780, the bottom of the ship was covered with 3,923 sheets of copper.  The purpose of this was to protect the ship below the waterline from shipworm, which are mollusks that have a habit of boring into the wood, weakening it over time.

                    </p>
                </div>
            </div>
        </>
    )
}
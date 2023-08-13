"use client"

import Loader from "@/components/loader/Loader"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const AnimatedEarth = dynamic(() => import('@/components/canvas/earthWithAnimations/index').then((mod) => mod.Model),{ssr: false} )
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
})
const Timeline = dynamic(() => import('@/components/timeline/Timeline'), {ssr: false})




export default function Page() {
    return (
      <>
          <div className="h-4/5 w-full items-center">
              <View className=' h-full  '>
                    <Suspense  fallback={null}>
                        <AnimatedEarth/>  

                    </Suspense>
                </View>
                <Timeline />
            </div>
            
          
            
             
       
          
      </>
    )
  }
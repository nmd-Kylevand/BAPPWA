"use client"

import Loader from "@/components/loader/Loader"
import dynamic from "next/dynamic"
import { Suspense, useState } from "react"

const AnimatedEarth = dynamic(() => import('@/components/canvas/earthWithAnimations/index').then((mod) => mod.Model),
{ssr: false, 
loading: () => <Loader text="Loading..."/>
} )
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
})
const Timeline = dynamic(() => import('@/components/timeline/Timeline'), {ssr: false})





export default function Page() {
    const [timelineValue, setTimelineValue] = useState(0)

    // Gets the value from the timeline component and passes it down to play the right animation on the globe
    const childValue = (value) => {
        setTimelineValue(value)
    }

    return (
      <>
          <div className="background-image h-full">
              <View className='bottom-96 h-5/6'>
                    <Suspense  fallback={null}>
                        <AnimatedEarth animation={timelineValue}/>  

                    </Suspense>
                </View>
                <Timeline  currentValue={childValue}/>
            </div>
          
          
      </>
    )
  }
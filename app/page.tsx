'use client'

import Loader from '@/components/loader/Loader'
import Slider from '@/components/slider/Slider'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { styled } from 'styled-components'

const Title = styled.h1`
  color: white;
`
const OffScreenDiv = styled.div`
  width: 75%; /* Set the width to 50% of the viewport */
  position: absolute;
  top: 0;
  right: -15%; /* Set the right value to half of the width (-25% of the viewport) */
  height: 100vh; /* Set the height to cover the entire viewport */
  overflow: hidden;
`


const Earth = dynamic(() => import('@/components/canvas/earth/index').then((mod) => mod.Model), {ssr: false})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='items-center'>
        {/* jumbo */}
        <div className=' ml-8 flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left  '>
          <Title className='mt-16 w-full uppercase'>Discover the journey of the</Title>
          <Title className='fontBold my-4 ml-52 text-5xl font-bold leading-tight'>HMS Victory</Title>
          
          <div className="ml-56 w-64">
              <Slider route={'/overview'}/>
                <div className='uppercase text-white'>
              <p className='text-right'>Swipe to start the journey</p>
            </div>
          </div>
          
          
        </div>
        
        
        <OffScreenDiv>
          <View className='absolute top-0	 flex h-full w-full overflow-hidden'>
                <Suspense fallback={null}>
                    <Earth earthScale={0.681} cloudScale={0.69} />  

                </Suspense>
              </View>
        </OffScreenDiv>
            
         
      </div>

      
    </>
  )
}

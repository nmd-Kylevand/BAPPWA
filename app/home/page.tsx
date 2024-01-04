'use client'

import SliderButton from '@/components/slider/Slider'
import { Html } from '@react-three/drei'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'




export default function Page() {
    const router = useRouter();

    const handleDivClick = (url) => {
        router.push(url)
    }
    return (
        <>
            <div className='grid h-full grid-cols-2'>
                <div onClick={() => router.push('/ship')} className="flex cursor-pointer bg-[url('/img/victory.jpg')] bg-center hover:contrast-100 hover:grayscale">
                    <div className='m-auto'>
                        <h1 className='text-center align-middle'>THE SHIP</h1>
                    </div>
                    
                </div>
                <div onClick={() => router.push('/overview')} className="flex cursor-pointer bg-[url('/img/background.png')] bg-center hover:contrast-200 hover:grayscale">
                        <div className='m-auto'>
                            <h1 className='text-center'>THE JOURNEY</h1>

                        </div>
                    </div>

            </div>


        </>
    )
}

"use client"

import Loader from "@/components/loader/Loader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Model = dynamic(() => import('@/components/canvas/locationModels/index').then((mod) => mod.Chatham), {ssr: false})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <Loader/>
    ),
  })
export default function Page() {
    return (
        <View className="flex h-full w-full flex-col items-center justify-center">
            <Suspense fallback={<Loader/>}>
            <ambientLight/>

                <Model/>
                <PerspectiveCamera makeDefault fov={90} position={[500, 500, 500]} />

                <OrbitControls/>
            </Suspense>
        </View>
    )
}
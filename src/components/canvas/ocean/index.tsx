import * as THREE from 'three'
import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei'
import { FBXLoader, Water } from 'three-stdlib'
import dynamic from 'next/dynamic'

extend({ Water })
const Ship = dynamic(() => import('@/components/canvas/ship').then((mod) => mod.Ship), {
  ssr: false,
  loading: () =>
    <Html as='div'>
      <div role="status">
        <svg aria-hidden="true" className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </Html>
})
function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/img/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(2000, 2000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  {/* @ts-ignore */ }

  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return (
    <>
      {/* @ts-ignore */}

      <PerspectiveCamera makeDefault fov={90} position={[7, 3, 7]} zoom={0.00001} />
      {/* @ts-ignore */}

      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />

    </>

  )
}

export function Model() {
  return (
    <>
      <ambientLight />

      {/* <pointLight position={[100, 100, 100]} />
            <pointLight position={[-100, -100, -100]} /> */}
      <Suspense fallback={null}>

        <Ocean />
        <Ship scale={50} distances={[0, 700]} position={[0, -10, 0]} rotation={[0,0,0]} />
      </Suspense>
      {/* @ts-ignore */}

      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={1.5} enableZoom={false} />
    </>

  )
}

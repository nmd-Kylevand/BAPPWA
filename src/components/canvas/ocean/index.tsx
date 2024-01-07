import * as THREE from 'three'
import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei'
import { FBXLoader, Water } from 'three-stdlib'
import dynamic from 'next/dynamic'

extend({ Water })
const Ship = dynamic(() => import('@/components/canvas/ship').then((mod) => mod.Ship), { ssr: false })

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
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return (
    <>
      <PerspectiveCamera makeDefault fov={90} position={[7, 3, 7]} zoom={0.00001} />

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
        <Ship scale={50} distances={[0, 700]} position={[0, -10, 0]} />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={1.5} enableZoom={false} />
    </>

  )
}

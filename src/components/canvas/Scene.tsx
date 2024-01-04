'use client'

import { Canvas, extend } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import { MotionCanvas } from 'framer-motion-3d'
import { useMemo } from 'react'
import * as THREE from 'three'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  useMemo(() => extend(THREE), []);

  return (
    <MotionCanvas {...props}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </MotionCanvas>
  )
}

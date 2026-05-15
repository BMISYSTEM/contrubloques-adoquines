'use client'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import {  RefreshCcw } from 'lucide-react';


export const Adoquin3d = () => {

  const [open, setOpen] = useState(false)
  const [imageSelect, setImagenSelect] = useState(0)
  const [valorScroll, setValorScroll] = useState(0)
  const [move, setMove] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null)
  const scrollY = useRef(0);
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleScroll = () => {
      scrollY.current = el.scrollTop;
      setValorScroll(el.scrollTop)
    };
    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, []);

  useEffect(() => {
    if (valorScroll < 1300) {
      setMove(false)
    }
  }, [valorScroll])

  return (
    <div className='w-full h-full  items-center justify-center flex flex-col'>
      <span className='text-center   flex flex-row items-center justify-center mt-2 gap-5 md:text-9xl text-6xl font-bold'>Explora el bloque </span>
      <span className='flex flex-row gap-3 items-center mt-3'><RefreshCcw size={20}/> Rotar</span>
      <Canvas
        className='rounded-sm backdrop-blur-lg transition-all'
        style={{
          width: "70%",
          height: "50%",
          background: "transparent"
        }}
        camera={{ position: [15, 25, 5], fov: 7 }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enableDamping
          dampingFactor={0.05}
        />

        <Scene scrollY={valorScroll} move={move} />
      </Canvas>
    </div>
  )
}



export function CameraController({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const { camera } = useThree();

  useFrame(() => {
    const s = scrollY.current;
    // Suave inclinación de la cámara según scroll
    camera.position.y = 3 + s * 0.002;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });

  return null;
}
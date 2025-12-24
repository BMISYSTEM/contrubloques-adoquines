'use client'
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import Image from 'next/image';
import { DivScrollLeft } from '@/components/componenst-animate/DivScrollLeft';
import { DivScrollTop } from '@/components/componenst-animate/DivScrollTop';
import { DivScrollRigth } from '@/components/componenst-animate/DivScrollRigth';
import { LiquidGlass } from '@liquidglass/react';
import Link from 'next/link';

export const Bloque3d = () => {
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

  useEffect(()=>{
    if(valorScroll < 1300){
      setMove(false)
    }
  },[valorScroll])
  return (
    <>
        <div className="fixed inset-0 z-0" style={{   background: "white",   backgroundImage: `     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)   `,   backgroundSize: "40px 40px, 40px 40px, 100% 100%", }} />
        {!move && (
          <Canvas
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            camera={{ position: [0, 3, 8], fov: 45 }}>
            <ambientLight intensity={1} />
            {/* <pointLight position={[10, 10, 10]} /> */}
            {/* <OrbitControls/> */}
            {/* <OrbitControls enableZoom={false} enableRotate={false}
            enablePan={false} /> */}
            <Scene scrollY={valorScroll} move={move} />
          </Canvas>
        )}
      <section ref={containerRef}     className="
                    relative
                    h-screen
                    overflow-y-scroll
                    snap-y snap-mandatory
                    scroll-smooth
                    z-10
                  ">
          
          <header className='w-full h-screen flex flex-col items-center pt-30  gap-2  snap-start '>
            <DivScrollTop className='flex flex-row gap-5 items-center absolute'>
              <button className='btn-8'>
                <span>Bloque 10 {">"} </span>
              </button>
              <button className='btn-8'>
                <span>Bloque 12 {">"} </span>
              </button>
              <button className='btn-8'>
                <span>Bloque 14 {">"} </span>
              </button>
            </DivScrollTop>
            <DivScrollRigth className='absolute left-[33%] top-[30%]'>
              <Image title='flecha' alt='flecha' src={"/flecha.png"} width={100} height={100}
                className=' w-40' />
            </DivScrollRigth>
            <DivScrollLeft className='w-40 absolute left-[30%] top-[40%]'>
              <span className=''>
                Bloque 10
                Dimenciones (W,H,L)
                10*19*39 cm
                Peso aprox: 10,5 Kg
              </span>
            </DivScrollLeft>
          </header>
          <section className='w-full h-screen snap-start flex flex-col justify-center '>
            <DivScrollLeft className='absolute px-10  w-[40%] h-96 bg-amber-300 rounded-r-[80px] flex flex-col items-center gap-5  justify-center '>
              <h1 className='text-3xl font-semibold uppercase text-slate-700'>Productos con <br></br> <span className='text-7xl font-bold'>Calidad</span> <br></br> y durabilidad </h1>
              <p className='text-lg font-semibold'>Nuestro bloque de concreto está diseñado para ofrecer resistencia y durabilidad en proyectos de construcción de muros, cercas y estructuras diversas. Con sus dimensiones precisas y acabado de calidad, garantiza una fácil instalación y un resultado impecable.</p>
            </DivScrollLeft>
          </section>
          <section className='w-full h-screen relative flex flex-col items-center justify-center snap-start '>
            {valorScroll >= 1300 && (
              <DivScrollTop className='absolute top-[20%] '>
                <button onClick={() => setMove(!move)} className='border border-slate-300  px-5 py-2 rounded-sm'>Mover libre </button>
              </DivScrollTop>
            )}
            {move &&  (
              <Canvas
                className='border rounded-sm border-slate-300'
                style={{
                  width: "70%",
                  height: "20rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white"
                }}
                camera={{ position: [0, 5, 8], fov: 45 }}>
                <ambientLight intensity={1} />
                <OrbitControls enableZoom={true} enableRotate={true}
                  enablePan={true} />
                <Scene scrollY={valorScroll} move={move}  />
              </Canvas>
            )}
          </section>
          <section className='w-full h-screen flex items-center bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] justify-center snap-start '>
            <div className='md:w-280 w-full h-screen flex flex-col gap-10 items-center justify-center'>
                <h2 className='text-3xl font-semibold'>Fecha tecnica</h2> 
                <div className='w-full flex items-center justify-center  '>
                  <table className='w-1/2 rounded-3xl overflow-hidden shadow-2xl'>
                    <thead>
                      <tr className='bg-[#FFD230] '>
                        <th className='font-bold py-4 text-left px-5 '>Propiedad</th>
                        <th className='font-bold py-4 text-left px-5 '>Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Referencia</td>
                          <td className='px-5  py-3 text-left'>CB-1039</td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Altura</td>
                          <td className='px-5  py-3 text-left'>19 cm</td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Ancho</td>
                          <td className='px-5  py-3 text-left'>10 cm</td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Fondo</td>
                          <td className='px-5  py-3 text-left'>39 cm </td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Peso</td>
                          <td className='px-5  py-3 text-left'>7.5 Kg</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left font-bold' colSpan={2}>Caracteristicas adiccionales:</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Resistencia a la compresion: 4.0 MPa</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Absorcion de agua: {"<8%"}</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Material: Cemento Portland y agregados seleccionados</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Aplicacion: Muros estructuras y divisorios </td>
                        </tr>
                    </tbody>
                  </table>
                </div>

            </div>
          </section>
          <section className='w-full h-screen flex items-center bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] justify-center snap-start '>
            <div className='md:w-280 w-full h-screen flex flex-col gap-10 items-center justify-center'>
                <h3 className='text-3xl font-semibold text-white'>Producto Instalado</h3> 
                <Image width={1000} height={1000} alt='Imagen de producto instalado' title='Producto instalado '
                src={"/productoinstalado.png"} className='w-200 h-130'/>
            </div>
          </section>
      </section>
    </>
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
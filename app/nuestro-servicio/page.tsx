'use client'
import Scene from '@/components/bloques/render-bloque/Scene'
import Adoquin from '@/components/adoquines/render-adoquines/Scene'

import { Navar } from '@/components/Navar'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import React from 'react'
import { ClipboardCheck, Shield, ShieldCheck, Timer } from 'lucide-react'
import { Footer } from '@/components/Footer'


const glbs = [
    "adoquin-rojo.glb",
    "adoquin-amarillo.glb",
    "adoquin-negro.glb",
]
const page = () => {
    return (
        <>
            <Navar />
            {/* section header */}
            <section className="w-full h-[120vh] bg-black relative flex justify-center items-center">
                <h1 className="md:text-8xl text-3xl absolute text-white text-center font-bold ">Precision visible.<br /> Estructura real</h1>
                <Image src={"/contenido/IMG_1_SESION_NUESTRO_SERVICIO.png"}
                    alt="Imagen de nuestro estandar "
                    width={2000}
                    height={1080}
                    className="w-full h-full object-cover" />
            </section>
            <section className='w-full md:h-screen flex flex-col items-center bg-[#F5F5F5]  pt-20 '>
                <h2 className='md:text-7xl text-2xl '>Diseñado para alineacion precisa</h2>
                <div className='mt-20 h-120 md:w-250 w-full '>
                    <Canvas
                        className=' rounded-sm   transition-all '
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "transparent"
                        }}
                        camera={{ position: [0, 5, 8], fov: 50 }}>
                        <ambientLight intensity={1} />
                        <OrbitControls enableZoom={false} enableRotate={true}
                            enablePan={true} />
                        <Scene scrollY={0} move={true} />
                    </Canvas>
                </div>
            </section>
            <section className='w-full h-auto  pt-20 gap-1 pb-20 bg-[#F5F5F5] flex flex-col items-center '>

                <div className='flex md:flex-row flex-col gap-1 md:w-250 w-full  '>
                    <div className='md:w-2/3 w-full   h-250 rounded-lg bg-gray-500'>
                        <Image src={"/contenido/Sesión_bloque_imagen_1_carrusel.jpg"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
                    </div>
                    <div className='md:w-1/3 w-full   h-96 md:sticky top-0 bg-gray-500 rounded-lg'>
                        <Image src={"/contenido/Sesión_bloque_imagen_2_carrusel.jpg"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:w-250 w-full '>
                    <div className='md:w-1/3 w-full h-96  md:sticky top-0 bg-gray-500 rounded-lg'>
                        <Image src={"/contenido/Sesión_bloque_imagen_3_carrusel.jpg"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
                    </div>
                    <div className='md:w-2/3 w-full h-250  rounded-lg bg-gray-500'>
                        <Image src={"/contenido/Sesión_bloque_imagen_4_carrusel.jpg"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <section className='w-full md:h-screen flex md:flex-row flex-col gap-5 px-5 md:px-30 md:pt-20 pt-5 bg-[#F5F5F5]'>
                <div className='md:w-2/3 w-full h-full  flex flex-col gap-2 items-center justify-center '>
                    <h3 className='text-3xl font-semibold'>Composicion estructural optimizada</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia assumenda illum, dolore facere odio ipsa, deleniti, est laborum possimus inventore sunt fugit delectus ducimus dolorum modi corrupti pariatur quam!</p>
                </div>
                <div className='w-full h-full '>
                    <Canvas
                        className=' rounded-sm  '
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "transparent"
                        }}
                        camera={{ position: [0, 5, 8], fov: 45 }}>
                        <ambientLight intensity={1} />
                        <OrbitControls enableZoom={false} enableRotate={true}
                            enablePan={true} />
                        <Adoquin scrollY={0} move={true} glbRute={"/adoquin-rojo.glb"} />
                    </Canvas>
                </div>
            </section>
            <section className='w-full md:h-screen flex md:flex-row flex-col gap-5 px-5 md:px-30 pt-20 bg-[#F5F5F5]'>
                <div className='w-full h-full  flex flex-col gap-2 items-center justify-center '>
                    <Image src={"/contenido/IMG_2_SESION_NUESTROS_SERVICIO.png"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
                </div>
                <div className='md:w-2/3 w-full h-full  flex flex-col  items-center gap-5 justify-center'>
                    <h4 className='text-3xl font-semibold'>Siempre a tiempo</h4>
                    <div className='flex flex-wrap gap-2  md:justify-between justify-center'>
                        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
                            <Timer size={20} />
                            <span className='text-xs font-semibold text-center'>Logistica estructurada</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
                            <ClipboardCheck size={20} />
                            <span className='text-xs font-semibold text-center'>Control de tiempos</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
                            <ShieldCheck size={20} />
                            <span className='text-xs font-semibold text-center'>Respaldo continuo</span>
                        </div>

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis accusantium doloremque officia architecto suscipit repellendus laudantium ea dolor, quia dolorem natus tenetur praesentium aperiam neque voluptatum odio molestias dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore voluptates minus odio autem, cumque non quasi ut amet mollitia a impedit, numquam repellendus, nulla consectetur unde dolorum corrupti repudiandae dolore</p>
                </div>
            </section>
            <section className='w-full h-auto bg-[#F5F5F5] flex flex-col items-center justify-center gap-5 px-5 md:px-30 pt-20 '>
                <h5 className='text-4xl font-semibold'>¿ No estas seguro de que prefabricado utilizar ? </h5>
                <button className='px-5 py-2 text-white bg-black rounded-2xl mt-20'>
                    Obten tu asesoria
                </button>
                <div className='flex flex-wrap gap-1 '>
                    <Image src={"/contenido/IMG_1_SESION_NUESTRO_SERVICIO.png"} alt='imagen de bloques ' width={1080} height={1020} className='w-96 h-96 ' />
                    <Image src={"/contenido/IMG_2_SESION_NUESTROS_SERVICIO.png"} alt='imagen de bloques ' width={1080} height={1020} className='w-96 h-96 object-cover ' />
                </div>
            </section>
            <section className='w-full h-[70vh] gb-black/20 mt-20'>
                <video
                playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    preload="metadata"
                >
                    <source src="/contenido/Video_sesión_Nuestros_servicios.MOV" type="video/mp4" />
                </video>            </section>
            <Footer />
        </>
    )
}

export default page
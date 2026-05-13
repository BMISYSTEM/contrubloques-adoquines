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
import { BottonWhatsapp } from '@/components/BottonWhatsapp'


const glbs = [
    "adoquin-rojo.glb",
    "adoquin-amarillo.glb",
    "adoquin-negro.glb",
]
const page = () => {
    return (
        <>
        <BottonWhatsapp/>
            <Navar />
            {/* section header */}
            <section className="w-full h-[120vh] bg-black relative flex justify-center items-center">
                <div className="w-full h-full bg-black/50 absolute"></div>
                <h1 className="md:text-6xl text-3xl absolute text-white text-center font-bold ">Tu obra no se detiene</h1>
                <p className='text-xl font-semibold absolute mt-30  text-white'>Coordinamos produccion, despacho y entrega para que tu proyecto avance sin interrupciones</p>
                <Image src={"/contenido/IMG_1_SESION_NUESTRO_SERVICIO.png"}
                    alt="Imagen de nuestro estandar "
                    width={2000}
                    height={1080}
                    className="w-full h-full object-cover" />
            </section>


            <section className='w-full md:h-screen flex md:flex-row flex-col gap-5 px-5 md:px-30 pt-20 bg-[#F5F5F5]'>
                <div className='w-full h-full  flex flex-col gap-2 items-center justify-center '>
                    <Image src={"/contenido/IMG_2_SESION_NUESTROS_SERVICIO.png"} alt='estandares' width={1080} height={1080} className="w-full h-full object-contain" />
                </div>
                <div className='md:w-2/3 w-full h-full  flex flex-col  items-center gap-5 justify-center'>
                    <h4 className='text-3xl font-semibold'>Siempre a tiempo</h4>
                    <div className='flex flex-wrap gap-10  justify-center items-center'>
                        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
                            <Timer size={20} />
                            <span className='text-sm  text-center font-semibold'>Asesoria</span>
                            <p className='text-center'>Te ayudamos a elegir el producto ideal según tu proyecto</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
                            <ClipboardCheck size={20} />
                            <span className='text-sm font-semibold text-center'>Programación </span>
                            <p className='text-center'>Organizamos producción y despacho según tus tiempos en obra</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
                            <ShieldCheck size={20} />
                            <span className='text-sm font-semibold text-center'>Entrega</span>
                            <p className='text-center'>Cumplimos con entregas puntuales y seguimiento continuo</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-[70vh] gb-black/20 mt-2 relative '>
            <div className='w-full h-full bg-black/50 absolute'></div>
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    preload="metadata"
                >
                    <source src="/Video_1_sesion_nuestros_servicios.MOV" type="video/mp4" />
                </video>
                <div className='w-60 absolute bottom-5 left-5'>
                    <h4 className='text-xl font-bold text-white'>Logistica pensada en obra real</h4>
                    <p className='text-lg text-white'>entregas organizadas, controladas y adaptadas a tu proyecto</p>

                </div>
            </section>
             <section className='w-full h-auto bg-[#F5F5F5] flex flex-col  items-center justify-center gap-2 pb-10 px-5 md:px-30 pt-20 '>
                <h5 className='text-4xl font-semibold'>¿ Listo para programar tu entrega ? </h5>
                <p>Cotiza segun cantidad,ubicacion y tiempo de obra </p>
                <p>Te ayudamos a coordinar todo</p>
                <button className='px-5 py-2 text-white bg-black rounded-2xl mt-2'>
                    Cotiza por Whatsapp
                </button>
                {/* <div className='flex flex-wrap gap-1 '>
                    <Image src={"/contenido/IMG_1_SESION_NUESTRO_SERVICIO.png"} alt='imagen de bloques ' width={1080} height={1020} className='w-96 h-96 ' />
                    <Image src={"/contenido/IMG_2_SESION_NUESTROS_SERVICIO.png"} alt='imagen de bloques ' width={1080} height={1020} className='w-96 h-96 object-cover ' />
                </div> */}
            </section>
            <Footer />
        </>
    )
}

export default page
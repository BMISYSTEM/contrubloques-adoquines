import { ArrowRight, Calendar, Locate, MapPin, PointerIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Visitanos = () => {
  return (
    <section className='w-full md:h-screen min-h-screen h-auto relative flex items-center'>
       <div className='w-full h-full  absolute'>
            <Image src={"/fabrica.png"} alt='imagen de fabrica' width={2000} height={2000} className='w-full h-full object-cover'/>
        </div>
        <div className='w-full h-full absolute  bg-linear-to-r from-black to-transparent'></div>
         <div className='md:w-100 w-full items-start absolute left-10 flex flex-col gap-2 '>
            <span className='text-xl uppercase text-[#FFD230]'>Nuestra planta</span>
            <span className='md:text-6xl text-3xl font-semibold text-white '>Producción <br/> que construye <br/> confianza <span className='text-[#FFD230]'>.</span></span>
            <span className='md:text-black text-white'>Tecnología, control y experiencia <br/>para entregar prefabricados de<br/> alta calidad en cada proyecto.</span>
            <div className='w-20 h-0.5 bg-[#FFD230]'></div>

            <div className='flex flex-row gap-5 mt-10 items-center  '>
                <MapPin size={30} color='#FFD230'/>
                <div className='flex flex-col gap-2 '>
                    <span className='text-xl font-semibold text-white'>La Buitrera, Cali</span>
                    <span className='text-slate-200'>Valle del Cauca, Colombia</span>
                </div>
            </div>
            <div className='mt-10 flex md:flex-row flex-col gap-5 '>
                <button onClick={()=>{
                    window.open("https://maps.app.goo.gl/Bvh6b8ZnfapyaqbS9","_blanck")
                }} className='px-5 py-2 flex flex-row gap-5 items-center bg-[#FFD230] rounded-2xl'>
                    <ArrowRight size={20} color='black'/>
                    <span className='text-black'>Abrir Ubicación</span>
                </button>
                <button onClick={()=>{
                    window.open("https://wa.link/s33z6v","_blanck")
                }} className='px-5 py-2 flex flex-row gap-5 items-center  rounded-2xl'>
                    <Calendar size={20} color='white'/>
                    <span className='text-white'>Agendar visita</span>
                </button>
            </div>
        </div>
        
    </section>
  )
}

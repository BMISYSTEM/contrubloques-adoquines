import { Bloque3d } from '@/components/bloques/render-bloque/Bloque3d'
import { LiquidGlass } from '@liquidglass/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className="w-full fixed  top-0 flex items-center justify-center mt-10 z-50 ">
              <section className="md:w-280 w-full">
                <LiquidGlass blur={5} contrast={1.1} brightness={1.05} saturation={1.1} className="animate__animated animate__fadeInDown w-full  flex flex-row  items-center justify-center">
                  
                  <nav id="navegacion-desktop" className=" flex flex-row px-5 justify-between md:gap-2  w-full  h-15    z-50 rounded-[80px]">
                    <div id="logo-nav" className="hidden w-30 h-full md:flex items-center justify-center">
                      <Image src={"/logo.png"} alt="Logo contru bloques " width={100} height={100} className="object-contain" />
                    </div>
                    <div id="opciones-nav" className="md:w-120 w-full  flex flex-row md:gap-10 items-center md:justify-end justify-between">
                     <Link href={"/"}>
                  <span className="text-slate-300 text-sm">Inicio</span>
                </Link>
                <Link href={"#dimenciones"} >
                  <span className="text-slate-300 text-sm">Dimenciones</span>
                </Link>
                <Link href={"#producto"} >
                  <span className="text-slate-300 text-sm">Producto</span>
                </Link>
                <Link href={"#render"} >
                  <span className="text-slate-300 text-sm">Render</span>
                </Link>
                <Link href={"#ficha"} >
                  <span className="text-slate-300 text-sm">Ficha</span>
                </Link>
                <Link href={"#instalado"} >
                  <span className="text-slate-300 text-sm">Instalado</span>
                </Link>
                <Link href={"#galeria"} >
                  <span className="text-slate-300 text-sm">Galeria</span>
                </Link>
                <Link href={"/Contactenos"} className="bg-[#FFD230] px-3 py-1 rounded-[80px] transition-all hover:opacity-80">
                  <span className="text-sm">Contactanos</span>
                </Link>
                    </div>
                  </nav>
                </LiquidGlass>
              </section>
            </section>
        {/* render  */}
        <Bloque3d/>
        {/* ficha tecnica  */}
        
        {/* componente header  */}
        {/* componenete main */}
    </>
  )
}

export default page
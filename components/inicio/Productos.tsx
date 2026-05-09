'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DivScrollLeft } from '../componenst-animate/DivScrollLeft'
import { DivScrollRigth } from '../componenst-animate/DivScrollRigth'

export const Productos = () => {
  return (
    <section id="productos" className=" w-full  h-full flex flex-col items-center justify-center gap-5 py-20  snap-start " >
          <h3 className="text-3xl font-semibold text-white text-center">Nuestros productos</h3>
          <span className="text-lg text-white text-center ">Prefabricados de concreto desarrollados para aportar precisión y estabilidad en cada proyecto.</span>
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center mt-10 md:px-0 px-5 ">
            <DivScrollLeft className=" md:w-96  md:h-96 h-40 w-40 relative group overflow-hidden  bg-slate-300 shadow-xl">
              <Image src={"/producto1.png"} width={100} height={100} title="Imagen de producto de bloques de cemento " alt="Imagen de producto de bloques de cemento "
                className="w-full h-full object-cover" />
              <div className="
                    w-full h-full
                    bg-black/60
                    absolute inset-0
                    md:opacity-0 md:translate-y-96
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500 ease-out
                    flex flex-col gap-4  items-center justify-center
                    ">
                      <span className="text-lg text-slate-200">Bloque estructural</span>
                <Link href={"/bloques"} title="Conoce mas informacion sobre bloques  " 
                className="px-5 py-1 rounded-[80px] border border-slate-200 bg-black/60 transition-all hover:bg-black hover:text-white cursor-pointer">
                  <span className="text-sm text-slate-200">Ver mas</span>
                </Link>
              </div>
            </DivScrollLeft>
            <DivScrollRigth className="md:w-96  md:h-96 h-40 w-40 relative group overflow-hidden rounded-sm bg-slate-300 shadow-xl">
              <Image src={"/producto2.png"} width={100} height={100} title="Imagen de producto de bloques de cemento " alt="Imagen de producto de bloques de cemento "
                className="w-full h-full object-cover" />
              <div className="
                    w-full h-full
                    bg-black/60
                    absolute inset-0
                    md:opacity-0 md:translate-y-96
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500 ease-out
                    flex flex-col gap-4  items-center justify-center
                    ">
                      <span className="text-lg text-slate-200">Adoquines</span>
                <Link href={"/adoquines"} title="Conoce mas informacion sobre Adoquines  " 
                className="px-5 py-1 rounded-[80px] border border-slate-200 bg-black/60 transition-all hover:bg-black hover:text-white cursor-pointer">
                  <span className="text-sm text-slate-200">Ver mas</span>
                </Link>
              </div>
            </DivScrollRigth>
          </div>
        </section>
  )
}

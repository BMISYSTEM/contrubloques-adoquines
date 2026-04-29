'use client'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'
import { DivScrollTop } from '../componenst-animate/DivScrollTop'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export const PorqueNosotros = () => {
  return (
    <section className="w-full h-[160vh] bg-black relative flex justify-center ">
                    <div className='w-full h-full absolute bg-linear-to-b from-black to-transparent'></div>
                    <h1 className="md:text-8xl text-3xl absolute mt-20 text-white text-center font-bold ">Sigue explorando</h1>
                    <div className='top-72 flex flex-wrap w-full absolute md:px-20 px-2 items-center justify-center gap-5 '>
                      <div className='group w-100 h-40 bg-white rounded-lg flex flex-row justify-center items-end '>
                        <div className=' flex flex-row justify-between items-center w-full px-4 py-2'>
                          <span className='text-2xl'>Prefabricados</span>
                          <button className='bg-slate-300 group-hover:text-white rounded-full transition-all group-hover:bg-black'>
                            <ChevronRight size={30} />
                          </button>
                        </div>
                      </div>
                      <div className=' group w-100 h-40 bg-white rounded-lg flex flex-row justify-center items-end '>
                        <div className=' flex flex-row justify-between items-center w-full px-4 py-2'>
                          <span className='text-2xl'>Nuestro servicio</span>
                          <button className='bg-slate-300 group-hover:text-white rounded-full transition-all group-hover:bg-black'>
                            <ChevronRight size={30} />
                          </button>
                        </div>
                      </div>
                      <div className='group w-100 h-40 bg-white rounded-lg flex flex-row justify-center items-end '>
                        <div className=' flex flex-row justify-between items-center w-full px-4 py-2'>
                          <span className='text-2xl'>Contactanos</span>
                          <button className='bg-slate-300 group-hover:text-white rounded-full transition-all group-hover:bg-black'>
                            <ChevronRight size={30} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Image src={"/contenido/IMG_1_SESION_SEGUIR_EXPLORANDO.png"}
                        alt="Imagen de nuestro estandar "
                        width={1080}
                        height={1080}
                        className="w-full h-full object-cover" />
                </section>
  )
}

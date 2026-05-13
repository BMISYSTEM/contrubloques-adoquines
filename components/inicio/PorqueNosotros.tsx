'use client'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'
import { DivScrollTop } from '../componenst-animate/DivScrollTop'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export const PorqueNosotros = () => {
  return (
    <>

      <section className="w-full md:h-screen h-[110vh] bg-black relative flex justify-center ">
        <div className='w-full h-full absolute bg-linear-to-b from-black to-transparent'></div>
        <h3 className="md:text-6xl text-3xl absolute mt-20 text-white text-center font-bold ">Sigue explorando</h3>
        <div className='md:top-72 top-40 flex flex-wrap w-full absolute md:px-20 px-2 items-center justify-center gap-5 '>
          <div className='group w-100 h-32 bg-white rounded-lg flex flex-row justify-center items-end '>
            <div className=' flex flex-row justify-between items-center w-full px-4 py-2'>
              <span className='text-2xl'>Prefabricados</span>
              <button className='bg-slate-300 group-hover:text-white rounded-full transition-all group-hover:bg-black'>
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
          <div className=' group w-100 h-32 bg-white rounded-lg flex flex-row justify-center items-end '>
            <div className=' flex flex-row justify-between items-center w-full px-4 py-2'>
              <span className='text-2xl'>Nuestro servicio</span>
              <button className='bg-slate-300 group-hover:text-white rounded-full transition-all group-hover:bg-black'>
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
          <div className='group w-100 h-32 bg-white rounded-lg flex flex-row justify-center items-end '>
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
      <section className="text-center  w-full px-5 bg-white pt-10 pb-10  bottom-10 flex flex-col gap-5">
        <h4 className='text-5xl font-semibold text-slate-800'>Hablemos de tu próximo proyecto.</h4>
        <p className='text-center text-xl text-slate-800 font-semibold'>Te ayudamos a elegir la referencia adecuada en bloques estructurales y adoquines para tu proyecto</p>
        <div>
          <button onClick={()=>{
            window.open("https://wa.link/okhbn0","_blanck")
          }} className='px-3 py-1 rounded-sm bg-black text-white cursor-pointer hover:opacity-90'>
            <span>Asesoría por WhatsApp</span>
          </button>

        </div>
      </section>

    </>
  )
}

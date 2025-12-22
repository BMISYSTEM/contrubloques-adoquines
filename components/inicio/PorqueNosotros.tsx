'use client'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'
import { DivScrollTop } from '../componenst-animate/DivScrollTop'

export const PorqueNosotros = () => {
  return (
    <section id="sect-beneficios" className="w-full h-screen snap-start flex flex-col items-center justify-center   px-5 mt-10  gap-10 bg-[#222222] pt-20 ">
          <div className="md:w-280 w-full flex flex-col gap-5 ">
            <h6 className="text-lg text-slate-300">¿ Porque Nosotros ? </h6>
            <span className="text-xl text-white ">Algunos de nuestros beneficios</span>

            <DivScrollTop className="flex flex-row gap-10 items-center mt-10 ">
              <div className="flex flex-col gap-5 bg-black rounded-xl shadow px-5 py-3 ">
                <MdHomeFilled size={20} color="white"/> 
                <span className="text-sm font-semibold text-white">+ 200 Servicios </span>
                <span className="text-xs text-slate-100">Nuestra atencion es dedicada por cada cliente </span>
              </div>
              <div className="flex flex-col gap-5 bg-black rounded-xl shadow px-5 py-3 ">
                <MdHomeFilled size={20} color="white"/> 
                <span className="text-sm font-semibold text-white">+ 200 Servicios </span>
                <span className="text-xs text-slate-100">Nuestra atencion es dedicada por cada cliente </span>
              </div>
              <div className="flex flex-col gap-5 bg-black rounded-xl shadow px-5 py-3 ">
                <MdHomeFilled size={20} color="white"/> 
                <span className="text-sm font-semibold text-white">+ 200 Servicios </span>
                <span className="text-xs text-slate-100">Nuestra atencion es dedicada por cada cliente </span>
              </div>
              <div className="flex flex-col gap-5 bg-black rounded-xl shadow px-5 py-3 ">
                <MdHomeFilled size={20} color="white"/> 
                <span className="text-sm font-semibold text-white">+ 200 Servicios </span>
                <span className="text-xs text-slate-100">Nuestra atencion es dedicada por cada cliente </span>
              </div>
              <div className="flex flex-col gap-5 bg-black rounded-xl shadow px-5 py-3 ">
                <MdHomeFilled size={20} color="white"/> 
                <span className="text-sm font-semibold text-white">+ 200 Servicios </span>
                <span className="text-xs text-slate-100">Nuestra atencion es dedicada por cada cliente </span>
              </div>
              
            </DivScrollTop>
          </div>

        </section>
  )
}

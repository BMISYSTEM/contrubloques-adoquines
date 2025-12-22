'use client'

import { DivScrollLeft } from "../componenst-animate/DivScrollLeft"

export const Calculadora = () => {
  return (
    <section id="sect-calculadora" className="md:w-280 w-full  flex items-center justify-center">
    <DivScrollLeft className=" w-160 h-150 bg-white rounded-[80px] shadow-2xl flex flex-col justify-between gap-2 px-5 py-2 ">
      <div className="flex flex-col gap-2 py-5 items-center justify-center w-full">
        <h2 className="text-2xl font-semibold ">Calculadora de precios </h2>
        <span className="text-sm ">Calcula cuántos Bloques o Adoquines necesitas para tu proyecto</span>

        <div className="flex flex-row gap-5 items-center justify-center mt-5">
          <button className="px-3 py-1 border border-amber-500 bg-amber-500/20 rounded-sm">
            <span className="text-amber-700 text-sm">Bloques</span>
          </button>
          <button className="px-3 py-1 border border-slate-500  rounded-sm">
            <span className="text-slate-700 text-sm">Adoquines</span>
          </button>
        </div>
      </div>
      <form action="" className="flex flex-row gap-4 ">
        <section className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-sm">Area de pared (m2)</label>
            <input type="text" placeholder="Ingrese metros cuadrados" className="py-1 px-2 border border-slate-300 rounded-sm text-sm" />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-sm">Area de puertas (m2)</label>
            <input type="text" placeholder="Ingrese metros cuadrados" className="py-1 px-2 border border-slate-300 rounded-sm text-sm" />
          </div>
        </section>
        <section className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-sm">Area de ventanas (m2)</label>
            <input type="text" placeholder="Ingrese metros cuadrados" className="py-1 px-2 border border-slate-300 rounded-sm text-sm" />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="text-sm">Referencia de bloque</label>
            <select name="" id="" className="py-1 px-2 border border-slate-300 rounded-sm text-sm">
              <option value="1" className="text-sm">Bloque x</option>
              <option value="2" className="text-sm">Bloque y</option>
            </select>
          </div>
        </section>
      </form>
      <section className="w-full border  rounded-xl h-32 border-amber-500 mb-10 flex flex-col justify-between px-5 py-2 ">
        <span className="text-lg font-semibold">Resultado del cálculo</span>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col gap-2 ">
            <span className="text-sm ">Área neta</span>
            <span className="text-xl text-amber-500">0.00 m²</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-sm ">Ladrillos necesarios</span>
            <span className="text-xl text-amber-500">0</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-sm ">Área neta</span>
            <span className="text-xl text-amber-500">Precio total </span>
          </div>

        </div>
      </section>
    </DivScrollLeft>
  </section>
  )
}

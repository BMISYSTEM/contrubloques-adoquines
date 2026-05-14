    'use client'
    import Image from 'next/image'
    import React, { useState } from 'react'
    
    export const SeleccionRender = () => {
        const [render,setRender] = useState(1)
      return (
        <section className="w-full h-screen bg-white relative flex items-center justify-center"> 
            <Image src={render === 1 ? "/adoquin-p.png" :  "/adoquin-g.png" } width={1000} height={1000} alt="imagen de bloque" className="w-full h-full md:object-cover object-contain"/>
            <div className="absolute bottom-20 flex flex-wrap justify-center items-center gap-5 ">
              <button onClick={()=>setRender(1)} className={render === 1 ? "px-3 py-1 rounded bg-black text-white transition-all hover:opacity-80 cursor-pointer" :
                "px-3 py-1 rounded bg-slate-300 text-slate-800 transition-all hover:opacity-80 cursor-pointer"
              }>
                10 cm
              </button>
              <button onClick={()=>setRender(2)} 
              className={render === 2 ? "px-3 py-1 rounded bg-black text-white transition-all hover:opacity-80 cursor-pointer" :
                "px-3 py-1 rounded bg-slate-300 text-slate-800 transition-all hover:opacity-80 cursor-pointer"
              }>
                12 cm
              </button>
            </div>
          </section>
      )
    }
    
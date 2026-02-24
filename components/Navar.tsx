'use client'
import { LiquidGlass } from '@liquidglass/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export const Navar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])
  return (
    <>
    <section className="w-full fixed  top-0 flex items-center justify-center mt-2 z-50 ">
            <section className="md:w-5/6 w-full">
                <nav id="navegacion-desktop" className=" flex flex-row px-5 justify-between md:gap-2  w-full  h-15    z-50 rounded-[80px]">
                  <Link href={"/"}  id="logo-nav" className="hidden w-30 h-full md:flex items-center justify-center">
                    <Image src={"/logo.png"} alt="Logo contru bloques " width={100} height={100} className="object-contain" />
                  </Link>
                  <div id="opciones-nav" className="hidden md:flex w-full md:flex-row md:gap-10 items-center md:justify-center justify-between">
                    <Link href={"/quienes-somos"}>
                      <span className={pathname === "/" ?"text-slate-200 text-sm" : "text-slate-500 text-sm"}>Prefabricados</span>
                    </Link>
                    <Link href={"/#sect-productos"} >
                      <span className={pathname === "/" ?"text-slate-200 text-sm" : "text-slate-500 text-sm"}>Quienes somos</span>
                    </Link>
                    <Link href={"/#sect-productos"} >
                      <span className={pathname === "/" ?"text-slate-200 text-sm" : "text-slate-500 text-sm"}>Nuestro estandar</span>
                    </Link>
                  </div>
                    <div className="flex items-center gap-3">
                      <Link href={"/quienes-somos#contactenos"} className="hidden md:inline-flex bg-[#FFD230] h-10 items-center justify-center px-3 py-1 rounded-[80px] transition-all hover:opacity-80">
                        <span className="text-sm">Contactanos</span>
                      </Link>

                      <button
                        aria-label="Abrir menú"
                        className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20"
                        onClick={() => setOpen(true)}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </button>
                    </div>
                </nav>
            </section>
          </section>

          {open && (
            <div role="dialog" aria-modal="true" className="fixed inset-0 z-60 bg-black/95 flex flex-col">
              <div className="absolute top-4 right-4">
                <button aria-label="Cerrar menú" className="p-3 rounded-full bg-white/10 hover:bg-white/20" onClick={() => setOpen(false)}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <Link href={"/"} onClick={() => setOpen(false)} className="text-2xl text-white">Inicio</Link>
                <Link href={"/quienes-somos"} onClick={() => setOpen(false)} className="text-2xl text-white">Quienes somos</Link>
                <Link href={"/#sect-productos"} onClick={() => setOpen(false)} className="text-2xl text-white">Nuestros productos</Link>
                <Link href={"/#sect-productos"} onClick={() => setOpen(false)} className="text-2xl text-white">Nuestro estandar</Link>
                <Link href={"/quienes-somos#contactenos"} onClick={() => setOpen(false)} className="mt-4 bg-[#FFD230] px-6 py-2 rounded-full text-black font-medium">Contactanos</Link>
              </div>
            </div>
            )}
            </>
          )
}

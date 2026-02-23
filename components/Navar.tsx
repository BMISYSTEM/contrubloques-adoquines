'use client'
import { LiquidGlass } from '@liquidglass/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navar = () => {
  const pathname = usePathname()
  return (
    <section className="w-full fixed  top-0 flex items-center justify-center mt-2 z-50 ">
            <section className="md:w-5/6 w-full">
                <nav id="navegacion-desktop" className=" flex flex-row px-5 justify-between md:gap-2  w-full  h-15    z-50 rounded-[80px]">
                  <Link href={"/"}  id="logo-nav" className="hidden w-30 h-full md:flex items-center justify-center">
                    <Image src={"/logo.png"} alt="Logo contru bloques " width={100} height={100} className="object-contain" />
                  </Link>
                  <div id="opciones-nav" className=" w-full  flex flex-row md:gap-10 items-center md:justify-center justify-between">
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
                    <Link href={"/quienes-somos#contactenos"} className="bg-[#FFD230] h-10 items-center justify-center px-3 py-1 rounded-[80px] transition-all hover:opacity-80">
                      <span className="text-sm">Contactanos</span>
                    </Link>
                </nav>
            </section>
          </section>
  )
}

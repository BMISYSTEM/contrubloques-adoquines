import Link from 'next/link'
import React from 'react'
import { BsTelephonePlus } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FiMapPin } from 'react-icons/fi'
import { MdFacebook, MdOutgoingMail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'

export const Footer = () => {
  return (
    <footer className="w-full bg-[url(/fondofooter.png)] bg-cover object-cover h-screen relative snap-start z-[9999999999999999999999] ">
        <div className="w-full h-full flex flex-col bg-black/70 backdrop-blur-sm  items-center justify-center px-5">
          <div className="md:w-5/6 w-full md:h-full h-auto flex md:flex-row flex-col md:items-center   md:justify-between md:gap-0 gap-5 ">
              <div className="md:w-1/3 flex flex-col md:gap-5 gap-1 ">
                  <span className="md:text-2xl  text-xl font-semibold text-white ">Construbloques y Adoquines</span>
                  <span className="md:text-lg text-sm text-slate-300 ">fabricación y distribución de bloques y adoquines Vibroprensados, para la construcción basándonos en estándares de calidad y prestando un servicio oportuno a nuestros clientes.</span>
                  <div className="flex flex-row gap-5 ">
                    <button>
                      <MdFacebook size={30} color="orange"/> 
                    </button>
                    <button>
                      <RiInstagramFill  size={30} color="orange"/> 
                    </button>
                    <button>
                      <FaSquareXTwitter   size={30} color="orange"/> 
                    </button>
                  </div>
              </div>
              <div className="md:w-1/3 flex flex-col md:gap-5 gap-1 ">
                  <span className="md:text-2xl text-xl font-semibold text-white ">Enlaces rapidos </span>
                  <Link href={"/"}>
                    <span className="text-slate-300">Inicio</span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-slate-300">Productos</span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-slate-300">Calculadora</span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-slate-300">Promociones</span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-slate-300">Contacto</span>
                  </Link>
              </div>
              <div className="md:w-1/3 flex flex-col gap-5 ">
                  <span className="md:text-2xl text-xl font-semibold text-white ">Contacto</span>
                  <div className="flex flex-row gap-2 items-center">
                    <FiMapPin size={30} color="orange"/>  
                    <span className="text-slate-300">Calle 45 #23-67, Zona Industrial</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <BsTelephonePlus  size={30} color="orange"/>  
                    <span className="text-slate-300">+57 3184520627</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <MdOutgoingMail   size={30} color="orange"/>  
                    <span className="text-slate-300">info@construbloques.com</span>
                  </div>
              </div>
          </div>
          <span className="text-sm text-white my-2">&#169; Contrubloques&Adoquines</span>
          <span className="text-sm text-white md:my-2">Desarrollado por: Bayron Meneses By Syprods</span>
        </div>
      </footer>
  )
}

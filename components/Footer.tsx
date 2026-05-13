import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillTikTok } from 'react-icons/ai'
import { BsTelephonePlus } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FiMapPin } from 'react-icons/fi'
import { MdFacebook, MdOutgoingMail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'

export const Footer = () => {
  return (
    <footer className="w-full bg-[url(/fondofooter.png)] bg-cover object-cover  h-auto  relative snap-start  ">
      <div className="w-full h-full flex flex-col bg-black/70 backdrop-blur-sm py-10  items-center justify-center px-5">
        <div className="md:w-5/6 w-full md:h-full h-auto flex md:flex-row flex-col md:items-start   md:justify-between md:gap-0 gap-5 ">
          <div className="md:w-1/3 flex flex-col md:gap-5 gap-1 ">
            <span className="md:text-2xl  text-xl font-semibold text-white ">Construbloques y Adoquines</span>
            <p className='text-lg text-slate-200'>Producción y distribución de bloques de cemento, bloques estructurales y adoquines vibroprensados para proyectos residenciales, comerciales y urbanísticos en Cali y Valle del Cauca.</p>
            
            <div className="flex flex-row gap-5 ">
              <button>
                <RiInstagramFill size={30} color="orange" />
              </button>
              <button>
                <MdFacebook size={30} color="orange" />
              </button>
              <button>
                <AiFillTikTok size={30} color="orange" />
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col md:gap-5 gap-1 md:items-center items-start ">
            <span className="md:text-2xl text-xl font-semibold text-white ">Explorar más</span>
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
              <FiMapPin size={30} color="orange" />
              <span className="text-slate-300">Calle 45 #23-67, Zona Industrial</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <BsTelephonePlus size={30} color="orange" />
              <span className="text-slate-300">+57 3184520627</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdOutgoingMail size={30} color="orange" />
              <span className="text-slate-300">info@construbloques.com</span>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-6 mt-10'>
          <span className="text-sm text-white my-2">&#169; Contrubloques&Adoquines</span>
          <span className="text-sm text-white md:my-2">Desarrollado por:   <a href={"https:://syprods.com"} target='_blank'><span className='text-orange-300 border-b'>SyProd</span></a></span>
        </div>
      </div>
      <Link href={"/"} id="logo-nav" className="w-30 absolute bottom-5 right-5  md:flex items-center justify-center">
        <Image src={"/logo.png"} alt="Logo contru bloques " width={100} height={100} className="object-contain" />
      </Link>
    </footer>
  )
}

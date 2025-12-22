import Image from "next/image";
import Link from "next/link";
import { LiquidGlass } from '@liquidglass/react';
import 'animate.css';
import { Carrousel } from "@/components/inicio/Carrousel";
import { MdFacebook, MdHomeFilled, MdOutgoingMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { BsTelephonePlus } from "react-icons/bs";
import { Calculadora } from "@/components/inicio/Calculadora";
import { Productos } from "@/components/inicio/Productos";
import { PorqueNosotros } from "@/components/inicio/PorqueNosotros";
export default function Home() {
  return (
    <>
      <section className="w-full fixed  top-0 flex items-center justify-center mt-10 z-50 ">
        <section className="md:w-280">
          <LiquidGlass blur={5} contrast={1.1} brightness={1.05} saturation={1.1} className="animate__animated animate__fadeInDown w-full  flex flex-row  items-center justify-center">
            <nav id="navegacion-desktop" className=" flex flex-row px-5 justify-between gap-2  w-full  h-15    z-50 rounded-[80px]">
              <div id="logo-nav" className="w-30 h-full flex items-center justify-center">
                <Image src={"/logo.png"} alt="Logo contru bloques " width={100} height={100} className="object-contain" />
              </div>
              <div id="opciones-nav" className="w-120  flex flex-row gap-10 items-center justify-end">
                <Link href={"/quienes-somos"}>
                  <span className="text-slate-300">Quienes somos</span>
                </Link>
                <Link href={"/quienes-somos"} >
                  <span className="text-slate-300">Nuestros Productos</span>
                </Link>
                <Link href={"/quienes-somos"} className="bg-[#FFD230] px-3 py-1 rounded-[80px] transition-all hover:opacity-80">
                  <span>Contactanos</span>
                </Link>
              </div>
            </nav>
          </LiquidGlass>
        </section>
      </section>
      <header className="w-full bg-[url(/imagen-header.png)] bg-cover object-cover h-screen bg-black rounded-b-[80px] shadow-xl flex items-center justify-center px-5 ">
        <section className="md:w-280 w-full  h-full  ">
          <Image src={"/brand-header.png"} alt="Contru bloques  y adoquines, calidad y diseño" width={100} height={100}
            className="animate__animated animate__fadeInRight w-60 h-60 absolute bottom-30 right-60" />
        </section>
      </header>
      <main className="w-full  flex flex-col items-center justify-center mt-20  ">
        <Calculadora/>
        <Productos/>
        <section id="sect-banner" className="w-full h-screen mt-20">
          <Image src={"/PromoBanner.png"} alt="Banner de promociones" width={1000} height={1000} className="w-full h-full object-fill"/>
        </section>
        <section id="sect-nuestros-clientes" className="w-full h-screen bg-white ">
          <div className="w-full h-full flex flex-col items-center justify-center gap-5">
            <h4 className="text-2xl font-semibold">Nuestros clientes</h4>
            <span className="text-lg text-slate-600">Empresas que confían en nuestra calidad</span>
            <div className="flex flex-row gap-10 items-center mt-10 ">
              <Image src={"/emp1.png"} alt="empresa" width={100} height={100} className="w-32 h-32 object-contain"/>
              <Image src={"/emp2.png"} alt="empresa" width={100} height={100} className="w-32 h-32 object-contain"/>
              <Image src={"/emp3.png"} alt="empresa" width={100} height={100} className="w-32 h-32 object-contain"/>
              <Image src={"/emp4.png"} alt="empresa" width={100} height={100} className="w-32 h-32 object-contain"/>
              <Image src={"/emp5.png"} alt="empresa" width={100} height={100} className="w-32 h-32 object-contain"/>
              <Image src={"/emp6.png"} alt="empresa" width={100} height={100} className="w-32 h-32 object-contain"/>
            </div>
            <div className="flex flex-row gap-10 mt-10 items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-2xl font-bold text-amber-500">15+</span>
                <span>Años de experiencia</span>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-2xl font-bold text-amber-500">500+</span>
                <span>Clientes satisfechos</span>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-2xl font-bold text-amber-500">1M+</span>
                <span>Ladrillos producidos</span>
              </div>
            </div>
            <span>Más de 500 clientes satisfechos en toda la región</span>
          </div>
        </section>
        <section id="sect-resenas" className="w-full flex flex-col items-center justify-center px-5 mt-10  gap-10 ">
            <h5 className="text-2xl font-semibold ">Lo que nuestros clientes dicen</h5>
            <span className=" ">Descubre como nuestra empresa ha ayudado a empresas como la tuya </span>
            <Carrousel/>
        </section>
        <PorqueNosotros/>
      </main>
      <footer className="w-full bg-[url(/fondofooter.png)] bg-cover object-cover h-screen relative ">
        <div className="w-full h-full flex flex-col bg-black/70 backdrop-blur-sm  items-center justify-center ">
          <div className="md:w-280 h-full flex flex-row items-center   justify-between ">
              <div className="md:w-1/3 flex flex-col gap-5 ">
                  <span className="text-2xl font-semibold text-white ">Construbloques y Adoquines</span>
                  <span className="text-lg text-slate-300 ">fabricación y distribución de bloques y adoquines Vibroprensados, para la construcción basándonos en estándares de calidad y prestando un servicio oportuno a nuestros clientes.</span>
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
              <div className="md:w-1/3 flex flex-col gap-5 ">
                  <span className="text-2xl font-semibold text-white ">Enlaces rapidos </span>
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
                  <span className="text-2xl font-semibold text-white ">Contacto</span>
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
          <span className="text-sm text-white my-2">Desarrollado por: Bayron Meneses By Syprods</span>
        </div>
      </footer>
    </>
  );
}

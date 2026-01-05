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
import { Footer } from "@/components/Footer";
import { Navar } from "@/components/Navar";
export default function Home() {
  return (
    <section className="h-screen overflow-y-scroll overflow-x-hidden ">
      <Navar/>
      <header className="w-full bg-[url(/imagen-header.png)] bg-cover object-cover h-screen shadow-2xl shadow-white snap-start overflow-hidden  md:rounded-b-[80px] flex items-center justify-center relative ">
        <section className=" w-full  h-full bg-black/60 flex items-center justify-center  ">
        <div className="md:w-5/6">
          <Image src={"/brand-header.png"} alt="Contru bloques  y adoquines, calidad y diseño" width={100} height={100}
            className="animate__animated animate__fadeInRight w-60 h-60 absolute md:bottom-30 bottom-50 md:right-60 right-30" />
        </div>
        </section>
      </header>
      <main className="w-full  flex flex-col items-center justify-center md:mt-20   ">
        <Calculadora/>
        <Productos/>
        <section id="sect-banner" className="w-full h-screen mt-20 snap-start">
          <Image src={"/PromoBanner.png"} alt="Banner de promociones" width={1000} height={1000} className="w-full h-full md:object-fill object-contain"/>
        </section>
        <section id="sect-nuestros-clientes" className="w-full h-screen bg-white snap-start">
          <div className="w-full h-full flex flex-col items-center justify-center gap-5">
            <h4 className="md:text-2xl text-xl font-semibold">Nuestros clientes</h4>
            <span className="md:text-lg text-sm text-slate-600">Empresas que confían en nuestra calidad</span>
            <div className="flex md:flex-row flex-wrap gap-10 items-center justify-center mt-10 ">
              <Image src={"/emp1.png"} alt="empresa" width={100} height={100} className="md:w-32 w-24 md:h-32 h-24 object-contain"/>
              <Image src={"/emp2.png"} alt="empresa" width={100} height={100} className="md:w-32 w-24 md:h-32 h-24 object-contain"/>
              <Image src={"/emp3.png"} alt="empresa" width={100} height={100} className="md:w-32 w-24 md:h-32 h-24 object-contain"/>
              <Image src={"/emp4.png"} alt="empresa" width={100} height={100} className="md:w-32 w-24 md:h-32 h-24 object-contain"/>
              <Image src={"/emp5.png"} alt="empresa" width={100} height={100} className="md:w-32 w-24 md:h-32 h-24 object-contain"/>
              <Image src={"/emp6.png"} alt="empresa" width={100} height={100} className="md:w-32 w-24 md:h-32 h-24 object-contain"/>
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
        <section id="sect-resenas" className="w-full h-screen snap-start flex flex-col items-center justify-center px-5 mt-10  gap-10 ">
            <h5 className="text-2xl font-semibold ">Lo que nuestros clientes dicen</h5>
            <span className=" ">Descubre como nuestra empresa ha ayudado a empresas como la tuya </span>
            <Carrousel/>
        </section>
        <PorqueNosotros/>
      </main>
      <Footer/>
    </section>
  );
}

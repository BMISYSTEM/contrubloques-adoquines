import Image from "next/image";
import Link from "next/link";
import {LiquidGlass} from '@liquidglass/react';
import 'animate.css';
export default function Home() {
  return (
    <>
      <section className="w-full fixed  top-0 flex items-center justify-center mt-10 z-50 ">
        <section className="md:w-280">
          <LiquidGlass blur={5} contrast={1.1} brightness={1.05} saturation={1.1} className="animate__animated animate__fadeInDown w-full  flex flex-row  items-center justify-center">
            <nav id="navegacion-desktop" className=" flex flex-row px-5 justify-between gap-2  w-full  h-15    z-50 rounded-[80px]">
                <div id="logo-nav" className="w-30 h-full flex items-center justify-center">
                  <Image src={"/logo.png"} alt="Logo contru bloques " width={100} height={100} className="object-contain"/>
                </div>
                <div id="opciones-nav" className="w-120  flex flex-row gap-10 items-center justify-end">
                  <Link href={"/quienes-somos"}>
                    <span className="text-white">Quienes somos</span>
                  </Link>
                  <Link href={"/quienes-somos"} >
                    <span className="text-white">Nuestros Productos</span>
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
          className="animate__animated animate__fadeInRight w-60 h-60 absolute bottom-30 right-60"/>
        </section>
      </header>
      <section className="w-full h-screen  bg-green-500">
        
      </section>
      <footer className="w-full h-screen bg-blue-500">

      </footer>
    </>
  );
}

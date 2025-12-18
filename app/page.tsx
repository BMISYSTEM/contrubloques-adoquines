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
          className="animate__animated animate__fadeInRight w-60 h-60 absolute bottom-30 right-60"/>
        </section>
      </header>
      <main className="w-full flex flex-col items-center justify-center mt-20  ">
          <section id="sect-calculadora" className="md:w-280 w-full h-full flex items-center justify-center">
            <div  className=" w-160 h-150 bg-white rounded-[80px] shadow-2xl flex flex-col justify-between gap-2 px-5 py-2 ">
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
            </div>
          </section>
          <section id="sect-productos" className="md:w-280 w-full flex flex-col items-center justify-center gap-5 md:mt-20 " >
              <h3 className="text-3xl font-semibold text-white">Nuestros productos</h3>
              <span className="text-lg text-white ">Productos de cemento con la mas alta calidad para tus proyectos de construccion</span>
              <div className="flex flex-row gap-5 items-center justify-center mt-10">
                <div className="w-96 h-96 rounded-[80px] bg-slate-300 shadow-xl">
                    
                </div>

              </div>
          </section>
      </main>
      <footer className="w-full h-screen ">

      </footer>
    </>
  );
}

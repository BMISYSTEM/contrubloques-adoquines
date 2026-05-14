
import { Bloque3d } from "@/components/bloques/render-bloque/Bloque3d";
import { ImageCarousel } from "@/components/bloques/ImageCarousel";
import { ScrollRevealText } from "@/components/bloques/ScrollRevealText";
import { Navar } from "@/components/Navar";
import { LiquidGlass } from "@liquidglass/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "@/components/Footer";
import { BottonWhatsapp } from "@/components/BottonWhatsapp";
import { SeleccionRender } from "@/components/bloques/SeleccionRender";
import ScrollStopMotion from "@/components/ScrollStopMotion";


export const metadata: Metadata = {
  title: "Bloques de Cemento - Construbloques&Adoquines",
  description: "En Contribloques nos dedicamos a la fabricación de bloques y adoquines en cemento con altos estándares de calidad, resistencia y durabilidad. Nuestra misión es ofrecer soluciones confiables para la construcción, brindando productos seguros, uniformes y accesibles que aporten al desarrollo de viviendas, obras civiles y proyectos urbanos. Trabajamos con responsabilidad, innovación y compromiso para garantizar la satisfacción de nuestros clientes y el crecimiento de nuestra comunidad. ",
};
const page = () => {
  const iconos = [
    {
      title: 'Alta resistencia',
      icon: "/icon/Alta _resistencia.png"
    },
    {
      title: 'Medidas uniformes',
      icon: "/icon/Aplicacion.png"
    },
    {
      title: 'Mayor rendimiento',
      icon: "/icon/Mayor_rendimiento.png"
    },
    {
      title: 'Fácil instalación',
      icon: "/icon/Facil_instalacion.png"
    },
    {
      title: 'Menor desperdicio',
      icon: "/icon/Menor_desperdicio.png"
    },
    {
      title: 'Alineación precisa',
      icon: "/icon/Grosor.png"
    },
    {
      title: 'Calidad constante',
      icon: "/icon/Rendimiento.png"
    },
    {
      title: 'Entregas cumplidas',
      icon: "/icon/Entregas_programadas.png"
    },
  ]
  return (
    <>
      <BottonWhatsapp />
      <Navar />
      <section className="w-full h-[120vh] bg-black relative flex justify-center items-center">
        <div className="w-full h-full bg-black/60 absolute">

        </div>
        <div className="w-full absolute bottom-40 flex flex-col items-center justify-center gap-10">
          <h1 className="md:text-9xl text-6xl  text-white text-center font-bold ">Bloques</h1>
          <span className="text-xl m-0 p-0 text-white text-center">Desde $ 3,150</span>
          <a href="https://wa.link/okhbn0" target="_blank"
            className="px-4 py-2  bg-white rounded-[80px] text-sm font-bold hover:opacity-80 transition-all">
            <span>Programa tu pedido</span>
          </a>

        </div>
        <Image src={"/contenido/IMG_1_SESION_BLOQUES.png"}
          alt="Imagen de nuestro estandar "
          width={1080}
          height={1080}
          className="w-full h-full object-cover" />
      </section>
      <ScrollRevealText />
      <SeleccionRender />

      <section className="w-full bg-white py-20">
        <div className="w-full mx-auto  space-y-16">
          <div className="space-y-8 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Cotiza cantidad, ubicación y tiempos de entrega de tu proyecto</p>
            <h4 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Calcula material y elige el bloque ideal para tu obra
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://wa.link/okhbn0" target="_blank" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Cotiza por WhatsApp</Link>
              <Link href="/#sect-calculadora" className="inline-flex items-center justify-center rounded-full border border-slate-900 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Calcula material</Link>
            </div>
          </div>

          <div className="flex gap-10  items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-2 items-center justify-center gap-4">
              {iconos.map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-4 rounded-[28px]  p-5 ">
                  <Image src={feature.icon} alt="icono" width={200} height={200} className="w-10 h-10 " />
                  <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
          {/* carrousel  */}
          <div className="mt-10">
            <ImageCarousel />
            <h5 className="text-center text-2xl font-semibold">Presencia en obras de toda la region.</h5>
          </div>
          <section className="w-full h-screen bg-black relative flex justify-center items-end ">
            <div className="w-full h-full absolute bg-black/50"></div>
            <h6 className="md:text-8xl text-3xl absolute text-white text-center font-bold mb-10 ">Hecho para durar</h6>
            {/* <Image src={"/contenido/IMG_1_SESION_BLOQUES.png"}
              alt="Imagen de nuestro estandar "
              width={1080}
              height={1080}
              className="w-full h-full object-cover" /> */}
            <video
              playsInline
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/Video_1_sesion_bloques.MOV" type="video/mp4" />
            </video>
          </section>
        </div>
      </section>
      <section className="flex flex-col gap-5  text-center pb-20 items-center justify-center ">
        <h6 className="text-3xl font-bold">Diseñado para alineación precisa</h6>
        <p className="text-xl  max-w-120">Cada detalle responde a una función: precisión en los bordes, uniformidad en la forma y acabado consistente en cada pieza.</p>
      </section>
      <section className='w-full h-auto  pt-20 gap-1 pb-20 bg-white flex flex-col items-center '>

        <div className='flex md:flex-row flex-col gap-1 md:w-250 w-full  '>
          <div className='md:w-2/3 w-full   h-250 rounded-lg bg-gray-500'>
            <Image src={"/bloque1.png"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
          </div>
          <div className='md:w-1/3 w-full   h-96 md:sticky top-0 bg-gray-500 rounded-lg'>
            <Image src={"/bloque2.png"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-1 md:w-250 w-full '>
          <div className='md:w-1/3 w-full h-96  md:sticky top-0 bg-gray-500 rounded-lg'>
            <Image src={"/bloque3.png"} alt='estandares' width={1080} height={1080} className="w-full h-full object-cover" />
          </div>
          <div className='md:w-2/3 w-full h-250  rounded-lg bg-gray-500'>
          <video
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            preload="metadata"
          >
          <source src="/bloque4.mp4" type="video/mp4" />
        </video>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-10">
        <ScrollStopMotion/>
      </section>
      <section className="md:px-10 w-full h-120 flex md:flex-row flex-col  ">
        <div className="md:w-96 w-full md:h-full h-1/3 bg-black flex flex-col text-white px-5 py-10 gap-5">
          {/* texto */}
          <h6 className="text-xl font-semibold">¿Te gustaria visitarnos en planta?</h6>
          <p className="text-sm text-slate-100">Conoce el proceso, revisa el producto y llevate una muestra para tu proyecto</p>
        </div>
        <div className="w-full h-full">
          {/* mapa */}
          <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.932416982708!2d-76.56135832469378!3d3.366696851776152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a3455d660df1%3A0x997e30f1caba5483!2sBloques%20de%20Cemento%20Cali%20%2F%20Construbloques%20y%20Adoquines!5e0!3m2!1ses-419!2sco!4v1771867439443!5m2!1ses-419!2sco" width="600" height="450" loading="lazy"
          ></iframe>
        </div>
      </section>
      <section className="flex flex-col gap-5 mt-10 pb-10 text-center items-center justify-center  pt-10">
        <h6 className="text-3xl font-bold">¿No estas seguro de que medida es la adecuada para tu obra?</h6>
        <p className="text-xl  max-w-120">Te ayudamos a elegir la referencia adecuada Segun tu proyecto.</p>
        <a  href="https://wa.link/okhbn0" className="px-5 py-2 rounded-xl bg-black hover:opacity-80 cursor-pointer text-white transition-all">
          <span>Asesoria por Whatssap</span>
        </a>
      </section>
      <section className='w-full md:h-auto  pb-20 flex flex-wrap md:gap-50 gap-10 items-center justify-center  md:px-20 pt-20 bg-white '>
        {/* columna */}
        <div className='flex flex-col gap-3 justify-center '>
          <Image src={"/bloque-p.png"} alt="bloque " width={1000} height={1000} className="w-full h-40" />
          <span className='text-2xl font-semibold text-center'>10 cm</span>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/grosor.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Grosor:</span> 10 cm</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/uso.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Uso:</span> divisiones y cerramientos</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/tipo.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Tipo:</span> no estructural</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/rendimiento.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Rendimiento:</span> 12.5 und/m²</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/aplicacion.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Aplicación:</span> muros livianos</span>
          </div>
        </div>
        {/* columna */}
        <div className='flex flex-col gap-3 justify-center '>
          <Image src={"/bloque-m.png"} alt="bloque " width={1000} height={1000} className="w-full h-40" />
          <span className='text-2xl font-semibold text-center'>12 cm</span>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/grosor.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Grosor:</span> 12 cm</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/uso.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Uso:</span> vivienda general</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/tipo.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Tipo:</span> estructural</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/rendimiento.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Rendimiento:</span> 12.5 und/m²</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/aplicacion.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Aplicación:</span> muros principales</span>
          </div>
        </div>
        {/* columna */}
        <div className='flex flex-col gap-3 justify-center '>
          <Image src={"/bloque-g.png"} alt="bloque " width={1000} height={1000} className="w-full h-40" />
          <span className='text-2xl font-semibold text-center'>14 cm</span>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/grosor.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Grosor:</span> 14 cm</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/uso.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Uso:</span> mayor carga</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/tipo.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Tipo:</span> estructural reforzado</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/rendimiento.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Rendimiento:</span> 12.5 und/m²</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/icon/aplicacion.png"} alt="icono de grosor" width={100} height={100} className="w-15 " />
            <span><span className="text-lg font-semibold">Aplicación:</span> proyectos exigentes</span>
          </div>
        </div>
      </section>
      <section className="w-full h-screen bg-white items-center justify-center">
        <Bloque3d/>
      </section>
      <section className="w-full h-screen  overflow-hidden  ">
        <div className="w-full h-full bg-black/50 absolute"></div>
        <video
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/contenido/video_2_sesión_bloque.MOV" type="video/mp4" />
        </video>
      </section>
      <Footer />
    </>
  );
};

export default page;

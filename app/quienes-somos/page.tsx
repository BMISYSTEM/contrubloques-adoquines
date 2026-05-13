import { BottonWhatsapp } from "@/components/BottonWhatsapp";
import { DivScrollLeft } from "@/components/componenst-animate/DivScrollLeft";
import { DivScrollRigth } from "@/components/componenst-animate/DivScrollRigth";
import { DivScrollTop } from "@/components/componenst-animate/DivScrollTop";
import { Footer } from "@/components/Footer";
import { Navar } from "@/components/Navar";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { MdAddLocation, MdClear, MdEmail, MdFacebook, MdMap, MdOutlineSecurity, MdPhone, MdTimeline, MdTimer } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";

export const metadata: Metadata = {
  title: "Quienes somos - Construbloques&Adoquines",
  description: "En Contribloques nos dedicamos a la fabricación de bloques y adoquines en cemento con altos estándares de calidad, resistencia y durabilidad. Nuestra misión es ofrecer soluciones confiables para la construcción, brindando productos seguros, uniformes y accesibles que aporten al desarrollo de viviendas, obras civiles y proyectos urbanos. Trabajamos con responsabilidad, innovación y compromiso para garantizar la satisfacción de nuestros clientes y el crecimiento de nuestra comunidad. ",
};
const page = () => {
  return (
    <>
    <BottonWhatsapp/>
      <Navar />
      <section className="w-full h-[120vh] bg-black relative flex justify-center">
        <div className="w-full h-full bg-black/50 absolute"></div>
        <h1 className="md:text-8xl text-6xl absolute top-20 text-white px-5">Origen Estructural</h1>
        
        <Image src={"/contenido/IMG_1_SESION_QUIENES_SOMOS.png"}
          alt="Imagen de nosotros "
          width={1080}
          height={1080}
          className="w-full h-full object-cover" />
      </section>
      {/* quienes somos */}
      <section className="w-full bg-[#F3EFE9] h-auto pt-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Quienes somos</h2>
        <p className="text-center w-1/2 text-2xl ">
          Cada estructura tiene un punto de partida.<br />
          El nuestro nació de la convicción de que la calidad no es un detalle, es la base.
          <br />
          <br />
          Con trabajo constante, control en cada proceso y una búsqueda permanente por mejorar el acabado y la organización, construimos una forma distinta de hacer prefabricados: más precisa, más limpia, más responsable.

        </p>
        <div className="md:w-[80%] w-full h-96 bg-black mt-20">
          <video
            playsInline
            autoPlay
            muted
            loop
            controls={false}
            preload="metadata"
            className=" w-full h-full object-cover"
          >
            <source src="/video.MOV" type="video/mp4" />
          </video>
        </div>
        {/* continuacion de texto */}
        <p className="text-center w-1/2 text-2xl mt-20  mb-10">
          Desde 2022, la operación dio un paso hacia mayor capacidad técnica y control productivo.
          <br />
          La incorporación de nueva maquinaria y la estandarización de procesos permitió mejorar la precisión dimensional, optimizar tiempos de fabricación y fortalecer la consistencia en acabados.
          <br />
          <br />
          Hoy cada unidad producida responde a parámetros más rigurosos de alineación, resistencia y uniformidad, consolidando una estructura operativa más eficiente y confiable.
        </p>
      </section>
      <section className="w-full h-[140vh] bg-black relative flex justify-center">
        <div className="w-full h-full bg-black/50 absolute"></div>
        <h3 className="md:text-8xl text-6xl px-6  absolute top-20 text-white ">Estandares internos</h3>
        <Image src={"/contenido/IMG_2_QUIENES_SOMOS.webp"}
          alt="Imagen de nosotros "
          width={1080}
          height={1080}
          className="w-full h-full object-cover" />
        <h4 className="absolute bottom-40 right-10 text-white text-2xl w-60 border-b border-slate-200">Rigor en cada detalle</h4>
        <p className="absolute bottom-10 right-10 text-white text-xl w-60">Orden como metodo, Cumplimiento conciente, Evolucion Constante.</p>
      </section>
      <section className="w-full h-screen bg-black relative flex justify-center">
        <div className="w-full h-full bg-black/50 absolute"></div>
        <Image src={"/contenido/IMG_3_SESION_QUIENES_SOMOS.png"}
          alt="Imagen de nosotros "
          width={1080}
          height={1080}
          className="w-full h-full object-cover" />
      </section>
      <Footer />
    </>
  );
};

export default page;

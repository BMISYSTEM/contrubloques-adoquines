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
      <Navar />
      <section className="w-full h-[120vh] bg-red-500 relative flex justify-center">
        <h1 className="text-8xl absolute top-20 text-white ">Origen Estructural</h1>
        <Image src={"/header-nosotros.webp"}
          alt="Imagen de nosotros " 
          width={1080} 
          height={1080} 
          className="w-full h-full object-cover" />
      </section>
      {/* quienes somos */}
      <section className="w-full bg-[#F3EFE9] h-auto pt-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Quienes somos</h2>
        <p className="text-center w-1/2 text-2xl font-mono">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque doloremque quis delectus ut aperiam repellendus exercitationem natus blanditiis commodi ullam iure culpa consectetur, alias voluptas error quo! Harum, numquam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et, ab molestias a ex ducimus quos numquam odit dicta quo, sit adipisci architecto fuga quibusdam neque, minus exercitationem pariatur. Ad!</p>
        <div className="w-[80%] h-96 bg-red-500 mt-20">
          <video
            autoPlay
            muted
            loop
            className=" w-full h-full object-cover"
            preload="metadata"
          >
            <source src="/video.MOV" type="video/mp4" />
          </video>
        </div>
        {/* continuacion de texto */}
        <p className="text-center w-1/2 text-2xl mt-20 font-mono mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque doloremque quis delectus ut aperiam repellendus exercitationem natus blanditiis commodi ullam iure culpa consectetur, alias voluptas error quo! Harum, numquam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et, ab molestias a ex ducimus quos numquam odit dicta quo, sit adipisci architecto fuga quibusdam neque, minus exercitationem pariatur. Ad!</p>
      </section>
      <section className="w-full h-[140vh] bg-red-500 relative flex justify-center">
        <h3 className="text-8xl absolute top-20 text-white ">Estandares internos</h3>
        <Image src={"/nosotros2.webp"}
          alt="Imagen de nosotros " 
          width={1080} 
          height={1080} 
          className="w-full h-full object-cover" />
        <h4 className="absolute bottom-40 right-10 text-white text-2xl w-60 border-b border-slate-200">Rigor en cada detalle</h4>
        <p className="absolute bottom-10 right-10 text-white text-xl w-60">Orden como metodo, Cumplimiento conciente, Evolucion Constante.</p>
      </section>
      <Footer/>
    </>
  );
};

export default page;

import Image from "next/image";
import Link from "next/link";
import { LiquidGlass } from '@liquidglass/react';
import { Carrousel } from "@/components/inicio/Carrousel";
import { MdFacebook, MdHomeFilled, MdOutgoingMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { BsTelephonePlus } from "react-icons/bs";
import { Calculadora } from "@/components/inicio/Calculadora";
import { LogosCarrusel } from "@/components/inicio/LogosCarrusel";
import { ScrollRevealText } from "@/components/inicio/ScrollRevealText";
import { StickyVideoSection } from "@/components/inicio/StickyVideoSection";
import { Productos } from "@/components/inicio/Productos";
import { PorqueNosotros } from "@/components/inicio/PorqueNosotros";
import { Footer } from "@/components/Footer";
import { Navar } from "@/components/Navar";
import { ScrollRevealText2 } from "@/components/inicio/ScrollRevealText2";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BottonWhatsapp } from "@/components/BottonWhatsapp";
export default function Home() {
  return (
    <section className="h-auto overflow-x-hidden">
      <BottonWhatsapp/>
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          playsInline
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/video.MOV" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Navigation */}
        <Navar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start md:justify-center mt-[50%] md:mt-0 h-full px-12 md:px-16 lg:px-20">
          {/* Delivery Badge */}
          {/* <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-white text-sm font-medium">Entrega desde 10 días</span>
            </div> */}

          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight max-w-2xl " style={{ lineHeight: 0.8 }}>
            La Construcción
            <br />
            reinventada
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg md:text-2xl mb-12 max-w-xl font-light">
            Prefabricados de concreto y bloques estructurales diseñados para proyectos que exigen precisión, cumplimiento y continuidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex md:gap-6 gap-2">
            <Link href={"/#productos"} className="bg-white text-black md:px-8 text-center px-3 md:py-3  rounded-full font-semibold hover:bg-gray-100 transition">
              Descubrir Productos
            </Link>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="grid grid-cols-3 gap-1 px-12 md:px-16 lg:px-20 pb-10">
            <div className="flex flex-col">
              <div className="flex items-center   justify-center">
                <h3 className="text-white font-semibold">Producción organizada</h3>
              </div>
              <p className="text-gray-300 text-xs text-center">Capacidad de producción para proyectos con bloques de cemento y adoquines vibroprensados.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center   justify-center">
                <h3 className="text-white font-semibold">Entregas cumplidas</h3>
              </div>
              <p className="text-gray-300 text-xs text-center">Despachos programados en Cali y Valle del Cauca.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center   justify-center">
                <h3 className="text-white font-semibold">Precisión estructural</h3>
              </div>
              <p className="text-gray-300 text-xs text-center">Fabricación uniforme para proyectos residenciales y comerciales.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Calculadora />
      <Productos />
      <LogosCarrusel />
      <ScrollRevealText />
      <StickyVideoSection />
      <ScrollRevealText2 />
      <PorqueNosotros />

      <Footer />
    </section>
  );
}

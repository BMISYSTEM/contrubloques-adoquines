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
export default function Home() {
  return (
      <section className="h-auto overflow-x-hidden">
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
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-12 md:px-16 lg:px-20">
            {/* Delivery Badge */}
            {/* <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-white text-sm font-medium">Entrega desde 10 días</span>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-white text-6xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight max-w-2xl " style={{lineHeight:0.8}}>
              La Construcción
              <br />
              reinventada
            </h1>

            {/* Subheading */}
            <p className="text-white text-xl md:text-2xl mb-12 max-w-xl font-light">
                Conozca los bloques que combinaron resistencia, presicion y produccion a gran escala.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6">
              <Link href={"/#productos"} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Descubrir Productos
              </Link>
              <Link href={"/nuestro-servicio"} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Conocer más
              </Link>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="grid grid-cols-3 gap-8 px-12 md:px-16 lg:px-20 py-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 text-2xl">✓</span>
                  <h3 className="text-white font-semibold">Diseño premiado</h3>
                </div>
                <p className="text-gray-300 text-sm">Calidad excepcional</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-400 text-2xl">✓</span>
                  <h3 className="text-white font-semibold">Resistencia garantizada</h3>
                </div>
                <p className="text-gray-300 text-sm">Durabilidad comprobada</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400 text-2xl">✓</span>
                  <h3 className="text-white font-semibold">Disponible 24/7</h3>
                </div>
                <p className="text-gray-300 text-sm">Soporte constante</p>
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

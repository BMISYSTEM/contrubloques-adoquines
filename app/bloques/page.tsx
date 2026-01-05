import { Bloque3d } from "@/components/bloques/render-bloque/Bloque3d";
import { Navar } from "@/components/Navar";
import { LiquidGlass } from "@liquidglass/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title: "Bloques de Cemento - Construbloques&Adoquines",
  description: "En Contribloques nos dedicamos a la fabricación de bloques y adoquines en cemento con altos estándares de calidad, resistencia y durabilidad. Nuestra misión es ofrecer soluciones confiables para la construcción, brindando productos seguros, uniformes y accesibles que aporten al desarrollo de viviendas, obras civiles y proyectos urbanos. Trabajamos con responsabilidad, innovación y compromiso para garantizar la satisfacción de nuestros clientes y el crecimiento de nuestra comunidad. ",
};
const page = () => {
  return (
    <>
      <Navar />
      {/* render  */}
      <Bloque3d />
      {/* ficha tecnica  */}

      {/* componente header  */}
      {/* componenete main */}
    </>
  );
};

export default page;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Contrubloques",
  description: "En Contribloques nos dedicamos a la fabricación de bloques y adoquines en cemento con altos estándares de calidad, resistencia y durabilidad. Nuestra misión es ofrecer soluciones confiables para la construcción, brindando productos seguros, uniformes y accesibles que aporten al desarrollo de viviendas, obras civiles y proyectos urbanos. Trabajamos con responsabilidad, innovación y compromiso para garantizar la satisfacción de nuestros clientes y el crecimiento de nuestra comunidad. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}

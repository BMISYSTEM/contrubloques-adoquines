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

      <section className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
        <header className="w-full bg-[url(/imagen-header.png)] bg-cover object-cover h-screen snap-start  md:rounded-b-[80px] shadow-xl flex items-center justify-center relative ">
          <section className=" w-full  h-full bg-black/60 flex items-center justify-center  ">
            <div className="md:w-5/6">
              <Image
                src={"/brand-header.png"}
                alt="Contru bloques  y adoquines, calidad y diseño"
                width={100}
                height={100}
                className="animate__animated animate__fadeInRight w-60 h-60 absolute md:bottom-30 bottom-50 md:right-60 right-30"
              />
            </div>
          </section>
        </header>
        <section className="snap-start w-full md:h-screen flex md:flex-row flex-col items-center ">
          <DivScrollLeft className="md:w-1/2 md:h-3/4 w-full   rounded-r-[80px] md:mt-0 mt-20 overflow-hidden">
            <Image
              src={"/quienes-somos-1.png"}
              alt="Imagen de mision "
              width={1000}
              height={1000}
              className="w-full h-full object-center"
            />
          </DivScrollLeft>
          <div className="md:w-1/2  flex flex-col px-5 py-2 gap-5 ">
            <h1 className="text-2xl font-bold">
              Nuestra <span className="text-amber-300">Misíon</span>
            </h1>
            <div className="w-20 h-1 bg-amber-300"></div>
            <p className="text-lg text-white">
              En Contribloques nos dedicamos a la fabricación de bloques y
              adoquines en cemento con altos estándares de calidad, resistencia
              y durabilidad. Nuestra misión es ofrecer soluciones confiables
              para la construcción, brindando productos seguros, uniformes y
              accesibles que aporten al desarrollo de viviendas, obras civiles y
              proyectos urbanos. Trabajamos con responsabilidad, innovación y
              compromiso para garantizar la satisfacción de nuestros clientes y
              el crecimiento de nuestra comunidad.
            </p>
          </div>
        </section>
        <section className="snap-start w-full md:h-screen flex md:flex-row flex-col md:mt-0  items-center">
          <div className="md:w-1/2 w-full  flex flex-col px-5 py-2 gap-5 md:mt-0 mt-20 ">
            <h2 className="text-2xl font-bold">
              Nuestra <span className="text-amber-300">Visíon</span>
            </h2>
            <div className="w-20 h-1 bg-amber-300"></div>
            <p className="text-lg text-white">
              Para el año 2030, Contribloques será una empresa líder en la
              producción de bloques y adoquines en cemento en la región,
              reconocida por la calidad de sus productos, procesos sostenibles y
              servicio al cliente. Aspiramos a expandir nuestra capacidad
              productiva, incorporar nuevas tecnologías y convertirnos en un
              aliado estratégico para constructores, urbanistas y ciudadanos que
              buscan materiales confiables para construir un mejor futuro.
            </p>
          </div>
          <DivScrollRigth className="md:w-1/2 w-full md:h-3/4  rounded-l-[80px] overflow-hidden">
            <Image
              src={"/quienes-somos-2.png"}
              alt="Imagen de mision "
              width={1000}
              height={1000}
              className="w-full h-full object-center"
            />
          </DivScrollRigth>
        </section>
        <section className="snap-start w-full md:h-screen px-5 flex flex-col  items-center justify-center md:px-[10%] md:pt-[10%]  ">
          <h3 className="text-2xl font-semibold text-white md:mt-0 mt-20">Valores</h3>
          <div className="w-3/4 h-3/4 gap-5 flex flex-col  md:grid md:grid-cols-2 md:grid-rows-2 place-content-center place-items-center items-center justify-center ">
            <div className="w-72 h-40 px-5 py-5 flex flex-col gap-2 bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] columns-1 rounded-xl shadow-2xl ">
              <div className="flex flex-row gap-2  item-center">
                <SiCcleaner size={30} color="#05df72" />
                <span className="text-lg text-white">Sostenibilidad</span>
              </div>
              <p className="text-lg text-white">
                comprometidos con el medio ambiente y la sociedad
              </p>
            </div>
            <div className="w-72 h-40 px-5 py-5 flex  flex-col gap-2 bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] columns-2 rounded-xl shadow-2xl">
              <div className="flex flex-row gap-2  item-center">
                <GiLightBulb size={30} color="yellow" />
                <span className="text-lg text-white">Innovación</span>
              </div>
              <p className="text-lg text-white">
                comprometidos con el medio ambiente y la sociedad
              </p>
            </div>
            <div className="w-72 h-40 px-5 py-5 flex  flex-col gap-2 bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] columns-1 rounded-xl shadow-2xl">
              <div className="flex flex-row gap-2  item-center">
                <MdOutlineSecurity size={30} color="red" />
                <span className="text-lg text-white">Integridad</span>
              </div>
              <p className="text-lg text-white">
                Actuamos con integridad y transparencia{" "}
              </p>
            </div>
            <div className="w-72 h-40 px-5 py-5 flex  flex-col gap-2 bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] columns-2 rounded-xl shadow-2xl">
              <div className="flex flex-row gap-2  item-center">
                <FaClipboardCheck size={30} color="orange" />
                <span className="text-lg text-white">Calidad</span>
              </div>
              <p className="text-lg text-white">
                Buscamos la excelencia en lo que hacemos
              </p>
            </div>
          </div>
        </section>
        <section 
        className="snap-start w-full md:h-screen   flex flex-col gap-5 pt-10 items-center justify-center   "
        >
          <div className="flex flex-col md:mt-0 mt-20">
            <h4 className="text-2xl font-semibold">
              Nuestra <span className="text-amber-300">Historia</span>
            </h4>
            <div className="w-20 h-1 bg-amber-300"></div>
          </div>
          <div className="w-4/5">
            <p className="text-lg ">
              Contribloques nació con el propósito de brindar al sector de la
              construcción una alternativa confiable y accesible en materiales de
              concreto. La empresa comenzó como un pequeño proyecto familiar,
              dedicado a producir bloques en cemento de forma artesanal, siempre
              priorizando la calidad y el servicio cercano al cliente. Con el
              tiempo y gracias a la confianza de nuestros compradores, ampliamos
              nuestra capacidad productiva e incorporamos nuevas líneas como la
              fabricación de adoquines en cemento, expandiendo nuestra oferta para
              proyectos urbanísticos, residenciales e industriales. Hoy,
              Contribloques mantiene su esencia: compromiso, responsabilidad y
              mejora continua. Con cada bloque y adoquín que producimos,
              reafirmamos nuestro objetivo de ser parte fundamental del
              crecimiento y la construcción en nuestra región.
            </p>
          </div>
          <DivScrollTop className="w-full md:h-72 lg:h-96 ">
            <Image alt="imagen de nosotros" src={"/quienes-somos-3.png"} width={1000} height={1000} className=" w-full h-full object-center"/>
          </DivScrollTop>
        </section>
        <section
        id="contactenos"
        className="snap-start w-full md:h-screen   flex flex-col gap-5 pt-10 items-center justify-center   "
        >
          <div className="flex flex-col w-3/4 gap-10  items-center md:mt-0 mt-20">
            <h5 className="text-2xl font-semibold">Contacto</h5>
            <p className="text-center text-sm">Estamos aquí para responder a todas sus preguntas. Póngase en contacto con nosotros y un miembro de nuestro equipo se comunicará con usted a la brevedad.</p>
          </div>
          <div className="w-full flex md:flex-row flex-col-reverse pb-10 md:pb-0 gap-5 items-center justify-center ">
            <div className="md:w-1/4 w-full px-5 md:px-0 h-full flex items-center justify-center">
              <form action=""  className="w-full h-full flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre-ip">Nombre</label>
                  <input id="nombre-ip" type="text" placeholder="Su nombre" className="bg-black rounded-lg px-3 py-2 text-slate-100 text-sm placeholder:text-slate-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="correo-ip">Correo electronico</label>
                  <input id="correo-ip" type="email" placeholder="Su correo electronico" className="bg-black rounded-lg px-3 py-2 text-slate-100 text-sm placeholder:text-slate-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="mensaje-area">Mensaje</label>
                  <textarea name="mensaje-area" id="mensaje-area" rows={4} className="bg-black rounded-xl"></textarea>
                </div>
                <button className="px-5 py-1 flex items-center justify-center bg-amber-300 rounded-xl cursor-pointer hover:opacity-90">
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
            <div className="md:w-1/4 w-full px-5 md:mx-0 mx-5  h-full bg-black flex flex-col py-5 gap-5 md:rounded-xl ">
              <h5 className="text-amber-300">Informacion de contacto</h5>
              <div className="flex flex-row gap-2 items-center ">
                <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <MdAddLocation size={30} color="orange"/>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold text-sm">Direccion</span>
                  <p className="text-white text-xs">Av. Principal 123, Ciudad</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <MdPhone size={30} color="orange"/>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold text-sm">Telefono</span>
                  <p className="text-white text-xs">+57 5555555555</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <MdEmail size={30} color="orange"/>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold text-sm">Correo electronico</span>
                  <p className="text-white text-xs">contrubloques@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <MdTimer size={30} color="orange"/>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold text-sm">Horario de atencion</span>
                  <p className="text-white text-xs">Lunes a Viernes 9:00 am - 6:00 Pm</p>
                  <p className="text-white text-xs">Sabado 10:00 Am - 2:00 Pm</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <button className="bg-gray-700 p-2 rounded-full">
                  <BsFacebook size={20} color="white"/>
                </button>
                <button className="bg-gray-700 p-2 rounded-full">
                  <BsTwitterX size={20} color="white"/>
                </button>
                <button className="bg-gray-700 p-2 rounded-full">
                  <BsInstagram size={20} color="white"/>
                </button>
                <button className="bg-gray-700 p-2 rounded-full">
                  <BsLinkedin size={20} color="white"/>
                </button>

              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default page;

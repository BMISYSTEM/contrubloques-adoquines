'use client'
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import Image from 'next/image';
import { DivScrollLeft } from '@/components/componenst-animate/DivScrollLeft';
import { DivScrollTop } from '@/components/componenst-animate/DivScrollTop';
import { DivScrollRigth } from '@/components/componenst-animate/DivScrollRigth';
import { LiquidGlass } from '@liquidglass/react';
import Link from 'next/link';
import { MdCheck, MdEmail, MdWhatsapp } from 'react-icons/md';
import { Footer } from '@/components/Footer';


export const Adoquines3d = () => {
  const images = [
    "/bloque-g1.png",
    "/bloque-g2.png",
    "/bloque-g3.png",
    "/bloque-g4.png",
  ]
  const glbs = [
    "adoquin-rojo.glb",
    "adoquin-amarillo.glb",
    "adoquin-negro.glb",
  ]
  const [open, setOpen] = useState(false)
  const [imageSelect,setImagenSelect] = useState(0)
  const [valorScroll, setValorScroll] = useState(0)
  const [move, setMove] = useState(false);
  const [glbSelect,setGlbSelect] = useState(0)
  const containerRef = useRef<HTMLElement | null>(null)
  const scrollY = useRef(0);
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleScroll = () => {
      scrollY.current = el.scrollTop;
      setValorScroll(el.scrollTop)
    };
    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, []);

  useEffect(()=>{
    if(valorScroll < 1300){
      setMove(false)
    }
  },[valorScroll])


    const toggle = (pocicion:number) => {
      setImagenSelect(pocicion)
    if ('startViewTransition' in document) {
      // @ts-ignore
      document.startViewTransition(() => {
        setOpen(!open)
      })
    } else {
      setOpen(!open)
    }
  }
  return (
    <>

  <div
    className="fixed inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    }}
  />
      {!move && (
          <Canvas
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            camera={{ position: [0, 3, 8], fov: 45 }}>
            <ambientLight intensity={1} />
            {/* <pointLight position={[10, 10, 10]} /> */}
            {/* <OrbitControls/> */}
            {/* <OrbitControls enableZoom={false} enableRotate={false}
            enablePan={false} /> */}
            <Scene scrollY={valorScroll} move={move} glbRute={glbs[glbSelect]} />
          </Canvas>
        )}
      <section ref={containerRef}     className="
                    relative
                    h-screen
                    overflow-y-scroll
                    overflow-x-hidden
                    
                    scroll-smooth
                    z-10
                  ">
          
          <header className='w-full h-screen flex flex-col items-center pt-30  gap-2  snap-start '>
            <DivScrollTop className='flex flex-col gap-5 items-center absolute md:left-50 left-5 md:top-[40%] top-[20%] bg-gray-400 px-1 py-3 rounded-full'>
              <button onClick={()=>setGlbSelect(0)} className=' w-10 h-10 flex items-center justify-center rounded-full bg-orange-500  gap-2'>
                <MdCheck size={25} color='white' className={glbSelect === 0 ? "" : "hidden"}/>
              </button>
              <button onClick={()=>setGlbSelect(1)} className='w-10 h-10 rounded-full  bg-amber-500 flex items-center justify-center gap-2'>
              <MdCheck size={25} color='white' className={glbSelect === 1 ? "" : "hidden"}/>
              </button>
              <button onClick={()=>setGlbSelect(2)} className='w-10 h-10 rounded-full  bg-slate-600 flex items-center justify-center gap-2'>
              <MdCheck size={25} color='white' className={glbSelect === 2 ? "" : "hidden"}/>
              </button>
            </DivScrollTop>
            <DivScrollRigth className='absolute md:left-[33%] left-0 md:rotate-0 rotate-90   top-[60%] md:scale-y-100  scale-y-[-1] md:top-[30%]'>
              <Image title='flecha' alt='flecha' src={"/flecha.png"} width={100} height={100}
                className=' w-40 ' />
            </DivScrollRigth>
            <DivScrollLeft className='w-40 absolute md:left-[30%] left-5 bottom-5 md:top-[40%]'>
              <span className=''>
                 Adoquín peatonal Dimensiones ( W,H,L) 6x10x20 Cm Peso aprox: 2,5-3
              </span>
            </DivScrollLeft>
          </header>
          <section className='w-full h-screen snap-start flex flex-col justify-center '>
            <DivScrollLeft className='absolute md:px-10 px-2  w-[40%] h-96 bg-amber-300 rounded-r-[80px] flex flex-col items-center gap-5  justify-center '>
              <h1 className='md:text-3xl text-sm font-semibold uppercase text-slate-700'>Productos con <br></br> <span className='md:text-7xl text-lg font-bold'>Calidad</span> <br></br> y durabilidad </h1>
              <p className='md:text-lg text-xs font-semibold'>
 Este adoquín de 6cm en concreto es una opción perfecta para sus obras residenciales y comerciales. Diseñado para estacionamientos, terrazas y patios. Además de obtener una reducción de tiempo, su instalación es de fácil terminado por lo que no requiere procesos térmicos ni químicos                </p>
            </DivScrollLeft>
          </section>
          <section className='w-full h-screen relative flex flex-col items-center justify-center snap-start '>
            {valorScroll >= 1300 && (
              <DivScrollTop className='absolute top-[20%] '>
                <button onClick={() => setMove(!move)} className='border border-slate-300  px-5 py-2 rounded-sm backdrop-blur-md shadow-xl transition-all hover:bg-[#FFD230] cursor-pointer '>Mover libre </button>
              </DivScrollTop>
            )}
            {move &&  (
              <Canvas
                className=' rounded-sm  backdrop-blur-lg hover:shadow-sm transition-all hover:shadow-[#FFD230]'
                style={{
                  width: "70%",
                  height: "20rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "transparent"
                }}
                camera={{ position: [0, 5, 8], fov: 45 }}>
                <ambientLight intensity={1} />
                <OrbitControls enableZoom={true} enableRotate={true}
                  enablePan={true} />
                <Scene scrollY={valorScroll} move={move} glbRute={glbs[glbSelect]}  />
              </Canvas>
            )}
          </section>
          <section className='w-full h-screen flex items-center bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] justify-center snap-start '>
            <div className='md:w-5/6 w-full h-screen flex flex-col gap-10 items-center justify-center'>
                <h2 className='md:text-3xl text-lg font-semibold'>Ficha tecnica</h2> 
                <div className='w-full flex items-center justify-center md:px-0 px-5  '>
                  <table className='md:w-1/2 w-full  rounded-3xl overflow-hidden shadow-2xl'>
                    <thead>
                      <tr className='bg-[#FFD230] '>
                        <th className='font-bold py-4 text-left px-5 '>Propiedad</th>
                        <th className='font-bold py-4 text-left px-5 '>Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Referencia</td>
                          <td className='px-5  py-3 text-left'>CB-1039</td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Altura</td>
                          <td className='px-5  py-3 text-left'>19 cm</td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Ancho</td>
                          <td className='px-5  py-3 text-left'>10 cm</td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Fondo</td>
                          <td className='px-5  py-3 text-left'>39 cm </td>
                        </tr>
                        <tr className='border-b border-slate-300 bg-white '>
                          <td className='px-5  py-3 text-left'>Peso</td>
                          <td className='px-5  py-3 text-left'>7.5 Kg</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left font-bold' colSpan={2}>Caracteristicas adiccionales:</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Resistencia a la compresion: 4.0 MPa</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Absorcion de agua: {"<8%"}</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Material: Cemento Portland y agregados seleccionados</td>
                        </tr>
                        <tr className=' bg-slate-100 '>
                          <td className='px-5  py-1 text-left' colSpan={2}>Aplicacion: Muros estructuras y divisorios </td>
                        </tr>
                    </tbody>
                  </table>
                </div>

            </div>
          </section>
          <section className='w-full h-screen flex items-center bg-[linear-gradient(-45deg,#B5BDBB_0%,#3C4642_100%)] justify-center snap-start '>
            <div className='md:w-5/6 w-full h-screen flex flex-col gap-10 items-center justify-center md:px-0 px-5'>
                <h3 className='md:text-3xl text-lg font-semibold text-white'>Producto Instalado</h3> 
                <Image width={1000} height={1000} alt='Imagen de producto instalado' title='Producto instalado '
                src={glbSelect === 0 ? "/adoquines-rojo-instalado.jpg" : glbSelect === 1 ? "/adoquines-amarillo-instalado.avif" : "/adoquines-negro-instalados.jpg"} className='w-200 h-3/5  object-contain'/>
            </div>
          </section>
          <section className='w-full h-screen flex items-center  bg-[#B5BDBB]  justify-center snap-start '>
            <div className='md:w-280 w-full h-screen flex flex-col gap-10 items-center justify-center relative md:px-0 px-5'>
                <h3 className='md:text-3xl text-lg font-semibold text-white'>Galeria</h3> 
                {open ? (
                  <div onClick={()=>toggle(0)} style={{viewTransitionName:"image-zoom"}} className='flex items-center justify-center transition-transform fixed inset-0 z-50'>
                      <Image  width={5000} height={5000} alt='Imagen de producto instalado' title='Producto instalado '
                      className='w-280 h-1/2 md:object-center object-contain ' 
                      src={images[imageSelect]} />
                  </div>
                ): (
                  <div className='grid grid-cols-4 grid-rows-2 gap-2 w-full h-2/3 '>
                    <DivScrollLeft className='w-full h-full col-span-2'>
                      <button onClick={()=>toggle(0)} className='w-full h-full cursor-pointer '>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-rojo-instalado.jpg"} className='w-full h-full object-center '  style={{viewTransitionName:"image-zoom"}}
                        />
                      </button>
                    </DivScrollLeft>
                    <DivScrollRigth className='w-full h-full col-span-2'>
                      <button onClick={()=>toggle(1)} className='w-full h-full cursor-pointer'>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-combinados.jpg"} className='w-full h-full object-center '
                      />
                      </button>
                    </DivScrollRigth>
                    <DivScrollTop className='w-full h-full '>
                      <button onClick={()=>toggle(2)} className='w-full h-full cursor-pointer'>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-negro-instalados.jpg"} className='w-full h-full object-center '
                      />
                      </button>
                    </DivScrollTop>
                    <DivScrollLeft className='w-full h-full col-span-3 '>
                      <button onClick={()=>toggle(3)} className='w-full h-full cursor-pointer'>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-amarillo-instalado.avif"} className='w-full h-full object-center '
                      />
                      </button>
                    </DivScrollLeft>
                  </div>
                )}

            </div>
          </section>
          <section className='snap-start w-full h-screen flex flex-col gap-10  items-center justify-center bg-[#B5BDBB] md:px-0 px-5  '>
                <h5 className='text-3xl font-semibold  text-center'>¿ Listo para comenzar su proyecto ? </h5>
                <p className='text-slate-600 text-center'>Contáctenos hoy mismo para obtener asesoramiento personalizado y cotizaciones para su proyecto de construcción. </p>
                <div className='flex flex-row gap-5 items-center justify-center '>
                  <button className='px-5 py-2 rounded-sm bg-green-500 transition-all hover:opacity-80 flex flex-row  gap-5'>
                    <MdWhatsapp size={20} color='white'/>
                    <span className='md:text-sm text-xs text-white'>Contactar por WhatsApp</span>
                  </button>
                  <button className='px-5 py-2 rounded-sm bg-slate-800 transition-all hover:opacity-80 flex flex-row  gap-5'>
                    <MdEmail size={20} color='white'/>
                    <span className='md:text-sm text-xs text-white'>Mas información</span>
                  </button>
                </div>
          </section>
          <section className='w-full h-screen flex items-center  bg-[#B5BDBB]  justify-center snap-start '>
            <div className='md:w-280 w-full h-screen flex flex-col gap-10 items-center justify-center relative md:px-0 px-5 '>
                <h3 className='text-3xl font-semibold text-black'>Caracteristicas</h3> 
                {open ? (
                  <div onClick={()=>toggle(0)} style={{viewTransitionName:"image-zoom"}} className='flex items-center justify-center transition-transform fixed inset-0 z-50'>
                      <Image  width={5000} height={5000} alt='Imagen de producto instalado' title='Producto instalado '
                      className='w-280 h-160 object-center ' 
                      src={images[imageSelect]} />
                  </div>
                ): (
                   <div className='grid grid-cols-4 grid-rows-2 gap-2 w-full h-2/3 '>
                    <DivScrollLeft className='w-full h-full col-span-2'>
                      <button onClick={()=>toggle(0)} className='w-full h-full cursor-pointer '>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-rojo-instalado.jpg"} className='w-full h-full object-center '  style={{viewTransitionName:"image-zoom"}}
                        />
                      </button>
                    </DivScrollLeft>
                    <DivScrollRigth className='w-full h-full col-span-2'>
                      <button onClick={()=>toggle(1)} className='w-full h-full cursor-pointer'>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-combinados.jpg"} className='w-full h-full object-center '
                      />
                      </button>
                    </DivScrollRigth>
                    <DivScrollTop className='w-full h-full '>
                      <button onClick={()=>toggle(2)} className='w-full h-full cursor-pointer'>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-negro-instalados.jpg"} className='w-full h-full object-center '
                      />
                      </button>
                    </DivScrollTop>
                    <DivScrollLeft className='w-full h-full col-span-3 '>
                      <button onClick={()=>toggle(3)} className='w-full h-full cursor-pointer'>
                        <Image width={500} height={500} alt='Imagen de producto instalado' title='Producto instalado '
                        src={"/adoquines-amarillo-instalado.avif"} className='w-full h-full object-center '
                      />
                      </button>
                    </DivScrollLeft>
                  </div>
                )}

            </div>
          </section>
        <Footer/>
      </section>
    </>
  )
}



export function CameraController({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const { camera } = useThree();

  useFrame(() => {
    const s = scrollY.current;
    // Suave inclinación de la cámara según scroll
    camera.position.y = 3 + s * 0.002;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });

  return null;
}
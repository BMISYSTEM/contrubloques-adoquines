import { Footer } from '@/components/Footer'
import { Navar } from '@/components/Navar'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <Navar />
            <section className='w-full md:h-screen min-h-screen bg-linear-to-b  from-black/20 to-transparent flex flex-col bg-white gap-5 md:justify-center  px-5 '>
                <h1 className='text-4xl font-bold md:mt-0 mt-30 '>Contacto</h1>
                <p>
                    ¿tienes dudas sobre tu obra o necesitas apoyo con tu pedido?<br />
                    Nuestro equipo está listo para ayudarte a elegir, cotizar y coordinar tu entrega de forma clara y rápida.
                </p>
                <div className='flex md:flex-row flex-col gap-2 justify-between absolute bottom-10 md:px-10 px-2'>
                    <div className='flex flex-col max-w-96 gap-5'>
                        <h2 className='text-xl font-bold'>Solicitar cotización</h2>
                        <p>
                            ¿estás iniciando tu proyecto?<br />
                            Recibe precios según cantidad, ubicación y tiempos de entrega.
                        </p>
                    </div>
                    <div className='flex flex-col max-w-96 gap-5'>
                        <h2 className='text-xl font-bold'>Seguimiento de pedido</h2>
                        <p>
                            ¿ya realizaste tu pedido?<br />
                            Consulta estado, tiempos de entrega o cualquier novedad de tu solicitud.
                        </p>
                    </div>
                    <div className='flex flex-col max-w-96 gap-5'>
                        <h2 className='text-xl font-bold'>Asesoría técnica</h2>
                        <p>
                            ¿no sabes qué material necesitas?<br />
                            Te ayudamos a elegir la referencia ideal según tu tipo de obra.
                        </p>
                    </div>
                </div>
            </section>
            <section className='mt-5 h-screen flex flex-col '>
                <div className='w-full h-1/2 '>
                    <Image alt='imagen de contactenos' width={10080} height={10080} src={"/contenido/IMG_2_SESION_CONTACTO.png"} className='w-full h-full object-contain' />
                </div>
                <div className='flex md:flex-row flex-col gap-2 h-1/2  '>
                    <div className='w-full h-full '>
                        <Image alt='imagen de contactenos' width={10080} height={10080} src={"/contenido/IMG_2_SESION_CONTACTO.png"} className='w-full h-full object-contain' />

                    </div>
                    <div className='md:w-1/2 w-full h-full '>
                        <Image alt='imagen de contactenos' width={10080} height={10080} src={"/contenido/IMG_2_SESION_CONTACTO.png"} className='w-full h-full object-contain' />
                    </div>
                </div>

            </section>
            <section className='md:px-10 px-2 flex flex-col gap-5 mt-10 '>
                <h3 className='text-3xl font-bol text-center'>Preguntas frecuentes</h3>
                <details className='flex flex-col gap-5'>
                    <summary className='text-xl font-semibold'>¿qué tipo de bloque es adecuado para mi proyecto?</summary>
                    <p>Depende del tipo de obra y del uso estructural. <br />
                        Para muros portantes recomendamos bloque estructural (12 o 14, según cálculo).<br />
                        Para divisiones internas puede utilizarse bloque 10 o medio bloque.<br />
                        Si tienes dudas, nuestro equipo puede orientarte según tu plano o necesidad específica.</p>
                </details>
                <details className='flex flex-col gap-5'>
                    <summary className='text-xl font-semibold'>¿hacen envíos a toda la región?</summary>
                    <p>Realizamos despachos programados en cali y municipios cercanos del valle del cauca.<br />
                        Coordinamos rutas según volumen y ubicación del proyecto.<br />
                        Nuestro equipo confirma previamente horarios y condiciones de entrega para garantizar cumplimiento.</p>
                </details>
                <details className='flex flex-col gap-5'>
                    <summary className='text-xl font-semibold'>¿cómo se calcula la cantidad necesaria por metro cuadrado?</summary>
                    <p>
                        El rendimiento promedio es de aproximadamente 12.5 unidades por metro cuadrado (según referencia).<br />
                        Sin embargo, puede variar dependiendo del diseño y desperdicio estimado.<br />
                        Te ayudamos a calcular la cantidad adecuada para optimizar costos y evitar faltantes.
                    </p>
                </details>
                <details className='flex flex-col gap-5'>
                    <summary className='text-xl font-semibold'>¿cuál es el tiempo de entrega?</summary>
                    <p>
                        Los tiempos de entrega dependen del volumen solicitado y la programación logística.<br />
                        En la mayoría de los casos trabajamos con despachos coordinados previamente para evitar retrasos en obra. <br />
                        Nuestro objetivo es cumplir con los tiempos pactados.<br />
                    </p>
                </details>
                <details className='flex flex-col gap-5'>
                    <summary className='text-xl font-semibold'>¿manejan diferentes resistencias estructurales?</summary>
                    <p>
                        Sí. Nuestros bloques están fabricados bajo procesos controlados que garantizan resistencia estructural. <br />
                        Si tu proyecto requiere especificaciones técnicas particulares, podemos orientarte sobre la mejor opción.
                    </p>
                </details>
                <details className='flex flex-col gap-5'>
                    <summary className='text-xl font-semibold'>¿puedo solicitar una cotización sin compromiso?</summary>
                    <p>
                        Claro que sí. <br />
                        Puedes solicitar asesoría y cotización sin ningún compromiso. <br />
                        Te brindamos información clara sobre precios, cantidades y tiempos de entrega para que tomes una decisión informada.
                    </p>
                </details>
            </section>
            <Footer />
        </>
    )
}

export default page
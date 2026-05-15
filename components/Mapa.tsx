'use client'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'


export const Mapa = () => {
    return (
        <section className="md:px-10 w-full overflow-hidden  md:h-140 h-screen flex md:flex-row flex-col  ">
            <div className="md:w-96 w-full overflow-hidden md:h-full h-full bg-black flex flex-col text-white px-5 py-10 gap-5">
                <div className='md:w-100  items-start absolute px-10 flex flex-col gap-2 '>
                    <span className='text-xl uppercase text-amber-500'>Nuestra planta</span>
                    <span className='md:text-2xl text-xl font-semibold text-white '>Producción <br /> que construye <br /> confianza <span className='text-amber-500'>.</span></span>
                    <span className=' text-white'>Tecnología, control y experiencia <br />para entregar prefabricados de<br /> alta calidad en cada proyecto.</span>
                    <div className='w-20 h-0.5 bg-amber-500'></div>
                    <div className='flex flex-row gap-5 mt-2 items-center  '>
                        <MapPin size={30} color='orange' />
                        <div className='flex flex-col gap-2 '>
                            <span className='text-lg font-semibold text-white'>La Buitrera, Cali</span>
                            <span className='text-slate-200'>Valle del Cauca, Colombia</span>
                        </div>
                    </div>
                    <div className='mt-10 flex md:flex-col flex-col gap-5 '>
                        <button onClick={() => {
                            window.open("https://maps.app.goo.gl/Bvh6b8ZnfapyaqbS9", "_blanck")
                        }} className='px-5 py-2 flex flex-row gap-5 items-center bg-[#FFD230] rounded-2xl'>
                            <ArrowRight size={20} />
                            <span>Abrir Ubicación</span>
                        </button>
                        <button onClick={() => {
                            window.open("https://wa.link/s33z6v", "_blanck")
                        }} className='px-5 py-2 flex flex-row gap-5 items-center  rounded-2xl'>
                            <Calendar size={20} color='white' />
                            <span className='text-white'>Agendar visita</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                {/* mapa */}
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.932416982708!2d-76.56135832469378!3d3.366696851776152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a3455d660df1%3A0x997e30f1caba5483!2sBloques%20de%20Cemento%20Cali%20%2F%20Construbloques%20y%20Adoquines!5e0!3m2!1ses-419!2sco!4v1771867439443!5m2!1ses-419!2sco" width="600" height="450" loading="lazy"
                ></iframe>
            </div>
        </section>
    )
}

'use client'

import Link from 'next/link'
import { FiZap, FiArrowRight, FiMove } from 'react-icons/fi'

export const StickyVideoSection = () => {
  return (
    <div className="relative">
      {/* Video Background - Fixed */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-50 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/video.MOV" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Section - Scrolls over video */}
      <div className="relative z-10">
        <div className='h-screen'></div>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24">
          {/* Tag */}
          <p className="text-sm text-yellow-400 font-semibold mb-6">Nuestras características</p>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-12 leading-tight max-w-3xl">
            No es solo producción es sistema.
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-4 border border-white/20">
                <FiMove className="text-white text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Escala industrial</h3>
              <p className="text-gray-200 text-sm">
                Múltiples referencias para cada proyecto y necesidad
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-4 border border-white/20">
                <FiZap className="text-white text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Control de calidad</h3>
              <p className="text-gray-200 text-sm">
                Calidad garantizada en cada bloque y adoquín
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-4 border border-white/20">
                <FiArrowRight className="text-white text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Flujo de logistica eficiente</h3>
              <p className="text-gray-200 text-sm">
                Desde 10 días a tu obra
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-center max-w-2xl mb-12 text-lg">
          Contamos con amplia experiencia en la industria, proporcionando materiales de construcción confiables para proyectos residenciales y comerciales
          </p>

          {/* CTA Button */}
          <Link href={"https://api.whatsapp.com/message/25MC5Y67LNMXJ1?autoload=1&app_absent=0"} className="bg-white hover:bg-gray-100 text-slate-900 px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
            Solicitar Cotización
          </Link>
          <p className='mt-5 text-slate-200'>Dejanos tus datos y te contactamos </p>
          <a className='text-blue-200 border-b' href="https://mail.google.com/mail/?view=cm&to=destinatario@gmail.com&su=Asunto&body=Mensaje" target="_blank">
            Enviar correo
          </a>
        </div>
      </div>
    </div>
  )
}

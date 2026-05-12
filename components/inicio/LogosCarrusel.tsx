'use client'

import Image from "next/image"

const companies = [
  { id: 1, name: '', logo: '/clientes/0c14acef-a042-4a23-a1d6-c619191438c2.jpg', subtitle: '' },
  { id: 2, name: '', logo: '/clientes/IMG_0784.JPG', subtitle: '' },
  { id: 3, name: '', logo: '/clientes/IMG_0785.JPG', subtitle: '' },
  { id: 4, name: '', logo: '/clientes/IMG_0786.JPG', subtitle: '' },
  { id: 5, name: '', logo: '/clientes/IMG_0787.JPG', subtitle: '' },
  { id: 6, name: '', logo: '/clientes/IMG_0788.JPG', subtitle: '' },
  { id: 7, name: '', logo: '/clientes/IMG_0789.JPG', subtitle: '' },
  { id: 8, name: '', logo: '/clientes/IMG_0790.JPG', subtitle: '' },
  { id: 8, name: '', logo: '/clientes/IMG_0791.JPG', subtitle: '' },
  { id: 8, name: '', logo: '/clientes/IMG_0792.JPG', subtitle: '' },
  { id: 8, name: '', logo: '/clientes/IMG_0793.JPG', subtitle: '' },
  { id: 8, name: '', logo: '/clientes/IMG_0794.JPG', subtitle: '' },
  { id: 8, name: '', logo: '/clientes/IMG_0796.WEBP', subtitle: '' },
]

export const LogosCarrusel = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className=" mx-auto  ">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-slate-700 font-semibold text-lg">Aliados y Clientes</p>
        </div>
        
        {/* Carrusel Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {/* Primera vuelta */}
            {companies.map((company) => (
              <div
                key={`first-${company.id}`}
                className="flex-shrink-0 w-72"
              >
                <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-slate-400 mb-4">
                    <Image src={company.logo} alt="logo empresas aliados " width={500} height={5000} className="w-full h-full object-contain"/>
                  </div>
                </div>
                </div>
              </div>
            ))}
            
            {/* Segunda vuelta (duplicada para efecto infinito) */}
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="flex-shrink-0 w-72"
              >
                <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-slate-400 mb-4">
                    <Image src={company.logo} alt="logo empresas aliados " width={500} height={5000} className="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de navegación */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 12px));
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

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
  { id: 9, name: '', logo: '/clientes/IMG_0791.JPG', subtitle: '' },
  { id: 10, name: '', logo: '/clientes/IMG_0792.JPG', subtitle: '' },
  { id:11, name: '', logo: '/clientes/IMG_0793.PNG', subtitle: '' },
  { id: 12, name: '', logo: '/clientes/IMG_0794.JPG', subtitle: '' },
  { id: 13, name: '', logo: '/clientes/IMG_0796.WEBP', subtitle: '' },
]

export const LogosCarrusel = () => {
  return (
    <section className="w-full py-16 md:h-auto h-96 bg-white">
      <div className=" mx-auto   ">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-slate-700 font-semibold text-lg">Aliados y Clientes</p>
        </div>
        
        {/* Carrusel Container */}
        <div className="relative overflow-hidden h-auto py-5 ">
          <div className="flex gap-6 animate-scroll ">
            {/* Primera vuelta */}
            {companies.map((company,index) => (
              <div
                key={index}
                className="flex-shrink-0 md:w-72 md:h-72 w-32 h-32"
              >
                  <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-slate-400 mb-4">
                    <Image src={company.logo} alt="logo empresas aliados " width={500} height={5000} className="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Segunda vuelta (duplicada para efecto infinito) */}
            {companies.map((company,index) => (
              <div
                key={index}
                className="flex-shrink-0 md:w-72 md:h-72 w-32 h-32"
              >
                <div className="bg-white rounded-lg shadow-md h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-slate-400 mb-4">
                    <Image src={company.logo} alt="logo empresas aliados " width={500} height={5000} className="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            ))}
            {companies.map((company,index) => (
              <div
                key={index}
                className="flex-shrink-0 md:w-72 md:h-72 w-32 h-32"
              >
                <div className="bg-white rounded-lg shadow-md  h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-slate-400 mb-4">
                    <Image src={company.logo} alt="logo empresas aliados " width={500} height={5000} className="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            ))}
            {companies.map((company,index) => (
              <div
                key={index}
                className="flex-shrink-0 md:w-72 w-full"
              >
                <div className="bg-white rounded-lg shadow-md  h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-slate-400 mb-4">
                    <Image src={company.logo} alt="logo empresas aliados " width={500} height={5000} className="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de navegación */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-500% - 12px));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

'use client'

const companies = [
  { id: 1, name: 'Constructora A', logo: 'LOGO A', subtitle: 'Construcción Premium' },
  { id: 2, name: 'Desarrollos B', logo: 'LOGO B', subtitle: 'Desarrollo Inmobiliario' },
  { id: 3, name: 'Obra Magna', logo: 'LOGO C', subtitle: 'Proyectos Visionarios' },
  { id: 4, name: 'Edificios Pro', logo: 'LOGO D', subtitle: 'Excelencia en Obra' },
  { id: 5, name: 'Construya', logo: 'LOGO E', subtitle: 'Tu Proyecto, Realidad' },
  { id: 6, name: 'Mega Obras', logo: 'LOGO F', subtitle: 'Grandes Construcciones' },
  { id: 7, name: 'Proyecto Futuro', logo: 'LOGO G', subtitle: 'Innovación Constructiva' },
  { id: 8, name: 'Elite Building', logo: 'LOGO H', subtitle: 'Calidad Garantizada' },
]

export const LogosCarrusel = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className=" mx-auto  ">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-slate-700 font-semibold text-lg">Confían en nosotros</p>
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
                  <div className="text-3xl font-bold text-slate-400 mb-4">{company.logo}</div>
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                    {company.name}
                  </h3>
                  <p className="text-sm text-slate-600 text-center">
                    {company.subtitle}
                  </p>
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
                  <div className="text-3xl font-bold text-slate-400 mb-4">{company.logo}</div>
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                    {company.name}
                  </h3>
                  <p className="text-sm text-slate-600 text-center">
                    {company.subtitle}
                  </p>
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

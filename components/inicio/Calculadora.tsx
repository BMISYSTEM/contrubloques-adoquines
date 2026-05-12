'use client'

import { ArrowLeftRight, ArrowUpDown } from 'lucide-react'
import { useState } from 'react'

// Datos de referencias de productos
const productReferences = {
  bloques: [
    { id: 'bloque-10', name: 'Bloque 10', m2PerUnit: 12.5 },
    { id: 'bloque-12', name: 'Bloque 12', m2PerUnit: 12.5 },
    { id: 'bloque-14', name: 'Bloque 14', m2PerUnit: 12.5 },
  ],
  adoquines: [
    { id: 'adoquin-peatonal', name: 'Adoquín peatonal', m2PerUnit: 50 },
    { id: 'adoquin-vehicular', name: 'Adoquín vehicular', m2PerUnit: 50 },
  ]
}



export const Calculadora = () => {
  const [productType, setProductType] = useState('bloques')
  const [selectedReference, setSelectedReference] = useState('bloque-g1')
  const [wallArea, setWallArea] = useState("")
  const [doorsArea, setDoorsArea] = useState("")
  const [windowsArea, setWindowsArea] = useState('')

  // Obtener el producto seleccionado
  const currentProduct = productReferences[productType as keyof typeof productReferences]
    .find(p => p.id === selectedReference)

  // Calcular área neta
  const netArea = (Number(wallArea ?? 0) * Number(doorsArea ?? 0))

  // Calcular cantidad necesaria
  const unitsNeeded = Number(currentProduct?.m2PerUnit ?? 0) * netArea

  const openWhatsapp = () => {
    const numero = "573106479481";
    const mensaje = encodeURIComponent(`Quiero mas informacion para un proyecto con estas especificaciones, 
                      ${currentProduct?.name} de largo ${wallArea} m2 y de alto ${doorsArea} m2 con un area neta de 
                      ${netArea} y unas unidades aproximadas de ${unitsNeeded}`)
    const link = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(link,"_blanck");
  }
  return (
    <section id="sect-calculadora" className="w-full py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Calcula antes de construir
          </h2>
          <p className="text-slate-700">
            Calcula cuántos bloques o adoquines necesitas para tu proyecto
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {/* Left side - References as tags */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">Tipo de producto</p>
              <div className="flex flex-wrap gap-2">
                {productReferences[productType as keyof typeof productReferences].map(
                  (product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedReference(product.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedReference === product.id
                          ? 'bg-yellow-400 text-black shadow-md'
                          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                    >
                      {product.name}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Input Fields - Full width */}
          <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-6">
            <div>
              <label className=" text-sm font-semibold flex flex-row gap-2 items-center text-slate-700 mb-2">
                Largo m <ArrowLeftRight size={20} />
              </label>
              <input
                type="number"
                value={wallArea}
                onChange={(e) => setWallArea(e.target.value)}
                placeholder="Ej: 50"
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className=" text-sm font-semibold flex flex-row gap-2 items-center text-slate-700 mb-2">
                Alto m <ArrowUpDown size={20} />
              </label>
              <input
                type="number"
                value={doorsArea}
                onChange={(e) => setDoorsArea(e.target.value)}
                placeholder="Ej: 5"
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-yellow-400 focus:outline-none"
              />
            </div>

          </div>
          <p>Ingresa las medidad de tu muro en metros.</p>
          {/* Results - Clean display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
            <div>
              <p className="text-sm text-slate-600 mb-2">Área neta</p>
              <p className="text-3xl font-bold text-slate-900">
                {netArea.toFixed(2)} <span className="text-lg">m²</span>
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-2">
                {productType === 'bloques' ? 'Bloques' : 'Adoquines'} necesarios
              </p>
              <p className="text-3xl font-bold text-yellow-500">{unitsNeeded} Aprox</p>
            </div>
            {unitsNeeded > 0 &&
              <div>
                <p className="text-sm text-slate-600 mb-2">
                  ¿ Quieres cotizar esta cantidad ?
                </p>
                <button onClick={()=>openWhatsapp()} className='px-3 py-1 text-sm text-white bg-green-500 rounded-sm hover:opacity-90'>
                  <span>Solicita cotizacion por Whatsapp</span>
                </button>
              </div>
            }
            <div>
              <p className="text-sm text-slate-600 mb-2">Producto seleccionado</p>
              <p className="text-lg font-semibold text-slate-900">{currentProduct?.name}</p>
            </div>
          </div>
        </div>

        {/* Bottom - Product Type Selection */}
        <div className="mt-12 pt-8 border-t border-slate-300">
          <div className="flex gap-4">
            {['bloques', 'adoquines'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setProductType(type)
                  setSelectedReference(
                    type === 'bloques' ? 'bloque-g1' : 'adoquin-amarillo'
                  )
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${productType === type
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



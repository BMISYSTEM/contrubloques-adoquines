'use client'

import { useState } from 'react'

// Datos de referencias de productos
const productReferences = {
  bloques: [
    { id: 'bloque-g1', name: 'Bloque G-1', m2PerUnit: 0.546 },
    { id: 'bloque-g2', name: 'Bloque G-2', m2PerUnit: 0.546 },
    { id: 'bloque-g3', name: 'Bloque G-3', m2PerUnit: 0.546 },
    { id: 'bloque-g4', name: 'Bloque G-4', m2PerUnit: 0.546 },
  ],
  adoquines: [
    { id: 'adoquin-amarillo', name: 'Adoquín Amarillo', m2PerUnit: 0.02 },
    { id: 'adoquin-negro', name: 'Adoquín Negro', m2PerUnit: 0.02 },
    { id: 'adoquin-rojo', name: 'Adoquín Rojo', m2PerUnit: 0.02 },
    { id: 'adoquin-combinado', name: 'Adoquín Combinado', m2PerUnit: 0.02 },
  ]
}

export const Calculadora = () => {
  const [productType, setProductType] = useState('bloques')
  const [selectedReference, setSelectedReference] = useState('bloque-g1')
  const [wallArea, setWallArea] = useState('')
  const [doorsArea, setDoorsArea] = useState('')
  const [windowsArea, setWindowsArea] = useState('')

  // Obtener el producto seleccionado
  const currentProduct = productReferences[productType as keyof typeof productReferences]
    .find(p => p.id === selectedReference)

  // Calcular área neta
  const wallAreaNum = parseFloat(wallArea) || 0
  const doorsAreaNum = parseFloat(doorsArea) || 0
  const windowsAreaNum = parseFloat(windowsArea) || 0
  const netArea = Math.max(wallAreaNum - doorsAreaNum - windowsAreaNum, 0)

  // Calcular cantidad necesaria
  const unitsNeeded = currentProduct ? Math.ceil(netArea / currentProduct.m2PerUnit) : 0

  return (
    <section id="sect-calculadora" className="w-full py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Calculadora de Materiales
          </h2>
          <p className="text-slate-700">
            Calcula cuántos bloques o adoquines necesitas para tu proyecto
          </p>
        </div>

        <div className="flex flex-col gap-8">
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
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedReference === product.id
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Área de pared (m²)
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Área de puertas (m²)
              </label>
              <input
                type="number"
                value={doorsArea}
                onChange={(e) => setDoorsArea(e.target.value)}
                placeholder="Ej: 5"
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Área de ventanas (m²)
              </label>
              <input
                type="number"
                value={windowsArea}
                onChange={(e) => setWindowsArea(e.target.value)}
                placeholder="Ej: 10"
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Results - Clean display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <p className="text-3xl font-bold text-yellow-500">{unitsNeeded}</p>
            </div>
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
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  productType === type
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



'use client'

import Image from 'next/image'
import { useRef } from 'react'

const carouselImages = [
  '/bloque.png',
  '/bloque-g1.png',
  '/bloque-g2.png',
  '/bloque-g3.png',
  '/bloque-g4.png',
  '/adoquin.png',
  '/adoquines-amarillo-instalado.avif',
  '/adoquines-combinados.jpg',
  '/adoquines-negro-instalados.jpg',
  '/adoquines-rojo-instalado.jpg',
  '/productoinstalado.png',
  '/producto1.png',
  '/producto2.png',
  '/nuestro-estandar1.webp',
  '/estandares2.webp',
  '/estandares3.webp',
  '/estandares4.webp',
  '/estandares5.webp',
  '/estandares6.webp',
  '/estandares7.avif',
]

export const ImageCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const scrollAmount = 260
    containerRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div>
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {carouselImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="min-w-70 max-w-70 h-120 shrink-0  bg-slate-100 shadow-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={240}
                height={384}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end px-4 pt-2">
          <div className="flex gap-3 rounded-full bg-slate-100/95 p-2 shadow-sm backdrop-blur-sm">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-800 transition hover:bg-slate-300"
              aria-label="Retroceder carousel"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-800 transition hover:bg-slate-300"
              aria-label="Avanzar carousel"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

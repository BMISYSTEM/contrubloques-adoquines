'use client'

import { useEffect, useRef, useState } from 'react'

export const ScrollRevealText2 = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const text = "Hecho para resistir \n Diseñado para Construir"

  useEffect(() => {
  const handleScroll = () => {
    if (!textRef.current) return

    const rect = textRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Cuando el elemento entra desde abajo hasta que sale por arriba
    const totalDistance = windowHeight + rect.height
    const scrolled = windowHeight - rect.top

    const progress = scrolled / totalDistance

    const clamped = Math.max(0, Math.min(1, progress))
    setProgress(clamped)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  const letters = text.split("")
  const visibleLetters = Math.floor(progress * letters.length)

  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="w-full mx-auto px-6 md:px-12 flex flex-col  items-center justify-center min-h-screen">
        <div ref={textRef} className="text-center">
          <h2 className="text-2xl md:text-6xl lg:text-6xl font-bold leading-tight">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="transition-colors duration-200"
                style={{
                  color: index < visibleLetters ? "#000" : "#cbd5e1",
                  whiteSpace: letter === '\n' ? 'pre' : 'normal'
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
          {/* Cards counter: proyectos realizados */}
          <p className="text-gray-600 mt-4">
            Una Elección técnica para quienes priorizan estabilidad y rendimiento estructural.
          </p>
          <div className="mt-12 flex items-center justify-center gap-1 flex-col">
            <CountersDisplay triggerProgress={progress} targetNumber={1243} />
            <p className="text-gray-600 mt-4">Obras realizados</p>
          </div>
        </div>
        <iframe className='w-full mt-10 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.932416982708!2d-76.56135832469378!3d3.366696851776152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a3455d660df1%3A0x997e30f1caba5483!2sBloques%20de%20Cemento%20Cali%20%2F%20Construbloques%20y%20Adoquines!5e0!3m2!1ses-419!2sco!4v1771867439443!5m2!1ses-419!2sco" width="600" height="450"   loading="lazy" 
        ></iframe>
      </div>
    </section>
  )
}

function CountersDisplay({ triggerProgress, targetNumber }: { triggerProgress: number; targetNumber: number }) {
  const digits = String(targetNumber).padStart(4, '0').split('')
  const [values, setValues] = useState(() => digits.map(() => 0))
  const startedRef = useRef(false)

  useEffect(() => {
    if (triggerProgress > 0.15 && !startedRef.current) {
      startedRef.current = true
      // animate each digit
      digits.forEach((d, i) => {
        const target = parseInt(d, 10)
        const duration = 900 + i * 150 // stagger
        const start = performance.now()

        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = easeOutCubic(t)
          const current = Math.floor(eased * target)
          setValues((prev) => {
            const copy = [...prev]
            copy[i] = current
            return copy
          })
          if (t < 1) requestAnimationFrame(step)
          else {
            // ensure final value
            setValues((prev) => {
              const copy = [...prev]
              copy[i] = target
              return copy
            })
          }
        }

        requestAnimationFrame(step)
      })
    }
  }, [triggerProgress, digits])

  return (
    <div className="flex gap-4">
      {values.map((v, idx) => (
        <div key={idx} className="w-10 h-10 bg-black text-white rounded-lg flex flex-col items-center justify-center shadow-lg">
          <div className="text-3xl font-bold">{v}</div>
        </div>
      ))}
    </div>
  )
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}
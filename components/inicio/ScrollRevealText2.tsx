'use client'

import { useEffect, useRef, useState } from 'react'
import { Visitanos } from '../Visitanos'

export const ScrollRevealText2 = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const text = "Hecho para resistir \n Diseñado para construir"

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
  const visibleLetters = Math.floor((progress + 0.3) * letters.length)

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full mx-auto   flex flex-col  items-center justify-center min-h-screen">
        <div ref={textRef} className="text-center px-6">
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
            Una elección técnica para quienes priorizan estabilidad y rendimiento estructural.
          </p>
          <div className="mt-12 flex items-center justify-center gap-1 flex-col">
            <CountersDisplay triggerProgress={progress} targetNumber={1200} />
            <p className="text-gray-600 mt-4">Obras realizadas</p>
          </div>
        </div>
        <Visitanos/>
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
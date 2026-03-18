'use client'

import { useEffect, useRef, useState } from 'react'

export const ScrollRevealText = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const text = "Tu obra empieza con la decisión correcta."

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
    <section className="w-full  py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-center min-h-screen">
        <div ref={textRef} className="text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="transition-colors duration-200"
                style={{
                  color: index < visibleLetters ? "#000" : "#cbd5e1",
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  )
}
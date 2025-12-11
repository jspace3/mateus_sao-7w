"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function SalveAbrigoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F0F8FA] py-6 px-4">
      <div className="max-w-sm mx-auto">
        <h2
          className={`text-xl font-bold text-center text-gray-800 mb-2 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          Salve o Abrigo
        </h2>
        <div
          className={`w-12 h-1 bg-green-600 mx-auto mb-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        <div
          className={`mb-4 rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Image
            src="/images/13.png"
            alt="Fotos do abrigo - idosos no refeitório, corte de cabelo, idosa feliz"
            width={600}
            height={200}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p
          className={`text-center text-gray-700 text-sm mb-2 transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Fazemos o impossível todos os dias para manter centenas de vidas protegidas.
        </p>
        <p
          className={`text-center text-orange-500 font-semibold italic transition-all duration-500 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Sua ajuda pode fazer toda a diferença!
        </p>
      </div>
    </section>
  )
}

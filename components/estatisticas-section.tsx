"use client"

import { Sparkles, Smile } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function EstatisticasSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [countYears, setCountYears] = useState(0)
  const [countElders, setCountElders] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animar 42 anos
      let yearsStart = 0
      const yearsInterval = setInterval(() => {
        yearsStart += 1
        setCountYears(yearsStart)
        if (yearsStart >= 42) clearInterval(yearsInterval)
      }, 30)

      // Animar +100 idosos
      let eldersStart = 0
      const eldersInterval = setInterval(() => {
        eldersStart += 2
        setCountElders(eldersStart)
        if (eldersStart >= 100) clearInterval(eldersInterval)
      }, 20)

      return () => {
        clearInterval(yearsInterval)
        clearInterval(eldersInterval)
      }
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="bg-[#E3F2F5] py-4 px-4">
      <div className="max-w-xs mx-auto">
        <div className="flex gap-3 justify-center">
          <div
            className={`flex-1 bg-[#D4ECEF] rounded-xl p-4 text-center border border-[#C5E4E8] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <Sparkles className="w-6 h-6 text-orange-500 mx-auto mb-1 animate-pulse" />
            <p className="text-3xl font-bold text-gray-800">{countYears}</p>
            <p className="text-xs text-gray-600 tracking-wider">ANOS</p>
          </div>

          <div
            className={`flex-1 bg-[#D4ECEF] rounded-xl p-4 text-center border border-[#C5E4E8] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <Smile className="w-6 h-6 text-orange-500 mx-auto mb-1 animate-pulse" />
            <p className="text-3xl font-bold text-gray-800">+{countElders}</p>
            <p className="text-xs text-gray-600 tracking-wider">IDOSOS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

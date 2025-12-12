"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"
import { addUtmsToUrl } from "@/lib/add-utms"

const doacoes = [
  { valor: 15, link: "https://pay.saomateus.online/693b4fa2482d3f7a0457cff6" },
  { valor: 30, link: "https://pay.saomateus.online/693b4fbd078bc7273992a0c8" },
  { valor: 75, link: "https://pay.saomateus.online/693b4fd621becfe86a21c4b3" },
  { valor: 150, link: "https://pay.saomateus.online/693b4fee21becfe86a21c5d0" },
  { valor: 350, link: "https://pay.saomateus.online/693b500b078bc7273992a3b4" },
  { valor: 500, link: "https://pay.saomateus.online/693b5022482d3f7a0457d63e" },
]

export function DoacaoSection() {
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
    <section ref={sectionRef} className="bg-[#2D5A4C] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2
            className={`text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Faça Sua Doação
          </h2>
          <p
            className={`text-white/80 text-sm transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cada contribuição transforma vidas. Escolha um valor e ajude agora.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {doacoes.map((doacao, index) => (
            <a
              key={doacao.valor}
              href={addUtmsToUrl(doacao.link)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center bg-white/10 hover:bg-orange-500 rounded-xl p-3 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-orange-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 2) * 50}ms` }}
            >
              <span className="text-base md:text-lg font-bold text-white">R${doacao.valor}</span>
              <Heart className="w-4 h-4 text-orange-400 mt-1 group-hover:text-white group-hover:scale-110 transition-all" />
            </a>
          ))}
        </div>

        <p
          className={`text-center text-white/60 text-xs mt-5 flex items-center justify-center gap-1 transition-all duration-500 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Heart className="w-3 h-3 fill-current text-orange-400" />
          Pagamento 100% seguro
        </p>
      </div>
    </section>
  )
}

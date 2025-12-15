"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"
import { addUtmsToUrl } from "@/lib/add-utms"
import Image from "next/image"

const doacoes = [
  { valor: 20, link: "https://pay.saomateus.online/693b4fa2482d3f7a0457cff6" },
  { valor: 30, link: "https://pay.saomateus.online/693b4fbd078bc7273992a0c8" },
  { valor: 40, link: "https://pay.saomateus.online/69407834a4bfc9d134d10c79" },
  { valor: 60, link: "https://pay.saomateus.online/6940784cd586b426320e7fae" },
  { valor: 80, link: "https://pay.saomateus.online/69407862526ddd70c901f3ed" },
  { valor: 100, link: "https://pay.saomateus.online/694078c7526ddd70c901f64a" },
  { valor: 130, link: "https://pay.saomateus.online/69407877a4bfc9d134d10da8" },
  { valor: 150, link: "https://pay.saomateus.online/693b4fee21becfe86a21c5d0" },
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
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image column */}
          <div
            className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/images/20-9.jpg"
              alt="Idosa no Asilo São Mateus"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Donation options column */}
          <div>
            <div className="text-center mb-6">
              <h2
                className={`text-xl md:text-3xl font-bold text-white mb-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                Faça Sua Doação
              </h2>
              <p
                className={`text-white/80 text-sm md:text-base transition-all duration-500 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Cada contribuição transforma vidas. Escolha um valor e ajude agora.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {doacoes.map((doacao, index) => (
                <a
                  key={doacao.valor}
                  href={addUtmsToUrl(doacao.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center justify-center bg-white/10 hover:bg-orange-500 rounded-xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-orange-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 50}ms` }}
                >
                  <span className="text-base md:text-xl font-bold text-white">R${doacao.valor}</span>
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-2 group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>

            <p
              className={`text-center text-white/60 text-xs md:text-sm mt-5 flex items-center justify-center gap-1 transition-all duration-500 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Heart className="w-3 h-3 md:w-4 md:h-4 fill-current text-orange-400" />
              Pagamento 100% seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

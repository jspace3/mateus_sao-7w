"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const trabalhos = [
  {
    id: 1,
    titulo: "Tarde de Pastel",
    descricao: "No dia 09/08/2025 fizemos a nossa tarde de pastel para nossos moradores.",
    imagem: "/images/9.jpeg",
  },
  {
    id: 2,
    titulo: "Momento de Convivência",
    descricao: "Nossos idosos aproveitando um momento especial de interação e carinho.",
    imagem: "/images/14.jpeg",
  },
  {
    id: 3,
    titulo: "Dia da Beleza",
    descricao: "Voluntários dedicados cuidando da autoestima dos nossos moradores.",
    imagem: "/images/10.jpeg",
  },
  {
    id: 4,
    titulo: "Carnaval no Asilo",
    descricao: "Festa de carnaval com muita alegria e diversão para todos os moradores.",
    imagem: "/images/11.jpeg",
  },
]

export function TrabalhosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trabalhos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + trabalhos.length) % trabalhos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trabalhos.length)
  }

  return (
    <section className="py-12 px-4 bg-[#F5F0E8]">
      <div className="max-w-md mx-auto text-center">
        {/* Título */}
        <h2 className="text-2xl font-bold text-[#2D5A3D] mb-2">Trabalhos do Asilo</h2>
        <div className="w-12 h-1 bg-[#F5A962] mx-auto mb-4" />

        {/* Subtítulo */}
        <p className="text-gray-600 text-sm mb-8">
          Esses são apenas alguns dos nossos trabalhos que conseguimos fazer graças ao apoio de pessoas como você.
        </p>

        {/* Card do Carrossel */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          {/* Imagem com borda laranja */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#F5A962] mb-4">
            <Image
              src={trabalhos[currentIndex].imagem || "/placeholder.svg"}
              alt={trabalhos[currentIndex].titulo}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Título e descrição */}
          <h3 className="text-xl font-bold text-[#F5A962] mb-2">{trabalhos[currentIndex].titulo}</h3>
          <p className="text-gray-600 text-sm">{trabalhos[currentIndex].descricao}</p>
        </div>

        {/* Indicadores e navegação */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full bg-[#F5A962] text-white flex items-center justify-center hover:bg-[#e09952] transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicadores */}
          <div className="flex gap-2">
            {trabalhos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#F5A962]" : "bg-gray-300"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-[#F5A962] text-white flex items-center justify-center hover:bg-[#e09952] transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <a
          href="#"
          className="inline-block mt-8 bg-[#2D5A3D] text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-[#234a31] transition-colors hover:scale-105 transform"
        >
          QUERO AJUDAR
        </a>
      </div>
    </section>
  )
}

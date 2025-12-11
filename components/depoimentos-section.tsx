"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const depoimentos = [
  {
    id: 1,
    nome: "Ana Paula Medeiros",
    foto: "/images/depoimentos/2.jpeg",
    texto:
      "Essa casa, apesar de simples, tem muito amor. As pessoas que trabalham fazem por amor, pois os recursos são escassos. Quem puder ajudar, pode ter certeza que estará fazendo uma grande caridade.",
  },
  {
    id: 2,
    nome: "Carla Santos",
    foto: "/images/depoimentos/4.jpeg",
    texto:
      "Conheci o asilo através de uma amiga e me apaixonei pelo trabalho que fazem. Os idosos são muito bem cuidados e tratados com muito carinho. Recomendo a todos que possam ajudar!",
  },
  {
    id: 3,
    nome: "Maria Helena",
    foto: "/images/depoimentos/3.jpeg",
    texto:
      "Minha mãe foi muito bem acolhida nesta casa. A equipe é dedicada e amorosa. Fico muito feliz em saber que ela está em boas mãos. Gratidão eterna a todos!",
  },
  {
    id: 4,
    nome: "Fernanda Lima",
    foto: "/images/depoimentos/5.jpeg",
    texto:
      "Participei de uma ação voluntária no asilo e fiquei encantada com a dedicação de todos. Os idosos são tratados como família. Vale a pena conhecer e ajudar!",
  },
  {
    id: 5,
    nome: "Juliana Costa",
    foto: "/images/depoimentos/6.jpeg",
    texto:
      "Um lugar abençoado que cuida dos nossos idosos com muito amor e respeito. Faço doações mensais e sei que estão sendo bem utilizadas. Ajudem também!",
  },
]

export function DepoimentosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length)
  }

  const currentDepoimento = depoimentos[currentIndex]

  return (
    <section className="py-6 px-4 bg-gradient-to-b from-[#FFF8F0] to-[#FFEEDD]">
      <div className="max-w-sm mx-auto">
        {/* Título */}
        <div className="text-center mb-1">
          <h2 className="text-lg font-bold text-[#2D5A47]">Depoimentos</h2>
          <div className="w-12 h-0.5 bg-[#E07A2A] mx-auto mt-1 rounded-full" />
        </div>

        {/* Subtítulo */}
        <p className="text-center text-gray-500 text-xs mb-4">
          Histórias reais de pessoas que fazem parte da família São Mateus
        </p>

        {/* Card do depoimento */}
        <div className="bg-white rounded-xl shadow-md p-4 transition-all duration-500">
          {/* Foto */}
          <div className="flex justify-center mb-2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-[#E07A2A]">
              <Image
                src={currentDepoimento.foto || "/placeholder.svg"}
                alt={currentDepoimento.nome}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Nome */}
          <h3 className="text-center text-[#E07A2A] font-semibold text-sm mb-2">{currentDepoimento.nome}</h3>

          {/* Texto */}
          <p className="text-center text-gray-600 text-xs italic leading-relaxed">"{currentDepoimento.texto}"</p>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={goToPrevious}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#E07A2A]" : "bg-gray-300"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-8 h-8 rounded-full bg-[#E07A2A] flex items-center justify-center hover:bg-[#c96a22] transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

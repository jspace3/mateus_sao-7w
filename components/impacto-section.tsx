"use client"

import { useEffect, useRef, useState } from "react"
import { DonationModal } from "./donation-modal"

const impactos = [
  {
    valor: "R$ 15",
    descricao: "Ajuda na compra de itens de higiene, como um sabonete e pasta de dente",
  },
  {
    valor: "R$ 30",
    descricao: "Garante a compra de 1 kg de leite em pó, um alimento essencial na dieta dos idosos",
  },
  {
    valor: "R$ 75",
    descricao: "Cobre 1 semana de fraldas geriátricas para um dos nossos moradores",
  },
  {
    valor: "R$ 150",
    descricao: "Garante uma cesta básica para alimentar nossos moradores",
  },
  {
    valor: "R$ 350",
    descricao: "Ajuda a custear uma sessão de fisioterapia e medicamentos de um idoso",
  },
  {
    valor: "R$ 500",
    descricao: "Compra um cilindro de oxigênio para idosos necessitados",
  },
]

export function ImpactoSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          impactos.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
          observer.disconnect()
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
    <section
      ref={sectionRef}
      className="py-10 px-4"
      style={{ background: "linear-gradient(to bottom, #F5F0E8, #FDE8D0)" }}
    >
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2D5A3D] hover:bg-[#234a31] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            QUERO AJUDAR
          </button>
        </div>

        <h2 className="text-2xl font-bold text-[#2D5A3D] text-center mb-1">Impacto da sua doação:</h2>
        <div className="w-16 h-1 bg-[#F5A623] mx-auto mb-6 rounded-full" />

        <div className="space-y-3">
          {impactos.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="bg-[#F5A623] text-white font-bold text-sm px-3 py-2 rounded-full whitespace-nowrap min-w-[70px] text-center">
                {item.valor}
              </span>
              <p className="text-gray-700 text-sm leading-tight">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

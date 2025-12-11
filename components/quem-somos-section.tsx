"use client"

import { useState } from "react"
import { DonationModal } from "./donation-modal"

export function QuemSomosSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-[#F5F0E8] py-8 px-4">
      {/* Botão QUERO AJUDAR */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-colors"
        >
          QUERO AJUDAR
        </button>
      </div>

      {/* Título Quem Somos */}
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Quem Somos?</h2>
        <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-6"></div>

        {/* Primeiro parágrafo */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Fundada em 1983, a Casa Geriátrica São Mateus é um lar para idosos em Guadalupe, Rio de Janeiro. Hoje, sob a
          direção da Fundação Leopoldina e localizada na Rua Fernando Lobo, 879, ainda dependemos de doações para a
          manutenção do abrigo e o cuidado com nossos residentes. Sua ajuda é fundamental para que nossa missão
          continue.
        </p>

        {/* Segundo parágrafo */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Hoje, o Refúgio da Terceira Idade é o lar de muitos, garantindo a todos um ambiente de carinho, respeito e
          paz..
        </p>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { DonationModal } from "./donation-modal"

export function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-gradient-to-b from-orange-400 to-orange-500 py-10 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Faça Parte Desta História</h2>
        <p className="text-white/90 text-sm mb-6">
          Cada doação, cada compartilhamento, cada gesto de amor faz a diferença na vida de centenas de idosos que
          dependem da nossa ajuda.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-[#2D5A4C] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#234539] transition-all hover:scale-105"
        >
          Quero Ajudar Agora <Heart className="w-4 h-4 fill-current" />
        </button>

        <div className="mt-8">
          <Image src="/images/logo.png" alt="Casa Geriátrica São Mateus" width={80} height={80} className="mx-auto" />
        </div>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

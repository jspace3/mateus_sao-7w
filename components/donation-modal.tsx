"use client"

import { X, Heart } from "lucide-react"
import { useEffect } from "react"
import { addUtmsToUrl } from "@/lib/add-utms"

const valores = [
  { valor: "R$ 15", link: "https://pay.saomateus.online/693b4fa2482d3f7a0457cff6" },
  { valor: "R$ 30", link: "https://pay.saomateus.online/693b4fbd078bc7273992a0c8" },
  { valor: "R$ 75", link: "https://pay.saomateus.online/693b4fd621becfe86a21c4b3" },
  { valor: "R$ 150", link: "https://pay.saomateus.online/693b4fee21becfe86a21c5d0" },
  { valor: "R$ 350", link: "https://pay.saomateus.online/693b500b078bc7273992a3b4" },
  { valor: "R$ 500", link: "https://pay.saomateus.online/693b5022482d3f7a0457d63e" },
]

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <Heart className="w-10 h-10 text-[#F5A623] mx-auto mb-2" />
          <h3 className="text-xl font-bold text-[#2D5A4C]">Escolha um valor</h3>
          <p className="text-gray-500 text-sm">Sua doação transforma vidas</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {valores.map((item) => (
            <a
              key={item.valor}
              href={addUtmsToUrl(item.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2D5A4C] hover:bg-[#234539] text-white font-bold py-3 px-4 rounded-xl text-center transition-all hover:scale-105"
            >
              {item.valor}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

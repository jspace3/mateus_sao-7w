"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { addUtmsToUrl } from "@/lib/add-utms"

const valores = [
  { valor: 20, link: "https://pay.saomateus.online/693b4fa2482d3f7a0457cff6" },
  { valor: 30, link: "https://pay.saomateus.online/693b4fbd078bc7273992a0c8" },
  { valor: 50, link: "" }, // Link pendente
  { valor: 100, link: "" }, // Link pendente
  { valor: 150, link: "https://pay.saomateus.online/693b4fee21becfe86a21c5d0" },
  { valor: 250, link: "" }, // Link pendente
  { valor: 500, link: "https://pay.saomateus.online/693b5022482d3f7a0457d63e" },
  { valor: 1000, link: "" }, // Link pendente
]

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [name, setName] = useState("")
  const [anonymous, setAnonymous] = useState(false)
  const [message, setMessage] = useState("")
  const [selectedValue, setSelectedValue] = useState<number | null>(null)

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

  const handleDonate = () => {
    if (!selectedValue) {
      alert("Por favor, escolha um valor para doar")
      return
    }

    const valorObj = valores.find((v) => v.valor === selectedValue)
    if (valorObj && valorObj.link) {
      window.open(addUtmsToUrl(valorObj.link), "_blank")
    } else {
      alert("Link de pagamento em breve. Por favor, escolha outro valor.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-t-3xl sm:rounded-2xl p-4 sm:p-5 w-full sm:max-w-md shadow-2xl animate-in fade-in slide-in-from-bottom sm:zoom-in duration-200 pb-safe">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D5A4C] leading-tight">Qual valor deseja doar?</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3 sm:mb-4">
          {valores.map((item) => (
            <button
              key={item.valor}
              onClick={() => {
                setSelectedValue(item.valor)
              }}
              disabled={!item.link}
              className={`py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg font-semibold text-sm sm:text-base transition-all border-2 ${
                selectedValue === item.valor
                  ? "bg-[#2D5A4C] text-white border-[#2D5A4C]"
                  : "bg-white text-[#2D5A4C] border-[#2D5A4C] hover:bg-[#2D5A4C]/10 active:bg-[#2D5A4C]/20"
              } ${!item.link ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              R$ {item.valor}
            </button>
          ))}
        </div>

        <div className="mb-2 sm:mb-3">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Seu nome</label>
          <input
            type="text"
            placeholder="Ex.: João Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={anonymous}
            className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg outline-none focus:border-[#2D5A4C] disabled:bg-gray-100 text-sm sm:text-base"
          />
        </div>

        <div className="mb-2 sm:mb-3 flex items-center">
          <input
            type="checkbox"
            id="anonymous"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D5A4C] border-gray-300 rounded focus:ring-[#2D5A4C]"
          />
          <label htmlFor="anonymous" className="ml-2 text-xs sm:text-sm font-semibold text-gray-700">
            Doar anonimamente
          </label>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Mensagem (opcional)</label>
          <textarea
            placeholder="Adicione uma mensagem de apoio (opcional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg outline-none focus:border-[#2D5A4C] resize-none text-sm sm:text-base"
          />
        </div>

        <button
          onClick={handleDonate}
          className="w-full bg-[#2D5A4C] hover:bg-[#234539] active:bg-[#1a3328] text-white font-bold py-3 rounded-lg transition-all text-sm sm:text-base"
        >
          Gerar Doação
        </button>

        <p className="text-center text-gray-500 text-xs mt-2 sm:mt-3">Pagamento processado de forma segura via PIX</p>
      </div>
    </div>
  )
}

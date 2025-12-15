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
  const [customValue, setCustomValue] = useState("")
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
    const valueToUse = selectedValue || Number.parseFloat(customValue)
    if (!valueToUse || valueToUse < 1) {
      alert("Por favor, escolha ou digite um valor para doar")
      return
    }

    const valorObj = valores.find((v) => v.valor === valueToUse)
    if (valorObj && valorObj.link) {
      window.open(addUtmsToUrl(valorObj.link), "_blank")
    } else {
      alert("Link de pagamento em breve. Por favor, escolha outro valor.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#2D5A4C]">Qual valor deseja doar?</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {valores.map((item) => (
            <button
              key={item.valor}
              onClick={() => {
                setSelectedValue(item.valor)
                setCustomValue("")
              }}
              disabled={!item.link}
              className={`py-3 px-4 rounded-xl font-semibold text-lg transition-all border-2 ${
                selectedValue === item.valor
                  ? "bg-[#2D5A4C] text-white border-[#2D5A4C]"
                  : "bg-white text-[#2D5A4C] border-[#2D5A4C] hover:bg-[#2D5A4C]/10"
              } ${!item.link ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              R$ {item.valor}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-center text-gray-600 mb-3">Ou o que o seu coração mandar ❤️</p>
          <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden focus-within:border-[#2D5A4C]">
            <span className="bg-gray-100 px-4 py-3 text-gray-600 font-semibold">R$</span>
            <input
              type="number"
              placeholder="Digite o valor"
              value={customValue}
              onChange={(e) => {
                setCustomValue(e.target.value)
                setSelectedValue(null)
              }}
              className="flex-1 px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Seu nome</label>
          <input
            type="text"
            placeholder="Ex.: João Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={anonymous}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-[#2D5A4C] disabled:bg-gray-100"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="anonymous"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="w-5 h-5 text-[#2D5A4C] border-gray-300 rounded focus:ring-[#2D5A4C]"
          />
          <label htmlFor="anonymous" className="ml-2 text-sm font-semibold text-gray-700">
            Doar anonimamente
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem (opcional)</label>
          <textarea
            placeholder="Adicione uma mensagem de apoio (opcional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-[#2D5A4C] resize-none"
          />
        </div>

        <button
          onClick={handleDonate}
          className="w-full bg-[#2D5A4C] hover:bg-[#234539] text-white font-bold py-4 rounded-xl transition-all"
        >
          Gerar Doação
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">Pagamento processado de forma segura via PIX</p>
      </div>
    </div>
  )
}

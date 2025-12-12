"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Heart, Sparkles } from "lucide-react"

export default function AgradecimentoPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.google.com"
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E8] to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="bg-[#2D5A4C] p-6 rounded-2xl shadow-lg">
            <Image
              src="/images/logo.png"
              alt="Casa Geriátrica São Mateus"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2D5A4C] blur-2xl opacity-30 rounded-full animate-pulse"></div>
            <div className="relative bg-[#2D5A4C] p-6 rounded-full">
              <Heart className="w-16 h-16 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D5A4C] leading-tight">
            Gratidão pelo seu Coração Generoso!
          </h1>
          <div className="flex items-center justify-center gap-2 text-orange-500">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg md:text-xl font-semibold">Sua doação transforma vidas</p>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Bible Verse */}
        <div className="bg-white border-l-4 border-[#2D5A4C] p-8 rounded-lg shadow-xl">
          <blockquote className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic font-serif">
              "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com
              alegria."
            </p>
            <footer className="text-lg text-[#2D5A4C] font-semibold">— 2 Coríntios 9:7</footer>
          </blockquote>
        </div>

        {/* Message */}
        <div className="space-y-4 text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed">
            Sua generosidade traz esperança, dignidade e amor para nossos idosos. Cada doação é uma bênção que nos
            permite continuar cuidando com carinho de mais de 100 vidas preciosas.
          </p>
          <p className="text-lg font-semibold text-[#2D5A4C]">
            Que Deus abençoe abundantemente o seu lar e multiplique em sua vida todo o bem que você plantou hoje.
          </p>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 pt-4">Casa Geriátrica São Mateus - Cuidamos com amor desde 1983</p>
      </div>
    </div>
  )
}

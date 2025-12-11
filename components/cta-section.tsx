import Image from "next/image"
import { Heart } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-gradient-to-b from-orange-400 to-orange-500 py-10 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Faça Parte Desta História</h2>
        <p className="text-white/90 text-sm mb-6">
          Cada doação, cada compartilhamento, cada gesto de amor faz a diferença na vida de centenas de idosos que
          dependem da nossa ajuda.
        </p>

        <a
          href="https://wa.me/5521965407572"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2D5A4C] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#234539] transition-all hover:scale-105"
        >
          Quero Ajudar Agora <Heart className="w-4 h-4 fill-current" />
        </a>

        <div className="mt-8">
          <Image src="/images/logo.png" alt="Casa Geriátrica São Mateus" width={80} height={80} className="mx-auto" />
        </div>
      </div>
    </section>
  )
}

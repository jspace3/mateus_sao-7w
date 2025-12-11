import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Music2, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo e Nome */}
        <div className="flex items-center gap-3 mb-6">
          <Image src="/images/logo.png" alt="Casa Geriátrica São Mateus" width={50} height={50} />
          <h3 className="text-[#2D5A4C] font-bold text-lg">Casa Geriátrica São Mateus</h3>
        </div>

        {/* Contato */}
        <div className="mb-6">
          <h4 className="text-orange-400 font-semibold mb-3">Contato</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <a
              href="https://wa.me/5521965407589"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp: 21 96540-7589
            </a>
            <a
              href="mailto:ajudesaomateus@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              ajudesaomateus@gmail.com
            </a>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mb-6">
          <h4 className="text-orange-400 font-semibold mb-3">Redes Sociais</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <span className="flex items-center gap-2 text-gray-500">
              <Music2 className="w-4 h-4" />
              TikTok (em breve)
            </span>
          </div>
        </div>

        {/* Como Ajudar */}
        <div className="mb-8">
          <h4 className="text-orange-400 font-semibold mb-3">Como Ajudar</h4>
          <div className="space-y-1 text-sm text-gray-300">
            <p>Doações PIX</p>
            <p>Adoção Responsável</p>
            <p>Voluntariado</p>
            <p>Apadrinhamento</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          <p className="mb-1">© 2025 Casa Geriátrica São Mateus. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Desenvolvido com <Heart className="w-3 h-3 fill-red-500 text-red-500" /> para salvar vidas
          </p>
        </div>
      </div>
    </footer>
  )
}

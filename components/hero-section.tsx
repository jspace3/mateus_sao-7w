"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-[#F5F0E8]">
      <div className="bg-[#F5F0E8] py-2 text-center">
        <h2 className="text-sm md:text-base font-bold text-red-600 uppercase tracking-wide animate-pulse">
          Campanha Natal Sem Fome
        </h2>
      </div>

      <Image
        src="/images/12.png"
        alt="Na Casa Geriátrica São Mateus - Cuidamos Com Amor"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
      />
    </section>
  )
}

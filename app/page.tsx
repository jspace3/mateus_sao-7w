import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { QuemSomosSection } from "@/components/quem-somos-section"
import { EstatisticasSection } from "@/components/estatisticas-section"
import { SalveAbrigoSection } from "@/components/salve-abrigo-section"
import { ImpactoSection } from "@/components/impacto-section"
import { TrabalhosSection } from "@/components/trabalhos-section"
import { DepoimentosSection } from "@/components/depoimentos-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <QuemSomosSection />
      <EstatisticasSection />
      <SalveAbrigoSection />
      <ImpactoSection />
      <TrabalhosSection />
      <DepoimentosSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

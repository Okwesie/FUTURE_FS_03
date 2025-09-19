import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { InnovationSection } from "@/components/innovation-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <InnovationSection />
      <Footer />
    </main>
  )
}

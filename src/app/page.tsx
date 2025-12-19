import { Navbar } from "@/components/cloned/Navbar"
import { Hero } from "@/components/cloned/Hero"
import { CallToAction } from "@/components/cloned/CallToAction"
import { Testimonials } from "@/components/cloned/Testimonials"
import { Gallery } from "@/components/cloned/Gallery"
import { News } from "@/components/cloned/News"
import { FAQ } from "@/components/cloned/FAQ"
import { Marquee } from "@/components/cloned/Marquee"
import { Footer } from "@/components/cloned/Footer"

export default function Home() {
  return (
    <main className="min-h-screen font-serif">
      <Navbar />
      <Hero />
      <div id="services">
        <CallToAction />
        <Gallery />
      </div>
      <Testimonials />
      <News />
      <FAQ />
      <Marquee />
      <div id="contact">
        <Footer />
      </div>
    </main>
  )
}

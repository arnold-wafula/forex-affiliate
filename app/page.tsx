import Hero from "@/components/site/Hero"
import Features from "@/components/site/Features"
import Instructions from "@/components/site/Instructions"
import Testimonials from "@/components/site/Testimonials"
import CTA from "@/components/site/CTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <Features />
        <Instructions />
        <Testimonials />
        <CTA />
      </main>
    </div> 
  )
}
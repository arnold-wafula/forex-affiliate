import Navbar from "@/components/site/Navbar"
import Hero from "@/components/site/Hero"
import Features from "@/components/site/Features"
import Instructions from "@/components/site/Instructions"
import Testimonials from "@/components/site/Testimonials"
import CTA from "@/components/site/CTA"
import Footer from "@/components/site/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <Features />
        <Instructions />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div> 
  )
}
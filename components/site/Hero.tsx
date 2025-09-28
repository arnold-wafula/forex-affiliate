import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center min-h-[70vh] md:h-screen">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Earn More With Forex Affiliate Partnerships
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
          Maximize your income by promoting trusted forex platforms with top-tier commissions.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
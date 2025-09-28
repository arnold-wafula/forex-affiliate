import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Earn More With Forex Affiliate Partnerships
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Maximize your income by promoting trusted forex platforms with top-tier commissions.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-24 md:min-h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
      {/* Overlay grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Trade Smarter?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-zinc-200">
          Join thousands of traders already boosting profits with our real-time
          signals and insights.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-zinc-100 font-semibold text-lg px-8 py-6 flex items-center gap-2"
          >
            🚀 Get Started Free <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Trust badges */}
        <p className="mt-8 text-sm text-zinc-300">
          ✅ No credit card required · 🔒 Secure & private · ⚡ Instant access
        </p>
      </div>
    </section>
  )
}
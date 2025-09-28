import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          What Traders Say
        </h2>
        <p className="text-base md:text-lg text-zinc-400">
          Real experiences from traders who trust our signals and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[
          {
            quote: "This platform gave me confidence to trade consistently.",
            author: "Alex, Forex Trader",
          },
          {
            quote: "The signals are accurate and easy to follow. Highly recommend!",
            author: "Maria, Crypto Investor",
          },
          {
            quote: "Clean interface and reliable insights. Exactly what I needed.",
            author: "John, Day Trader",
          },
        ].map((t, idx) => (
          <Card
            key={idx}
            className="bg-zinc-800 text-white border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <CardContent className="p-6 md:p-8 text-center">
              <div className="flex justify-center mb-3 md:mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 fill-current"
                  />
                ))}
              </div>
              <p className="italic text-base md:text-lg mb-4 md:mb-6 text-zinc-200">
                “{t.quote}”
              </p>
              <p className="font-semibold text-sm md:text-base text-zinc-100">
                — {t.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
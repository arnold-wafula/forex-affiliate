import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-zinc-900 to-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">What Traders Say</h2>
        <p className="text-lg text-zinc-400">
          Real experiences from traders who trust our signals and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current hover:scale-110 transition-transform"
                  />
                ))}
              </div>
              <p className="italic text-lg mb-6 text-zinc-200">“{t.quote}”</p>
              <p className="font-semibold text-zinc-100">— {t.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LineChart, ShieldCheck, BarChart3 } from "lucide-react"

export default function Features() {
  return (
    <section className="px-6 py-20 md:py-32 bg-zinc-900">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Key Features
        </h2>
        <p className="text-base md:text-lg text-zinc-300">
          Designed for traders and affiliates who want to maximize profits, gain deep market insights, 
          and partner with platforms they can trust.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        <Card className="p-6 md:p-8 bg-zinc-800 border-none transition duration-300 hover:shadow-2xl md:hover:scale-105">
          <CardHeader className="flex items-center space-x-3 mb-2">
            <LineChart className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
            <CardTitle className="text-lg md:text-xl text-white">Real-Time Signals</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300 text-sm md:text-base">
            Maximize profits with instant, reliable trade alerts powered by expert analysis.
          </CardContent>
        </Card>

        <Card className="p-6 md:p-8 bg-zinc-800 border-none transition duration-300 hover:shadow-2xl md:hover:scale-105">
          <CardHeader className="flex items-center space-x-3 mb-2">
            <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
            <CardTitle className="text-lg md:text-xl text-white">Market Insights</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300 text-sm md:text-base">
            Stay ahead with detailed reports, market trends, and actionable insights.
          </CardContent>
        </Card>

        <Card className="p-6 md:p-8 bg-zinc-800 border-none transition duration-300 hover:shadow-2xl md:hover:scale-105">
          <CardHeader className="flex items-center space-x-3 mb-2">
            <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
            <CardTitle className="text-lg md:text-xl text-white">Secure Platform</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300 text-sm md:text-base">
            Trade confidently with bank-level security and top-notch encryption.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LineChart, ShieldCheck, BarChart3 } from "lucide-react"

export default function Features() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-32 bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Features</h2>
        <p className="text-lg text-zinc-300">
          Designed for traders and affiliates who want to maximize profits, gain deep market insights, 
          and partner with platforms they can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <Card className="p-8 bg-zinc-800 border-none hover:shadow-2xl hover:scale-105 transition duration-300">
          <CardHeader className="flex items-center space-x-3">
            <LineChart className="w-8 h-8 text-blue-500" />
            <CardTitle className="text-xl text-white">Real-Time Signals</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300 text-base">
            Maximize profits with instant, reliable trade alerts powered by expert analysis.
          </CardContent>
        </Card>

        <Card className="p-8 bg-zinc-800 border-none hover:shadow-2xl hover:scale-105 transition duration-300">
          <CardHeader className="flex items-center space-x-3">
            <BarChart3 className="w-8 h-8 text-blue-500" />
            <CardTitle className="text-xl text-white">Market Insights</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300 text-base">
            Stay ahead with detailed reports, market trends, and actionable insights.
          </CardContent>
        </Card>

        <Card className="p-8 bg-zinc-800 border-none hover:shadow-2xl hover:scale-105 transition duration-300">
          <CardHeader className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-blue-500" />
            <CardTitle className="text-xl text-white">Secure Platform</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300 text-base">
            Trade confidently with bank-level security and top-notch encryption.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
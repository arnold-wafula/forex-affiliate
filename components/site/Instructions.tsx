import Image from "next/image"

export default function Instructions() {
  return (
    <section className="flex flex-col md:flex-row px-6 py-16 md:py-24 bg-zinc-50">
      
      {/* Left image framed */}
      <div className="md:w-1/2 w-full flex items-center justify-center mb-12 md:mb-0">
        <Image
          src="/forex.jpg"
          alt="Trading Illustration"
          width={500}
          height={500}
          className="rounded-2xl shadow-xl object-cover max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right content */}
      <div className="md:w-1/2 w-full flex flex-col gap-10 justify-center">
        
        {/* Heading */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-zinc-600 mt-3 md:mt-4">
            Get started in just three simple steps and start trading with confidence.
          </p>
        </div>

        {/* Steps - timeline style */}
        <div className="space-y-8 md:space-y-10 max-w-md">
          
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm md:text-lg shadow-md">
              1
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-zinc-900">Create Account</h3>
              <p className="text-sm md:text-base text-zinc-600 mt-1">
                Sign up for free and set up your trading profile in minutes.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm md:text-lg shadow-md">
              2
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-zinc-900">Connect Signals</h3>
              <p className="text-sm md:text-base text-zinc-600 mt-1">
                Get instant alerts and real-time trading signals directly to your dashboard.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm md:text-lg shadow-md">
              3
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-zinc-900">Start Trading</h3>
              <p className="text-sm md:text-base text-zinc-600 mt-1">
                Trade smarter, minimize risks, and grow your profits effortlessly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ValueCTA() {
  return (
    <section id="value" className="relative bg-zinc-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-4xl font-semibold">Exquisite made attainable</h3>
              <p className="mt-3 text-white/70">Premium materials, advanced safety, and effortless tech—without the premium price tag.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <span className="rounded-full border border-white/15 px-4 py-2">Starting at $24,990</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Est. 310 mi range</span>
                <span className="rounded-full border border-white/15 px-4 py-2">0-60 mph in 6.1s</span>
              </div>
            </div>
            <div className="md:text-right">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-zinc-900 font-medium hover:bg-zinc-200 transition">
                Reserve yours <ArrowRight size={18} />
              </a>
              <p className="mt-3 text-white/50 text-sm">Fully refundable. Deliveries begin Q3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

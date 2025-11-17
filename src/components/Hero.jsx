import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white" id="design">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-white/60">Urban electric</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold leading-tight">
            Elegance in motion. Built for the city.
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            A sleek, dynamic silhouette with a friendly price. Glide through streets with confidence and calm.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#value" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-zinc-900 font-medium hover:bg-zinc-200 transition">
              Pre-order from $24,990
            </a>
            <a href="#technology" className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">
              Explore technology
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

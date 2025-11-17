import { motion } from 'framer-motion'
import { Sparkles, Wind, Droplets, Circle } from 'lucide-react'

export default function Exterior() {
  const points = [
    { icon: <Wind size={16} />, title: 'Aerodynamic purity', desc: 'Low, sleek profile reduces drag for quiet efficiency.' },
    { icon: <Droplets size={16} />, title: 'Weather ready', desc: 'Hydrophobic coat keeps the exterior pristine.' },
    { icon: <Sparkles size={16} />, title: 'Signature glow', desc: 'Red accent lighting for a bold night presence.' },
    { icon: <Circle size={16} />, title: 'Urban stance', desc: 'Compact footprint, confident wheel arches.' },
  ]

  return (
    <section className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-semibold">Exterior, distilled</h2>
          <p className="mt-3 text-white/60">Every line purposeful. A presence that turns streets into runways.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="mt-3 font-medium">{p.title}</h3>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-video rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" alt="Car exterior" className="h-full w-full object-cover opacity-80 mix-blend-screen" />
        </motion.div>
      </div>
    </section>
  )
}

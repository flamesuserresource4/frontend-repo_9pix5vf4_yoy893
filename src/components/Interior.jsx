import { motion } from 'framer-motion'
import { Seat, Fan, Music2, Sun } from 'lucide-react'

export default function Interior() {
  const features = [
    { icon: <Seat size={18} />, title: 'Premium seating', desc: 'Sculpted seats with breathable performance fabric.' },
    { icon: <Fan size={18} />, title: 'Climate comfort', desc: 'Dual-zone climate and purifying micro-filter.' },
    { icon: <Music2 size={18} />, title: 'Immersive audio', desc: '12-speaker surround tuned for the cabin.' },
    { icon: <Sun size={18} />, title: 'Panoramic glass', desc: 'Expansive roof floods the cabin with light.' },
  ]

  return (
    <section id="interior" className="relative bg-zinc-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-5xl font-semibold">Calm, considered interior</h2>
          <p className="mt-3 text-white/60 max-w-2xl">Crafted surfaces, glowing accents, and intuitive controls keep you focused on the flow of the city.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/90">
                {f.icon}
              </div>
              <h3 className="mt-4 font-medium text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-white/60">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

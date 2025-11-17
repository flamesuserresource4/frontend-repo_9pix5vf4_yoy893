import { motion } from 'framer-motion'
import { ShieldCheck, Radar, BellRing, Camera } from 'lucide-react'

export default function Safety() {
  const items = [
    { icon: <Radar size={18} />, title: 'CitySense ADAS', desc: 'Adaptive cruise, lane keep, blind-spot watch built for urban flow.' },
    { icon: <Camera size={18} />, title: '360° vision', desc: 'Surround cameras and parking assist for tight spaces.' },
    { icon: <BellRing size={18} />, title: 'Active protection', desc: 'Automatic emergency braking with pedestrian detection.' },
    { icon: <ShieldCheck size={18} />, title: 'Rigid safety cell', desc: 'Ultra-high-strength frame and 8-airbag coverage.' },
  ]

  return (
    <section id="safety" className="relative bg-zinc-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold">Confidence, standard</h2>
            <p className="mt-3 text-white/60 max-w-2xl">Advanced assistance keeps you aware and protected without overwhelming you.</p>
          </div>
          <div className="hidden md:block text-right text-white/50">Top safety suite in class</div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">{it.icon}</div>
              <h3 className="mt-3 font-medium">{it.title}</h3>
              <p className="text-sm text-white/60">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

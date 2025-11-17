import { motion } from 'framer-motion'
import { Cpu, Smartphone, Satellite, BatteryCharging } from 'lucide-react'

export default function Technology() {
  const tech = [
    { icon: <Smartphone size={18} />, title: 'Seamless connectivity', desc: 'Wireless CarPlay/Android Auto, OTA updates, and a responsive UI.' },
    { icon: <Cpu size={18} />, title: 'Urban drive brain', desc: 'Smart torque vectoring for agile, efficient city handling.' },
    { icon: <BatteryCharging size={18} />, title: 'Quick charge', desc: '10-80% in 28 minutes on DC fast chargers with battery pre-heat.' },
    { icon: <Satellite size={18} />, title: 'Intelligent nav', desc: 'Real-time traffic and charging route planning built-in.' },
  ]

  return (
    <section id="technology" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-5xl font-semibold">Technology that fades into the background</h2>
            <p className="mt-3 text-white/60">More awareness, less distraction. Thoughtful tech that just works.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {tech.map((t, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">{t.icon}</div>
                  <h3 className="mt-3 font-medium">{t.title}</h3>
                  <p className="text-sm text-white/60">{t.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-video rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-tr from-zinc-900 to-zinc-800">
            <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop" alt="Car technology interior" className="h-full w-full object-cover opacity-90" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { Menu, Car, Shield, Gauge, Smartphone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/50 bg-black/20">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center text-zinc-900">
            <Car size={18} />
          </div>
          <span className="text-white/90 font-semibold tracking-wide">Astra Urban</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#design" className="hover:text-white transition">Design</a>
          <a href="#interior" className="hover:text-white transition">Interior</a>
          <a href="#safety" className="hover:text-white transition flex items-center gap-2"><Shield size={16}/>Safety</a>
          <a href="#technology" className="hover:text-white transition flex items-center gap-2"><Smartphone size={16}/>Tech</a>
          <a href="#value" className="hover:text-white transition">Value</a>
        </div>
        <button className="md:hidden h-10 w-10 rounded-full border border-white/10 text-white/80 flex items-center justify-center">
          <Menu size={18} />
        </button>
        <a href="#value" className="hidden md:inline-flex bg-white text-zinc-900 px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition">Reserve now</a>
      </nav>
    </header>
  )
}

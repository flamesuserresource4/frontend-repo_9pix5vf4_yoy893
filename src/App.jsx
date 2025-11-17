import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Interior from './components/Interior'
import Exterior from './components/Exterior'
import Safety from './components/Safety'
import Technology from './components/Technology'
import ValueCTA from './components/ValueCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Exterior />
      <Interior />
      <Safety />
      <Technology />
      <ValueCTA />
      <Footer />
    </div>
  )
}

export default App

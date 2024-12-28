import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className="bg-[#0d1117] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ContactForm />
    </div>
  )
}

export default App

import About from "./sections/About.jsx"
import Clients from "./sections/Clients.jsx"
import Contact from "./sections/Contact.jsx"
import Hero from "./sections/Hero.jsx"
import Navbar from "./sections/Navbar.jsx"
import Projects from "./sections/Projects.jsx"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar /> 
      <Hero />
      <About />
      <Projects />
      <Clients />
      
      <Contact />
    </main>
  )
}

export default App
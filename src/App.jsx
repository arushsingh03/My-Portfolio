import About from "./sections/About.jsx"
import Hero from "./sections/Hero.jsx"
import Navbar from "./sections/Navbar.jsx"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar /> 
      <Hero />
      <About />
    </main>
  )
}

export default App
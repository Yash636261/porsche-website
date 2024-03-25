import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"

const App =()=> {

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App

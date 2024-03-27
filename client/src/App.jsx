import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import ModelsChooser from "./components/ModelsChooser"
import Navbar from "./components/Navbar"

const App =()=> {

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Highlights />
      <ModelsChooser />
    </main>
  )
}

export default App

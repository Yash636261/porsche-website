import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/helper/Model"
import ModelsChooser from "./components/ModelsChooser"
import Navbar from "./components/Navbar"

const App =()=> {

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Highlights />
      <ModelsChooser />
      <Model />
    </main>
  )
}

export default App

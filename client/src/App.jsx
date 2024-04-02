import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
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
      <Footer />
    </main>
  )
}

export default App

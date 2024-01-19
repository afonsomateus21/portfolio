import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { Technologies } from "./components/Technologies"
import { motion } from "framer-motion"

export function App() {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <NavBar />

      <main className="w-full mt-20">
        <Banner />
        <About />
        <Technologies />
        <Footer />
      </main>
    </motion.div>
  )
}


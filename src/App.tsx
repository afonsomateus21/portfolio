// import { About } from "./components/About"
import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { NavBar } from "./components/NavBar"
import { Technologies } from "./components/Technologies"

export function App() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <main className="w-full mt-20">
        <Banner />
        <About />
        <Technologies />
      </main>
    </div>
  )
}


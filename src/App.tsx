import { About } from "./components/About"
import { NavBar } from "./components/NavBar"

export function App() {
  return (
    <div className="h-full md:h-screen flex flex-col bg-gray-50">
      <NavBar />

      <main className="w-full mt-32">
        <About />
      </main>
    </div>
  )
}


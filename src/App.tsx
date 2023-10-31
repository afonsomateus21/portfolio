import { About } from "./components/About"
import { NavBar } from "./components/NavBar"

export function App() {
  return (
    <div className="h-full flex flex-col bg-blue-950">
      <NavBar />

      <main className="w-full mt-32">
        <About />
      </main>
    </div>
  )
}


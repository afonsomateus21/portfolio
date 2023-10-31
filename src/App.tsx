import { About } from "./components/About"
import { NavBar } from "./components/NavBar"

export function App() {
  return (
    <div className="h-screen flex flex-col bg-blue-950">
      <NavBar />

      <main className="flex-grow mt-32">
        <About />
      </main>
    </div>
  )
}


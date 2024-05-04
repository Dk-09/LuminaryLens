import Nav from "./components/Nav"
import gsap from "gsap-trial"
import { useGSAP } from "@gsap/react"
import { ScrollSmoother, ScrollTrigger } from "gsap-trial/all"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Team from "./pages/Team"

function App() {

  document.addEventListener("mousemove", (e) => {
    gsap.to(".cur", {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: .7,
      autoAlpha: 1,
    })
  })

  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    ScrollSmoother.create({ 
      wrapper: "#smooth-wrapper",
      content: "#smooth-content", 
      smooth: 2,
      effects: true,
    })

  })
  
  return (
    <div id="main" className="overflow-hidden selection:text-green">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Home/>
          <Projects />
          <Services />
          <About />
          <Team />
        </div>
      </div>
      <div className="fixed w-screen h-screen pointer-events-none">
        <div className="cur rounded-full w-4 h-4 bg-green z-100"></div>
      </div>
      <Nav/>
    </div>
  )
}

export default App

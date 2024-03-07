import Nav from "./components/Nav"
import gsap from "gsap-trial"
import { useGSAP } from "@gsap/react"
import Hero from "./components/Hero"
import { DrawSVGPlugin, ScrollSmoother, ScrollTrigger } from "gsap-trial/all"


function App() {

  useGSAP(() => {

    gsap.registerPlugin(DrawSVGPlugin, ScrollSmoother, ScrollTrigger)

    ScrollSmoother.create({ 
      wrapper: "#smooth-wrapper",
      content: "#smooth-content", 
      smooth: 2,
      effects: true,
    })
    
    gsap.set(".HeroText", {yPercent: 100})
    gsap.set(".draw-me", {drawSVG: "0%"})
    gsap.set(".cur", {autoAlpha: 0})


    document.addEventListener("mousemove", (e) => {
      gsap.to(".cur", {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: .7,
        autoAlpha: 1,
      })
    })

    const logo = gsap.timeline()
    
    logo
    .to(".logo-bg",{scaleX: 1, duration: .3, delay: 1})
    .to(".logo-text", {opacity: 1, duration: .2})
    .to(".logo-bg", {scaleX: 0, duration: .3})

    gsap.to(".HeroText",{
      yPercent: 0, 
      ease: "power4.out",
      duration: 2,
      delay: 1,
    })

    gsap.to(".draw-me", {
      drawSVG: "100%",
      duration: 2,
      stagger: .5,
      delay: 1
    })

    gsap.to(".cover",{
      height: "0%",
      ease: "power4.out",
      duration: 2,
      delay: 2.5,
      stagger: .2,
    })

  })
  
  return (
    <div id="main" className="overflow-hidden selection:text-green">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="HOME" className="relative h-screen w-screen overflow-hidden text-white flex flex-col">
            <video  id="main-video" className="absolute top-0 left-0 insert-0 z-[-10] min-h-full object-cover">
              <source src="./src/assets/1.mp4" type="video/mp4"/>
            </video>
            <Hero />
            <div className="flex flex-row absolute bottom-0 z-[-5] w-full h-full">
              {/* "DRY" MY ASS */}
              <div className="cover w-full h-full bg-black"></div>  
              <div className="cover w-full h-full bg-black"></div>
              <div className="cover w-full h-full bg-black"></div>
              <div className="cover w-full h-full bg-black"></div>
            </div>
          </div>
          <div id="PROJECTS" className="h-screen w-screen bg-black">
            test
          </div>
        </div>
      </div>
      <div className="fixed w-screen h-screen">
        <div className="cur rounded-full w-4 h-4 bg-green z-100"></div>
      </div>
      <Nav/>
    </div>
  )
}

export default App

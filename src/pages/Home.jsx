import Hero from "../components/Hero"
import { useGSAP } from "@gsap/react"
import gsap from "gsap-trial"
import { DrawSVGPlugin } from "gsap-trial/all"

export default function Home(){
    useGSAP(() => {
      gsap.registerPlugin( DrawSVGPlugin )
    
      gsap.set(".HeroText", {yPercent: 100})
      gsap.set(".draw-me", {drawSVG: "0%"})
      gsap.set(".cur", {autoAlpha: 0})

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

    return(
        <section id="HOME" className="relative h-screen w-screen overflow-hidden text-white flex flex-col">
          <video autoPlay muted loop id="main-video" className="absolute top-0 left-0 insert-0 z-[-10] h-full lg:min-h-full lg:min-w-full object-cover">
            <source src="/images/1.mp4" type="video/mp4"/>
          </video>
          <Hero />
          <div className="flex flex-row absolute bottom-0 z-[-5] w-full h-full">
            {/* "DRY" MY ASS */}
            <div className="cover w-full h-full bg-black"></div>  
            <div className="cover w-full h-full bg-black"></div>
            <div className="cover w-full h-full bg-black"></div>
            <div className="cover w-full h-full bg-black"></div>
          </div>
        </section>
    )
}
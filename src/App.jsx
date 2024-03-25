import Nav from "./components/Nav"
import gsap from "gsap-trial"
import { useGSAP } from "@gsap/react"
import Hero from "./components/Hero"
import { DrawSVGPlugin, ScrollSmoother, ScrollTrigger } from "gsap-trial/all"
import { useEffect } from "react"
import Card from "./components/Card"

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
          <section id="HOME" className="relative h-screen w-screen overflow-hidden text-white flex flex-col">
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
          </section>
          <section id="PROJECTS" className="w-screen bg-black">
            <div className="flex flex-col bg-black">
              <div className="my-20 px-16 py-8 h-2/6 w-screen text-left text-MessinaRegular text-9xl text-white">
                PROJ<span className="underline decoration-8 decoration-green underline-offset-9">E</span>CTS
              </div>
              <div  className="flex md:flex-row sm:flex-col text-white px-16 text-RanadeRegular text-3xl sm:gap-0 md:gap-20">
                <div className="md:w-2/5 sm:w-full">
                  <Card 
                    title="WEDDING"
                    img1="1.png"
                    des="RANVIR KAPOOR'S WEDDING"
                    year="2022"
                    pad="md:mt-80"
                  />
                  <div className="relative mt-20 mb-20 lg:mt-80 lg:mb-80 sm:hidden md:block">
                  <svg viewBox="0 0 171 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_56_120)">
                    <path d="M115.359 116.103L114.859 120.123L118.878 119.65L119.383 115.635L115.359 116.103ZM115.86 112.083L70.3943 117.367L69.3937 125.406L114.859 120.123L115.86 112.083ZM119.383 115.635L125.036 70.2145L116.989 71.1497L111.336 116.571L119.383 115.635ZM118.554 112.934L56.3474 50.2195L49.9576 56.5575L112.164 119.272L118.554 112.934Z" fill="#C9C2AC"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_56_120">
                    <rect width="135" height="106" fill="white" transform="translate(170.747 76.0933) rotate(135.233)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <svg className="absolute top-0 left-0" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="168" cy="168" r="166.5" stroke="#C9C2AC" strokeWidth="3"/>
                  </svg>
                  </div>
                  <Card 
                    title="PET"
                    img1="3.png"
                    des="GIVE YOUR FRIEND THE BEST"
                    year="2022"
                  />
                </div>
                <div className="md:w-3/5 sm:w-full">
                  <Card 
                    title="MODELING"
                    img1="5.png"
                    des="GIGI HADID'S PHOTOSHOOT"
                    year="2021"
                  />
                  <Card 
                    title="COUPLE"
                    img1="7.png"
                    des="VANITY FAIR OSCAR PARTY"
                    year="2024"
                    pad="md:mt-40"
                  />
                  <div className="relative mt-20 mb-20 lg:mt-60 lg:mb-40 sm:hidden md:block">
                  <svg viewBox="0 0 171 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_56_120)">
                    <path d="M115.359 116.103L114.859 120.123L118.878 119.65L119.383 115.635L115.359 116.103ZM115.86 112.083L70.3943 117.367L69.3937 125.406L114.859 120.123L115.86 112.083ZM119.383 115.635L125.036 70.2145L116.989 71.1497L111.336 116.571L119.383 115.635ZM118.554 112.934L56.3474 50.2195L49.9576 56.5575L112.164 119.272L118.554 112.934Z" fill="#C9C2AC"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_56_120">
                    <rect width="135" height="106" fill="white" transform="translate(170.747 76.0933) rotate(135.233)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <svg className="absolute top-0 left-0" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="168" cy="168" r="166.5" stroke="#C9C2AC" strokeWidth="3"/>
                  </svg>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-center align-center sm:hidden md:inline-flex">
                    <div className="relative mt-20 mb-20 lg:mt-32 lg:mb-32 w-1/2 ">
                      <svg viewBox="0 0 171 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_56_120)">
                        <path d="M115.359 116.103L114.859 120.123L118.878 119.65L119.383 115.635L115.359 116.103ZM115.86 112.083L70.3943 117.367L69.3937 125.406L114.859 120.123L115.86 112.083ZM119.383 115.635L125.036 70.2145L116.989 71.1497L111.336 116.571L119.383 115.635ZM118.554 112.934L56.3474 50.2195L49.9576 56.5575L112.164 119.272L118.554 112.934Z" fill="#C9C2AC"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_56_120">
                        <rect width="135" height="106" fill="white" transform="translate(170.747 76.0933) rotate(135.233)"/>
                        </clipPath>
                        </defs>
                      </svg>
                      <svg className="absolute top-0 left-0" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="168" cy="168" r="166.5" stroke="#C9C2AC" strokeWidth="3"/>
                      </svg>
                    </div>
                  </div>
                  <Card 
                    title="FAMILY"
                    img1="9.png"
                    des="CAPTURE YOUR FAMILIES HAPPY MOMENT WITH OUR LENS"
                    year="2023"
                  />
                  <Card 
                    title="WEDDING"
                    img1="11.png"
                    des="KL RAHUL'S WEDDING"
                    year="2024"
                    pad="md:mt-10"
                  />
                </div>
              </div>
            </div> 
          </section>
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

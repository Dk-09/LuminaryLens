import { SplitText, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all"
import { useGSAP } from "@gsap/react"
import gsap from "gsap-trial"
import Arrow from "../components/Arrow"
import { cos } from "three/examples/jsm/nodes/Nodes.js"

export default function Services(){
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin) 

    let split = new SplitText(".mtext2", {type: "chars"})
    gsap.set(["#image1", "#image2", "#image3", "#image4", "#image5"],{visibility:"hidden",opacity: 0})
    gsap.set(["#line1" ,"#line2", "#line3", "#line4", "#line5"], {width: 0})

    gsap.from(split.chars,{
      scrollTrigger: {
        trigger: ".mtext2",
        toggleActions: "play none none none",
      },
      yPercent: 100,
      duration: 1,
      stagger: .05,
      ease: "power3.out",
    })


    function handleMouseEnter(i){
      gsap.to("#image" + i,{
          visibility: "visible",
          duration: 1,
          opacity: 1,
      })
      gsap.to("#line" + i, {
        width: "100%",
      })
      gsap.to(".text" + i, {
        color: "#C7EF00",
      })
    }

    function handleMouseMove(i, e){
      const rect = document.getElementById("image" + i).getBoundingClientRect() 
      let xTo = gsap.quickTo("#image" + i, "x",{
        duration: 0.6, 
        ease: "power3",
      }),
      yTo = gsap.quickTo("#image" + i, "y",{
        duration: 0.6, 
        ease: "power3",
      })
      xTo(e.clientX - rect.left - rect.width / 2)
      yTo(e.clientY - rect.top - rect.height / 2)
    }

    function handleMouseLeave(i){
      gsap.to("#image" + i,{
          visibility: "hidden",
          duration: 1,
          opacity: 1,
      })
      gsap.to("#line" + i, {
        width: "0%",
      })
      gsap.to(".text" + i, {
        color: "gray",
      })
    }
    
    for(let i=1; i < 6; i++){
      const id  = document.getElementById("section" + i)
      id.addEventListener("mouseenter", (e) => {
        handleMouseMove(i, e)
        handleMouseEnter(i)
      })
      id.addEventListener("mousemove", (e) => {
        handleMouseMove(i, e)
      })
      id.addEventListener("mouseleave", () => handleMouseLeave(i))
    }


  })
    return(
        <div id="SERVICES" className="py-40 mx-12">
            <div className="flex flex-col text-black mb-40  h-4/6 text-left text-MessinaRegular text-9xl overflow-hidden">
              <span className="mtext2">
                OUR
              </span> 
              <span className="mtext2">
                SERVICE
                <span className="text-green">$</span>
              </span> 
            </div>
            <div className="flex flex-col gap-16">
            <div id="section1" className="relative cursor-crosshair flex flex-col">
              <div className="flex flex-row">
                <img id="image1" className="z-[-1] fixed pointer-events-none" src="/images/wedding.jpg"></img>
                <div className="flex-grow">
                  <span className="text1 z-100 font-MessinaLight text-8xl text-gray">Wedding</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
              </div>
              <hr id="line1" className="h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section2" className="relative cursor-crosshair flex flex-col">
              <div className="flex flex-row">
                <img id="image2" className="z-[-1] pointer-events-none fixed" src="/images/modeling.jpg"></img>
                <div className="flex-grow">
                  <span className="text2 z-50 font-MessinaLight text-8xl text-gray ">Modeling</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
              </div>
              <hr id="line2" className="h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section3" className="relative cursor-crosshair flex flex-col">
              <div className="flex flex-row">
                <img id="image3" className="z-[-1] pointer-events-none fixed" src="/images/image 3.png"></img>
                <div className="flex-grow">
                  <span className="text3 z-50 font-MessinaLight text-8xl text-gray">Family</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
              </div>
              <hr id="line3" className="h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section4" className="relative cursor-crosshair flex flex-col">
              <div className="flex flex-row">
                <img id="image4" className="z-[-1] pointer-events-none fixed  " src="/images/image 4.png"></img>
                <div className="flex-grow">
                  <span className="text4 z-50 font-MessinaLight text-8xl text-gray">Couple</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
              </div>
              <hr id="line4" className="h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section5" className="relative cursor-crosshair flex flex-col">
              <div className="flex flex-row">
                <img id="image5" className="z-[-1] pointer-events-none fixed " src="/images/image 5.png"></img>
                <div className="flex-grow">
                  <span className="text5 z-50 font-MessinaLight text-8xl text-gray">Pet</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
              </div>
              <hr id="line5" className="h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
          </div>
        </div>

    )
}
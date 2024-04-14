import { SplitText, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all"
import { useGSAP } from "@gsap/react"
import gsap from "gsap-trial"
import Arrow from "../components/Arrow"

export default function Services(){
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin) 

    let split = new SplitText(".mtext2", {type: "chars"})

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
    
    for(let i=1; i < 6; i++){
      const id  = document.getElementById(i)
      id.addEventListener("mouseenter", () => {
        console.log("entered")
      })
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
            <div className="flex flex-col gap-20">
            <div id="1" className="relative cursor-crosshair flex flex-row">
                <img className="pointer-events-none fixed hidden" src="/images/image 1.png"></img>
                <div className="flex-grow">
                  <span className="font-MessinaLight text-8xl text-gray">Wedding</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
            </div>
            <div id="2" className="relative cursor-crosshair flex flex-row">
                <img className="pointer-events-none fixed hidden" src="/images/image 2.png"></img>
                <div className="flex-grow">
                  <span className="font-MessinaLight text-8xl text-gray">Modeling</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
            </div>
            <div id="3" className="relative cursor-crosshair flex flex-row">
                <img className="pointer-events-none fixed" src="/images/image 3.png"></img>
                <div className="flex-grow">
                  <span className="font-MessinaLight text-8xl text-gray">Family</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
            </div>
            <div id="4" className="relative cursor-crosshair flex flex-row">
                <img className="pointer-events-none fixed" src="/images/image 4.png"></img>
                <div className="flex-grow">
                  <span className="font-MessinaLight text-8xl text-gray">Couple</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
            </div>
            <div id="5" className="relative cursor-crosshair flex flex-row">
                <img className="pointer-events-none fixed" src="/images/image 5.png"></img>
                <div className="flex-grow">
                  <span className="font-MessinaLight text-8xl text-gray">Pet</span>
                </div>
                <div className="">
                  <Arrow />
                </div>
            </div>
            </div>
        </div>

    )
}
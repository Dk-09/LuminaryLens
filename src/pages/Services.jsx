import { SplitText, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all"
import { useGSAP } from "@gsap/react"
import gsap from "gsap-trial"
import Arrow from "../components/Arrow"

export default function Services(){
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin) 

    let split = new SplitText(".mtext2", {type: "chars"})
    gsap.set(["#image1", "#image2", "#image3", "#image4", "#image5"],{visibility:"hidden",opacity: 0})
    gsap.set(["#line1" ,"#line2", "#line3", "#line4", "#line5"], {width: 0})

    gsap.from(split.chars,{
      scrollTrigger: {
        trigger: ".mtext2",
        toggleActions: "play complete restart reset",
      },
      yPercent: 100,
      duration: 1,
      stagger: .05,
      ease: "power3.out",
    })


    function handleMouseEnter(i){
      gsap.to("#image" + i,{
          visibility: "visible",
          duration: .5,
          opacity: 1,
          overwrite: "auto",
      })
      gsap.to("#arrow" + i,{
          opacity: 1,
          rotate: -45,
          fill: "#C7EF00",
      })
      gsap.to("#arrow" + i + " .arrow",{
          fill: "#C7EF00",
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
      xTo(e.clientX - rect.left +  rect.left - rect.width /2 )
      yTo(e.clientY - rect.top - rect.height)
    }

    function handleMouseLeave(i){
      gsap.to("#image" + i,{
          visibility: "hidden",
          duration: .5,
          opacity: 0,
          overwrite: "auto",
      })
      gsap.to("#arrow" + i,{
          opacity: 1,
          rotate: 0,
      })
      gsap.to("#arrow" + i + " .arrow",{
          fill: "gray",
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
            <div className="flex flex-col">
            <div id="section1" className="relative cursor-crosshair flex flex-col h-40">
              <div className="flex flex-row">
                <img id="image1" className="w-1/2 h-auto z-5 fixed pointer-events-none" src="/images/wedding.jpg"></img>
                <div className="flex-grow z-10">
                  <span className="text1 font-MessinaLight text-8xl text-gray">Wedding</span>
                </div>
                <div className="z-10">
                  <Arrow 
                    id="arrow1"   
                 />
                </div>
              </div>
              <hr id="line1" className="z-10 h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section2" className="relative cursor-crosshair flex flex-col h-40">
              <div className="flex flex-row">
                <img id="image2" className="w-1/2 h-auto z-5 pointer-events-none fixed" src="/images/modeling.jpg"></img>
                <div className="flex-grow z-10">
                  <span className="text2 font-MessinaLight text-8xl text-gray ">Modeling</span>
                </div>
                <div className="z-10">
                  <Arrow
                    id="arrow2"
                  />
                </div>
              </div>
              <hr id="line2" className="z-10 h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section3" className="relative cursor-crosshair flex flex-col h-40">
              <div className="flex flex-row">
                <img id="image3" className="w-1/2 z-5 pointer-events-none fixed" src="/images/family.jpg"></img>
                <div className="flex-grow z-10">
                  <span className="text3 font-MessinaLight text-8xl text-gray">Family</span>
                </div>
                <div className="z-10">
                  <Arrow 
                    id="arrow3" 
                  />
                </div>
              </div>
              <hr id="line3" className="z-10 h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section4" className="relative cursor-crosshair flex flex-col h-40">
              <div className="flex flex-row">
                <img id="image4" className="w-1/2 z-5 pointer-events-none fixed" src="/images/couple.jpg"></img>
                <div className="flex-grow z-10">
                  <span className="text4 font-MessinaLight text-8xl text-gray">Couple</span>
                </div>
                <div className="z-10">
                  <Arrow 
                    id="arrow4" 
                  />
                </div>
              </div>
              <hr id="line4" className="z-10 h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
            <div id="section5" className="relative cursor-crosshair flex flex-col h-40">
              <div className="flex flex-row">
                <img id="image5" className="w-1/2 z-5 pointer-events-none fixed " src="/images/pet.jpg"></img>
                <div className="flex-grow z-10">
                  <span className="text5 font-MessinaLight text-8xl text-gray">Pet</span>
                </div>
                <div className="z-10">
                  <Arrow 
                    id="arrow5" 
                  />
                </div>
              </div>
              <hr id="line5" className="z-10 h-1 bg-green text-transparent w-full my-4"></hr>
            </div>
          </div>
        </div>

    )
}
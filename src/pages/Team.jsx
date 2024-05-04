import { SplitText, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all"
import { useGSAP } from "@gsap/react"
import gsap from "gsap-trial"


export default function Team(){
    useGSAP(() => {

        gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin) 

        gsap.set(["#personImg1", "#personImg2", "#personImg3", "#personImg4", "#personImg5"], {autoAlpha: 0, display: "none"})
        let split = new SplitText(".mtext3", {type: "chars"})

        gsap.from(split.chars,{
          scrollTrigger: {
            trigger: ".mtext3",
            toggleActions: "play complete none reset",
          },
          yPercent: 100,
          duration: 1,
          stagger: .05,
          ease: "power3.out",
        })
        
        function handleMouseEnter(i){
          gsap.to("#personImg" + i,{
              duration: .5,
              autoAlpha: 1,
              display: "block",
          })
        }

        function handleMouseMove(i, e){
          const rect = document.getElementById("personImg" + i).getBoundingClientRect() 
          gsap.to("#personImg" + i, {
            x: e.clientX - rect.left +  rect.left - rect.width /2,
            y: e.clientY - rect.top - rect.height,
            duration: 0.6,
            ease: "power3",
          })
        }

        function handleMouseLeave(i){
          gsap.to("#personImg" + i,{
              duration: .5,
              autoAlpha: 0,
              display: "none",
          })
        }
    
        for(let i=1; i < 6; i++){
          const id  = document.getElementById("person" + i)
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
        <div id="TEAM" className="bg-black py-40 px-16">
            <div className="flex flex-col mb-40 text-white h-4/6 text-left text-MessinaRegular text-9xl">
                <div className="overflow-hidden">
                  <span className="mtext3">
                    OUR
                  </span> 
                </div>
                <div className="overflow-hidden">
                  <span className="mtext3">
                    TEAM
                    <span className="text-green mtext3">+</span>
                  </span> 
                </div>
            </div>
            <div className="flex flex-col align-end">
            <div id="person1" className="relative cursor-crosshair flex flex-col h-32 justify-center align-center">
              <div className="flex flex-row w-full">
                <img id="personImg1" className="w-80 h-auto z-11 fixed pointer-events-none" src="/images/person 1.jpg"></img>
                <div className="flex flex-row z-10 w-full text-center font-MessinaLight">
                  <span className="text-xl mt-auto text-gray ">Since 2015</span>
                  <span className="flex-grow text-6xl text-gray ">Avalon <span className="text-white">Sterling</span></span>
                  <span className="text-xl mt-auto text-gray ">Photgrapher</span>
                </div>
              </div>
              <hr className="z-10  bg-gray text-transparent w-full mt-4"></hr>
            </div>
            <div id="person2" className="relative cursor-crosshair flex flex-col h-32 justify-center align-center">
              <div className="flex flex-row w-full">
                <img id="personImg2" className="w-80 h-auto z-11 fixed pointer-events-none" src="/images/person 2.jpg"></img>
                <div className="flex flex-row z-10 w-full text-center font-MessinaLight">
                  <span className="text-xl mt-auto text-gray">Since 2017</span>
                  <span className="flex-grow text-6xl text-gray">Phoenix <span className="text-white">Hawthorne</span></span>
                  <span className="text-xl mt-auto text-gray">Art Director</span>
                </div>
              </div>
              <hr className="z-10  bg-gray text-transparent w-full mt-4"></hr>
            </div>
            <div id="person3" className="relative cursor-crosshair flex flex-col h-32 justify-center align-center">
              <div className="flex flex-row w-full">
                <img id="personImg3" className="w-80 h-auto z-11 fixed pointer-events-none" src="/images/person 3.jpg"></img>
                <div className="flex flex-row z-10 w-full text-center font-MessinaLight">
                  <span className="text-xl mt-auto text-gray">Since 2015</span>
                  <span className="flex-grow text-6xl text-gray">Luna <span className="text-white">Evergreen</span></span>
                  <span className="text-xl mt-auto text-gray">Manager</span>
                </div>
              </div>
              <hr className="z-10  bg-gray text-transparent w-full mt-4"></hr>
            </div>
            <div id="person4" className="relative cursor-crosshair flex flex-col h-32 justify-center align-center">
              <div className="flex flex-row w-full">
                <img id="personImg4" className="w-80 h-auto z-11 fixed pointer-events-none" src="/images/person 4.jpg"></img>
                <div className="flex flex-row z-10 w-full text-center font-MessinaLight">
                  <span className="text-xl mt-auto text-gray">Since 2016</span>
                  <span className="flex-grow text-6xl text-gray">Orion <span className="text-white">Frost</span></span>
                  <span className="text-xl mt-auto text-gray">Makeup Artist</span>
                </div>
              </div>
              <hr className="z-10  bg-gray text-transparent w-full mt-4"></hr>
            </div>
            <div id="person5" className="relative cursor-crosshair flex flex-col h-32 justify-center align-center">
              <div className="flex flex-row w-full">
                <img id="personImg5" className="w-80 h-auto z-11 fixed pointer-events-none" src="/images/person 5.jpg"></img>
                <div className="flex flex-row z-10 w-full text-center font-MessinaLight">
                  <span className="text-xl mt-auto text-gray">Since 2015</span>
                  <span className="flex-grow text-6xl text-gray">Nova <span className="text-white">Wilder</span></span>
                  <span className="text-xl mt-auto text-gray">Photo Editor</span>
                </div>
              </div>
              <hr className="z-10  bg-gray text-transparent w-full mt-4"></hr>
            </div>
            </div>
            <div className="text-2xl pt-14 font-MessinaLight text-gray">
                +15 OTHER MEMBERS
            </div>
        </div>
    )
}
import gsap from "gsap-trial";
import { useGSAP } from "@gsap/react";

export default function Menu({hamButton, setHamButton}){

    const pages = {HOME: "HOME", PROJECTS: "PROJECTS", SERVICES: "SERVICES",ABOUTUS: "ABOUTUS", TEAM: "TEAM"}

    async function handleHamButtomClick(value){
        const element = document.getElementById(value)
        if(element){
            const container = document.documentElement
            const topOffset = element.getBoundingClientRect().top;
            container.scrollBy({
              top: topOffset,
              behavior: 'smooth'
            });
        }
        const animationPromise = new Promise((resolve) => {
            if(hamButton == true){
                gsap.set(".fade", {backgroundColor: "rgba(0,0,0,1)"}) 

                gsap.to([".l1"],{
                    rotate: 0,
                    duration: .5,
                })
                gsap.to([".l2"],{
                    rotate: 0,
                    duration: .5,
                })
                gsap.to([".l1"],{
                    y: 0,
                    duration: .7,
                    delay: .5,
                })
                gsap.to([".l2"],{
                    y: 0,
                    duration: .7,
                    delay: .5,
                })

                gsap.to(".animateText",{
                    yPercent: -100,
                    duration: .8,
                    stagger: .1,
                    opacity: 0,
                    overwrite: true,
                })

                gsap.to(".fade",{
                    opacity: 0,
                    duration: .2,
                    delay: 1,
                    overwrite: false,
                    onComplete: resolve,
                })
            }
        })
        await animationPromise
        hamButton == true ? setHamButton(false) : setHamButton(true)
    }

    function menuTextAniIn(value){
        gsap.set("#" + value + "2", {yPercent: 0} )

        gsap.to("#" + value + "1", {
            duration: .3,
            ease: "power4.inOut",
            yPercent: -100,
        })
        gsap.to("#" + value + "2", {
            duration: .3,
            ease: "power4.inOut",
            yPercent: -100,
        })
    }
    
    function menuTextAniOut(value){
        gsap.to("#" + value + "1", {
            duration: .3,
            ease: "power4.inOut",
            yPercent: 0,
        })
        gsap.to("#" + value + "2", {
            duration: .3,
            ease: "power4.inOut",
            yPercent: 0,
        })
    }


    useGSAP(() => {
        document.addEventListener('keydown', (e) => {
            e.key == "Escape" ? handleHamButtomClick() : null
        })

        if(hamButton == true){
            gsap.set(".animateText", {yPercent: 120})
            const hamAni = gsap.timeline()
            hamAni.to(".l1", {
                y: 6,
                duration: .5,
            })
            .to(".l2", {
                y: -6,
                duration: .5,
            }, 0)
            hamAni.to(".l1", {
                rotate: 45,
                duration: .5,
            })
            .to(".l2", {
                rotate: -45,
                duration: .5,
            }, .5)

            gsap.to([".fade"],{
                opacity: 1,
                duration: .5,
            })
            gsap.to(".animateText",{
                yPercent: 0,
                ease: "power4.out",
                duration: 1,
                stagger: .2,
                overwrite: true,
            })
        }
    }, [hamButton])

    return(
        <div className="flex flex-col h-screen w-screen fade bg-black">
            <div className="flex flex-row w-screen px-4 lg:px-16 py-8">
                <div id="LOGO" className="relative logo font-Stardom text-4xl md:text-6xl">
                    LL
                </div> 
                <div onClick={handleHamButtomClick} id="HAM" className="flex justify-center items-center cursor-pointer float-right ml-auto">
                    <svg viewBox="0 0 64 24" className="w-16 h-10">
                      <line className="lines l1 mx-auto my-auto" x1="8" y1="6" x2="56" y2="6" stroke="currentColor" strokeWidth="2" />
                      <line className="lines l2 mx-auto my-auto" x1="8" y1="18" x2="56" y2="18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>     
            </div>
            <div className="flex flex-col flex-grow justify-start py-20 md:py-0 md:justify-center items-center">
                <div className="text-5xl md:text-9xl text-center font-MessinaBold">
                    {Object.entries(pages).map(entry => {
                        const[key, value] = entry;
                        const Id1 = key + "1"
                        const Id2 = key + "2"

                        return(
                            <div className="overflow-hidden"
                                onClick={() => handleHamButtomClick(value)} 
                                key={value} 
                                onMouseEnter={() => menuTextAniIn(value)} 
                                onMouseLeave={() => menuTextAniOut(value)} >
                                <div className="inline-block animateText cursor-pointer">
                                    <div className="flex flex-col h-12 md:h-28 overflow-hidden">
                                        <a id={Id1} className="block">{key}</a>
                                        <a id={Id2} className="block font-MessinaLight">{key}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
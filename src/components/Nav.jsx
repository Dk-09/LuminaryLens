import { useEffect, useState } from "react";
import Menu from "./Menu";
import gsap from "gsap-trial"

export default function Nav(){
    const [hamButton, setHamButton] = useState(null)

    useEffect(() => {
        document.body.style.overflow = hamButton ? 'hidden' : 'auto';
    }, [hamButton])

    useEffect(() => {

        function handleScroll(){
            const services = document.getElementById("SERVICES")
            const Nav = document.getElementById("NAV")

            const sectionTop = services.getBoundingClientRect().top.toFixed(0)
            const sectionBot = services.getBoundingClientRect().bottom.toFixed(0)
            const navPositionBot = Nav.getBoundingClientRect().bottom - 50

            if(navPositionBot > sectionTop && navPositionBot < sectionBot){
                gsap.to(".ResponsiveNav",{
                    color: "black",
                    duration: 1,
                })
            }
            else if(navPositionBot < sectionTop || navPositionBot > sectionBot){
                gsap.to(".ResponsiveNav",{
                    color: "white",
                    duration: 1,
                })
            }
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <div id="NAV" className="fixed z-10 text-white">
            { hamButton && <Menu hamButton={hamButton} setHamButton={setHamButton}/>}
            <div className="ResponsiveNav flex flex-row w-screen px-16 py-8">
                <div id="LOGO" className="relative logo font-Stardom text-6xl mix-blend-difference">
                    <span className="logo-text opacity-0">LL</span>
                    <span className="absolute w-full h-full origin-left logo-bg block z-10 left-0 top-0 scale-x-0 bg-white"></span>
                </div> 
                <div onClick={() => {hamButton == true ? setHamButton(false) : setHamButton(true)}} id="HAM" className="flex justify-center items-center cursor-pointer float-right ml-auto">
                    <svg viewBox="0 0 64 24" className="w-16 h-auto">
                      <line className="draw-me lines origin-center" x1="8" y1="6" x2="56" y2="6" stroke="currentColor" strokeWidth="2" />
                      <line className="draw-me lines origin-bottom" x1="8" y1="18" x2="56" y2="18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>     
            </div>
        </div>
    )
}
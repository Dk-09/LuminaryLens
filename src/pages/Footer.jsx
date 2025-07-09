import gsap from 'gsap'
import { useGSAP } from "@gsap/react"

export default function Footer() {

    useGSAP(() => {
        var currenScroll = 0
        var isScrollingDown = true 

        var tween = gsap.to(".marquee__part", {
            xPercent: -100,
            repeat: -1,
            duration: 5,
            ease: "linear",
        })
        gsap.to(".marquee__inner", {
            xPercent: -50,
        })

        window.addEventListener("scroll", () => {
            if(window.scrollY > currenScroll){
                isScrollingDown = true
            }
            else{
                isScrollingDown = false
            }

            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1,
            })

            currenScroll = window.scrollY 
        })
        

    })

    return(
        <div id="FOOTER" className="bg-black text-white">
           <div className="marquee relative bg-green font-MessinaBold text-7xl text-black select-none py-16 uppercase">
                <div className="marquee__inner flex flex-row flex-auto inline-block w-[fit-content]">
                    <div className="marquee__part flex align-center shrink-0">
                        Luminary Lens 📸 Capturing moments 📽️  
                    </div>
                    <div className="marquee__part flex align-center shrink-0">
                        Luminary Lens 📸 Capturing moments 📽️  
                    </div>
                    <div className="marquee__part flex align-center shrink-0">
                        Luminary Lens 📸 Capturing moments 📽️  
                    </div>
                    <div className="marquee__part flex aling-center shrink-0">
                        Luminary Lens 📸 Capturing moments 📽️  
                    </div>
                    <div className="marquee__part flex align-center shrink-0">
                        Luminary Lens 📸 Capturing moments 📽️  
                    </div>
                </div>
            </div> 
            <div className="flex font-MessinaRegular w-screen py-20 lg:py-28 text-sm md:text-xl px-4 md:px-16">
                <div className="flex flex-col gap-4 flex-grow">
                    <span className="text-green">FOLLOW US</span>
                    <div className="flex flex-col">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/company/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-right">
                    <div className="flex flex-col gap-2">
                        <span className="text-green">LET'S CONNECT</span>
                        <span>hello@luminarylens.com</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-green">LOCATION</span>
                        <span>123 mainstreet<br/> Anytown, india</span>
                    </div>

                </div>
            </div>
            <div className="flex flex-row justify-between font-MessinaRegular text-xs md:text-xl w-screen px-4 md:px-16 pb-8 ">
                <span>LuminaryLens</span>
                <span>Made By Dhruv ❤️</span>
            </div>
        </div>
    )
}
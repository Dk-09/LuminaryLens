import { useGSAP } from "@gsap/react"
import gsap from "gsap-trial"
import { ScrollTrigger } from "gsap-trial/all"


export default function About(){

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: ".box",
            start: "center center",
            end: "bottom top",
            markers: true,
            pin: true,
        })

    })


    return (
        <div className="h-screen bg-black text-white py-32 px-12">
            <div className="flex flex-row w-full font-MessinaRegular text-gray">
                <div className="box w-1/2 jutify-center">
                    <div className="h-11 flex flex-row font-MessinaBold text-4xl text-white justify-center gap-4">
                        <span>Few</span>
                        <div className="flex flex-col overflow-hidden h-11">
                            <span id="words">Words</span>
                            <span id="stats">Stats</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-20">
                    <p className="leading-8 w-3/4">Luminary Lens Studio is a dynamic creative space where moments are transformed into timeless stories. With a blend of expertise and innovation, our dedicated team specializes in capturing the essence of every occasion. From portraits to commercial projects, we meticulously craft visual narratives that resonate with authenticity and emotion. </p>
                    <div className="w-1/2">
                        <h1 className="text-8xl pb-4 text-white">1500+</h1>
                        <hr></hr>
                        <p className="pt-2">Projects</p>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-8xl pb-4 text-white">9+</h1>
                        <hr></hr>
                        <p className="pt-2">Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
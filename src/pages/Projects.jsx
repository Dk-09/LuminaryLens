import gsap from 'gsap'
import Card from "../components/Card"

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

import { useGSAP } from "@gsap/react"

export default function Projects(){

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin) 

    let split = new SplitText("#mtext", {type: "chars"})
    const line = gsap.utils.toArray('.line')
    gsap.set(".line", {width: "0%"})

    line.forEach((line) => {
      gsap.to(line, {
        scrollTrigger: {
          start: 'top bottom',
          end: 'bottom top',
          trigger: line,
        },
        width: "100%",
        duration: 2,
      })
    })

    gsap.from(split.chars,{
      scrollTrigger: {
        trigger: "#mtext",
        toggleActions: "play complete none reset",
      },
      yPercent: 100,
      duration: 1,
      stagger: .05,
      ease: "power3.out",
    })


  })

  return(
      <section id="PROJECTS" className="w-screen bg-black py-20 lg:py-40">
        <div className="flex flex-col bg-black">
          <div className="lg:mb-40 mb-20 px-16 h-4/6 w-screen text-left text-MessinaRegular text-9xl text-white overflow-hidden">
            <span id="mtext">
              PROJECTS 
              <span className="text-green"> *</span>
            </span> 
          </div>
          <div  className="flex flex-col md:flex-row lg:flex-row text-white px-4 md:px-16 text-RanadeRegular text-3xl md:gap-20">
            <div className="md:w-3/5 w-full">
              <Card 
                title="WEDDING"
                img1="1.jpg"
                des="RANVIR KAPOOR'S WEDDING"
                year="2022"
                pad="md:mt-80"
              />
              <div data-speed="1.2" className="relative mt-20 mb-20 lg:mt-80 lg:mb-80 hidden md:block">
              <svg viewBox="0 0 171 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_56_120)">
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
                img1="3.jpg"
                des="GIVE YOUR FRIEND THE BEST"
                year="2022"
              />
            </div>
            <div className="md:w-4/5 w-full">
              <Card 
                title="MODELING"
                img1="5.jpg"
                des="GIGI HADID'S PHOTOSHOOT"
                year="2021"
              />
              <Card 
                title="COUPLE"
                img1="7.jpg"
                des="BRAD PITT AND ANGELINA JOLIE'S PHOTOSHOOT"
                year="2024"
                pad="md:mt-40"
              />
              <div data-speed="1.2" className="relative mt-20 mb-20 lg:mt-60 lg:mb-40 hidden md:block lg:block">
              <svg  viewBox="0 0 171 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_61_17)">
                <path d="M115.749 56.289L119.767 56.8091L119.314 52.7881L115.302 52.2631L115.749 56.289ZM111.732 55.769L116.792 101.26L124.827 102.3L119.767 56.8091L111.732 55.769ZM115.302 52.2631L69.9092 46.3871L70.8048 54.439L116.197 60.3149L115.302 52.2631ZM112.596 53.0786L49.5769 114.977L55.8835 121.397L118.903 59.4994L112.596 53.0786Z" fill="#C9C2AC"/>
                </g>
                <defs>
                <clipPath id="clip0_61_17">
                <rect width="135" height="106" fill="white" transform="translate(76.0122 0.705078) rotate(45.5143)"/>
                </clipPath>
                </defs>
              </svg>
              <svg className="absolute top-0 left-0" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="202.5" cy="202.5" r="201" stroke="#C9C2AC" strokeWidth="3"/>
              </svg>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-center align-center md:inline-flex lg:inline-flex hidden">
                <div data-speed="1.2" className="relative mt-20 mb-20 lg:mt-32 lg:mb-32 w-1/2 ">
                <svg viewBox="0 0 171 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_61_17)">
                  <path d="M115.749 56.289L119.767 56.8091L119.314 52.7881L115.302 52.2631L115.749 56.289ZM111.732 55.769L116.792 101.26L124.827 102.3L119.767 56.8091L111.732 55.769ZM115.302 52.2631L69.9092 46.3871L70.8048 54.439L116.197 60.3149L115.302 52.2631ZM112.596 53.0786L49.5769 114.977L55.8835 121.397L118.903 59.4994L112.596 53.0786Z" fill="#C9C2AC"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_61_17">
                  <rect width="135" height="106" fill="white" transform="translate(76.0122 0.705078) rotate(45.5143)"/>
                  </clipPath>
                  </defs>
                </svg>
                <svg className="absolute top-0 left-0" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="202.5" cy="202.5" r="201" stroke="#C9C2AC" strokeWidth="3"/>
                </svg>
                </div>
              </div>
              <Card 
                title="FAMILY"
                img1="9.jpg"
                des="CAPTURE YOUR FAMILIES HAPPY MOMENT WITH OUR LENS"
                year="2023"
              />
              <Card 
                title="WEDDING"
                img1="11.jpg"
                des="KL RAHUL'S WEDDING"
                year="2024"
                pad="md:mt-40"
              />
            </div>
          </div>
        </div> 
      </section>
  )
}
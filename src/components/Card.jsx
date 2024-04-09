import gsap from "gsap-trial"
import { useGSAP } from "@gsap/react"

export default function Card({title, img1, des, year, pad}){
    const src = "\\images\\image " + img1
    const data = pad  + " mt-4"
    const css = "." + title
    const class2 = title + " text-MessinaLight"
    
    useGSAP(() => {
      gsap.set(css,{ yPercent: 0 })
    })
    
    function cardAniIn(){
      gsap.to(css, {
        yPercent: -100,
        duration: .5,
        overwrite: true,
      })
    }

    function cardAniOut(){
      gsap.to(css, {
        yPercent: 0,
        duration: .5,
        overwrite: true,
      })
    }

    return(
        <div id={title} onMouseEnter={() => cardAniIn()} onMouseLeave={() => cardAniOut()} className={data}>
            <div className="overflow-hidden flex flex-col sm:h-7 lg:h-10 text-2xl md:text-xl lg:text-4xl">
              <span className={title}>
                {title} 
              </span>
              <span className={class2}>
                {title} 
              </span>
            </div>
            <div  className="w-full mt-6 mb-6">
              <img src={src} className="w-full object-fill"></img>
            </div>
            <div className="w-full text-xs">
              <div className="inline">
                {des}
              </div>
              <div className="float-right text-green">
                {year}
              </div>
            </div>
            <hr className="line mt-6"></hr>
        </div>
    )
}
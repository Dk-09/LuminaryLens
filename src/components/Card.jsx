export default function Card({title, img1, des, year, pad}){
    const src = "\\images\\image " + img1
    const data = pad + " mt-4"
    return(
        <div id="CARD1" className={data}>
            <span>
              {title} 
            </span>
            <div id="img1" className="w-full mt-6 mb-6">
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
export default function Hero(){
   return(
    <div data-speed="1.4" id="HERO-TEXT" className="z-20 mx-14 flex flex-col justify-end flex-grow">
      <div className="font-MessinaLight text-10xl leading-none flex flex-row">
        <div>
          <div className="overflow-hidden">
            <span className="HeroText inline-block">Luminary<br/></span>
          </div>
          <div className="overflow-hidden">
            <span className="HeroText inline-block">
              Lens
              <span className="text-green">.</span>
            </span>
          </div>
        </div>
        <div className="flex w-full items-end justify-end text-end text-4xl pb-10">
          <div className="overflow-hidden">
            <span className="HeroText inline-block">
              Studio<span className="HeroStar inline-block text-5xl text-green">*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
   ) 
}
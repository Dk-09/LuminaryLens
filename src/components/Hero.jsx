export default function Hero(){
   return(
    <div data-speed="1.4" id="HERO-TEXT" className="z-20 mx-4 md:mx-16 flex flex-col justify-end flex-grow">
      <div className="font-MessinaLight text-7xl md:text-8xl lg:text-10xl leading-none flex lg:flex-row flex-col">
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
        <div className="flex w-full md:items-end md:justify-end md:text-end text-2xl lg:text-4xl pb-20">
          <div className="overflow-hidden">
            <span className="HeroText inline-block">
              Studio<span className="HeroStar inline-block text-2xl lg:text-5xl text-green">*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
   ) 
}
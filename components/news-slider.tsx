export default function NewsSlider() {
  return <div 
    className={`
      absolute right-8 mt-32 bg-black/75 h-10 w-fit 
      rounded-full flex items-center px-6 py-2 border-2 
      border-white/50 mobile:mt-[4.5rem] mobile:h-6
      mobile:right-2
    `}
    >
    <h3 className="text-xl font-bold text-white animate-pulse mobile:text-sm">
      {infoData[0].category}
    </h3>
    <div 
      style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0,0,0,0)), color-stop(5%, rgba(0,0,0,1)), color-stop(95%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)))" }}
      className="ml-3 overflow-hidden w-96 mobile:w-48"
    >
      <p className="text-white text-xl whitespace-nowrap w-fit animate-news-slide mobile:text-sm">
      {infoData[0].information}
      </p>
    </div>
  </div>
}

enum InfoCategory {
  INFO = 'INFO',
  NEWS = 'NEWS'
}

interface InformationInterface {
  category: string,
  information: string
}

let infoData: InformationInterface[] = [
  {
    category: InfoCategory.INFO,
    information: "This website contains any information for Zenless Zone Zero game developed by Hoyoverse"
  }
]
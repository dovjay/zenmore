export default function NewsSlider() {
  return <div className="absolute right-8 mt-28 bg-black/75 h-10 w-fit rounded-full flex items-center px-4 border-2 border-white/50">
    <h3 className="text-xl font-bold text-white animate-pulse">
      {infoData[0].category}
    </h3>
    <div className="ml-3 overflow-hidden w-96">
      <p className="text-white text-xl whitespace-nowrap w-fit animate-news-slide">
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
import { useState } from "react"

import GenerateRandomNumber from "../lib/generate-random-number"

export default function VideoBackground(props: any) {
  let { displayInframe, isScrollPlay } = props

  const [currentIndex, setCurrentIndex] = useState(GenerateRandomNumber(4))

  const randomVideo = async (event: any): Promise<number> => {
    if (isScrollPlay) return currentIndex

    let index: number = GenerateRandomNumber(4)

    if (index === currentIndex) return randomVideo(event)

    if (event) await event.target.play()

    return index
  }

  return <div className="fixed -z-10 h-screen w-screen">
  <video 
    className="w-full h-full object-cover bg-black select-none"
    autoPlay muted loop={isScrollPlay}
    onEnded={async e => setCurrentIndex(await randomVideo(e))}
    src={videoData[currentIndex].src}
  />
  {
    displayInframe
    ? (
    <div className="text-white text-2xl absolute right-8 bottom-28">
      <span className="">in frame </span>
      <span className="font-bold">{videoData[currentIndex].name}</span>
    </div>
    ) : ''
  }
  </div>
}

interface VideoInterface {
  src: string,
  name: string
}

let videoData: VideoInterface[] = [
  {
    src: '/videos/Anby Menu.webm',
    name: 'Anby Denmara'
  },
  {
    src: '/videos/Billy Menu.webm',
    name: 'Billy Kid'
  },
  {
    src: '/videos/Nekomiya Menu.webm',
    name: 'Nekomiya Mata'
  },
  {
    src: '/videos/Nicole Menu.webm',
    name: 'Nicole Denmara'
  }
]
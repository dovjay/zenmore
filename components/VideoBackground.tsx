import { useState } from "react"

import GenerateRandomNumber from "../lib/GenerateRandomNumber"

export default function VideoBackground() {
  const [currentIndex, setCurrentIndex] = useState(GenerateRandomNumber(4))

  const randomVideo = async (event: any): Promise<number> => {
    let index: number = GenerateRandomNumber(4)

    if (index === currentIndex) randomVideo(event)

    if (event) await event.target.play()

    setCurrentIndex(index)
    return index
  }

  return <video 
      className="fixed -z-10 h-screen w-screen object-cover bg-black select-none"
      autoPlay muted
      onEnded={e => randomVideo(e)}
      src={videoData[currentIndex].src}
    >
  </video>
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
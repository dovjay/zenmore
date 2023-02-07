import { useState, useRef, useEffect, useCallback } from "react"

import GenerateRandomNumber from "../lib/generate-random-number"

export default function VideoBackground(props: any) {
  let { displayInframe, isScrollPlay, scrollProgress } = props

  const video: any = useRef()

  const [currentIndex, setCurrentIndex] = useState(GenerateRandomNumber(4))
  const [maxDuration, setMaxDuration] = useState(0)

  const randomVideo = async (event: any): Promise<number> => {
    if (isScrollPlay) return currentIndex

    let index: number = GenerateRandomNumber(4)

    if (index === currentIndex) return randomVideo(event)

    if (event) await event.target.play()

    return index
  }

  const setupScrollPlay = () => {
    if (!isScrollPlay) return
    setMaxDuration(video.current.duration)
    video.current.currentTime = 1
    window.requestAnimationFrame(scrollPlay)
  }

  const scrollPlay = useCallback(() => {
    if (!isScrollPlay) return
    if (scrollProgress === null) return

    let progress: number = Math.floor(scrollProgress * maxDuration / 100)
    video.current.currentTime = progress
  }, [scrollProgress, maxDuration, isScrollPlay])

  useEffect(() => {
    scrollPlay()
  }, [scrollProgress, scrollPlay])

  return <div className="fixed -z-10 h-screen w-screen">
  <video 
    ref={video}
    className="w-full h-full object-cover bg-black select-none"
    autoPlay={!isScrollPlay} 
    loop={isScrollPlay} 
    muted
    onEnded={async e => setCurrentIndex(await randomVideo(e))}
    onLoadedMetadata={setupScrollPlay}
    src={videoData[currentIndex].src}
  />
  {
    displayInframe
    ? (
    <div className="text-white text-2xl absolute right-8 bottom-32 mobile:bottom-[5.5rem] mobile:right-4 mobile:text-lg">
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
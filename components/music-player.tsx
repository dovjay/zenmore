import { useRef, useEffect, useState } from "react"
import TwImage from "./tw-image"

const url = '/music/ZenmoreMusic.mp3'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(true)

  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(url) : undefined
  )

  useEffect(() => {
    if (audio)  {
      audio.current!.loop = true
      audio.current!.autoplay = true
    }
  }, [audio])

  const toggleMusic = () => {
    if (!audio) return

    if (playing) audio.current!.pause()
    else audio.current!.play()

    setPlaying(!playing)
  }

  return <button
    className={`
      w-16 h-16 rounded-full top-[50%] left-12 absolute z-10
      grid items-center justify-items-center border-4 mobile:border-2
      border-neutral-500 -mt-8 mobile:w-8 mobile:h-8 mobile:-mt-4
      mobile:left-6
      ${playing ? 'bg-white' : 'bg-neutral-300 opacity-50'}
    `}
    onClick={toggleMusic}
  >
    <TwImage 
      className={`
        w-8 h-8 mr-1 mobile:w-3 mobile:h-3 mobile:mr-.5
        ${playing ? 'animate-pulse' : ''}
      `}
      src="/icons/music icon.png"
      alt="Music Icon"
    />
  </button>
}
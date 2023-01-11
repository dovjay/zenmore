import { useState } from "react"
import { useRouter } from "next/router"

import TapeCover from "./TapeCover"
import TapeImage from "./TapeImage"

interface TapeCardInterface {
  active?: boolean,
  postData: any
}

let transitionDuration: number = 500

export default function TapeCard(props: TapeCardInterface) {
  let { postData } = props

  const [isHover, setHover] = useState(false)
  const [isClicked, setClicked] = useState(false)

  const router = useRouter()

  const goToArticle = (): void => {
    setHover(false)
    setClicked(true)

    setTimeout(() => {
      router.push(`/posts/${postData.params.id}`)
    }, transitionDuration)

  }

  let activeClass: string = props.active ? 'scale-125 z-20 mx-10 group cursor-pointer' : 'z-10 cursor-default'

  return <div 
    className={`relative w-[18rem] h-[32rem] ${activeClass}`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={goToArticle}
  >
    <TapeImage isHover={isHover} isClicked={isClicked} />
    <TapeCover isHover={isHover} isClicked={isClicked} />
    { !props.active && <div className="absolute rounded-lg w-full h-full z-20 bg-black/75" /> }
  </div>
}
import { useState } from "react"
import { useRouter } from "next/router"

import { PostDataInterface } from "../../../lib/posts"
import TapeCover from "./TapeCover"
import TapeImage from "./TapeImage"

interface TapeCardInterface {
  active?: boolean,
  postData: PostDataInterface
}

export default function TapeCard(props: TapeCardInterface) {
  let { postData, active } = props

  const [isHover, setHover] = useState(false)
  const [isClicked, setClicked] = useState(false)

  const router = useRouter()

  const goToArticle = (): void => {
    if (!active) return

    setHover(false)
    setClicked(true)
    router.push(`/posts/${postData.id}`)
  }

  let activeClass: string = props.active ? 'scale-125 z-20 mx-10 group cursor-pointer' : 'z-10 cursor-default'

  return <div 
    className={`relative w-[18rem] h-[32rem] ${activeClass}`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={goToArticle}
  >
    <TapeImage postData={postData} isHover={isHover} isClicked={isClicked} />
    <TapeCover postData={postData} isHover={isHover} isClicked={isClicked} />
    { !props.active && <div className="absolute rounded-lg w-full h-full z-20 bg-black/75" /> }
  </div>
}
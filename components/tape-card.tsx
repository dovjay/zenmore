import { createContext, useState } from "react"
import { useRouter } from "next/router"

import { PostDataInterface } from "../lib/posts"
import TapeCover from "./tape-cover"
import TapeImage from "./tape-image"

interface TapeCardInterface {
  active?: boolean,
  postData: PostDataInterface
}

interface ITapeContext {
  active?: boolean,
  postData: PostDataInterface | null,
  isHover: boolean,
  isClicked: boolean
}

const defaultCtx: ITapeContext = {
  active: false,
  postData: null,
  isHover: false,
  isClicked: false
}

export const TapeContext = createContext<ITapeContext>(defaultCtx)

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

  let activeClass: string = active ? 'scale-125 z-20 group cursor-pointer' : 'z-10 cursor-default'

  return <div 
    className={`relative w-[300px] h-[530px] ${activeClass} mx-8 transition duration-1000 mobile:w-[100px] mobile:h-[180px] mobile:mx-4`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={goToArticle}
  >
    <TapeContext.Provider value={{ active, postData, isHover, isClicked }}>
      <TapeImage />
      <TapeCover />
      <div className={`absolute rounded-lg w-full h-full z-20 bg-black/75 transition duration-1000 ${active ? 'opacity-0' : 'opacity-100'}`} />
    </TapeContext.Provider>
  </div>
}
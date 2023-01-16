import { SetStateAction, useState } from "react"

import DynamicVideoBackground from "../../components/dynamic/dynamic-video-background"
import MenuCorner from "../../components/menu-corner"
import TapeCard from "./components/tape-card"

import { getAllPosts, PostDataInterface } from "../../lib/posts"

export default function GameInfo(props: any) {
  let { posts } = props

  const [displayPosts, setDisplayPosts] = useState(posts.slice(-3).concat(posts.slice(0, 4)))
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('')
  const [disabled, setDisabled] = useState(false)

  const slideDuration = 1000
  const directionClass: string = direction === 'left' 
    ? `transition duration-${slideDuration} translate-x-[19rem]` 
    : direction === 'right' 
    ? `transition duration-${slideDuration} -translate-x-[19rem]`  : ''

  const prevPost = () => {
    setDisabled(true)
    let temp: PostDataInterface[] = displayPosts
    let currentIndex: number = index - 1 < 0 ? posts.length - 1 : index - 1
    let prevIndex: number = currentIndex - 3 < 0 ? posts.length - Math.abs(currentIndex - 3) : currentIndex - 3

    setDirection('left')
    setIndex(currentIndex)
    
    setTimeout(() => {
      temp.pop()
      temp.unshift(posts[prevIndex])
      setDisplayPosts(temp)
      setDirection('')
      setDisabled(false)
    }, slideDuration)
  }

  const nextPost = () => {
    setDisabled(true)
    let temp: PostDataInterface[] = displayPosts
    let currentIndex: number = index + 1 < posts.length ? index + 1 : 0
    let nextIndex: number = currentIndex + 3 < posts.length ? currentIndex + 3 : currentIndex + 3 - posts.length

    setDirection('right')
    setIndex(currentIndex)

    setTimeout(() => {
      temp.shift()
      temp.push(posts[nextIndex])
  
      setDirection('')
      setDisplayPosts(temp)
      setDisabled(false)
    }, slideDuration)

    
  }

  return <div>
    <DynamicVideoBackground />

    <div className="w-screen h-screen backdrop-blur-md fixed" />

    <MenuCorner />

    <div className="h-screen w-screen flex justify-center items-center">
      <button className="z-10 bg-blue-300 h-10 w-10" disabled={disabled} onClick={prevPost}>prev</button>
      <div 
        style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0,0,0,0)), color-stop(15%, rgba(0,0,0,1)), color-stop(85%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)))" }}
        className={`w-7/12 h-fit overflow-hidden ${disabled && "pointer-events-none"}`}
      >
        <div
          className={`grid grid-flow-col gap-4 content-center justify-center h-[48rem] ${directionClass}`}
        >
          {
            displayPosts.map((post: PostDataInterface, index: number) => (
              <TapeCard 
                key={post.id + index} postData={post} 
                active={direction === 'left' ? index === 2 : direction === 'right' ? index === 4 : index === 3} 
              />
            ))
          }
        </div>
      </div>
      <button className="z-10 bg-blue-300 h-10 w-10" disabled={disabled} onClick={nextPost}>next</button>
    </div>
  </div>
}

export async function getStaticProps() {
  const posts: PostDataInterface[] = await getAllPosts('game-info')

  return {
    props: {
      posts: posts,
    }
  }
}
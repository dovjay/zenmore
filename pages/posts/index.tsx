import DynamicVideoBackground from "../../components/dynamic/dynamic-video-background"
import MenuCorner from "../../components/menu-corner"
import TapeCard from "./components/TapeCard"

import { getAllPostIds } from "../../lib/posts"

export default function GameInfo(props: any) {
  let { allPostsData } = props

  return <div>
    <DynamicVideoBackground />
    <div className="w-screen h-screen backdrop-blur-md fixed" />
    <MenuCorner />
    <div className="flex justify-center items-center h-screen w-screen">
      <div 
        style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0,0,0,0)), color-stop(15%, rgba(0,0,0,1)), color-stop(85%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)))" }}
        className="w-fit h-[48rem] grid grid-flow-col gap-4 content-center justify-center"
      >
        <TapeCard postData={allPostsData[0]} />
        <TapeCard postData={allPostsData[0]} />
        <TapeCard postData={allPostsData[0]} active={true} />
        <TapeCard postData={allPostsData[0]} />
        <TapeCard postData={allPostsData[0]} />
      </div>
    </div>
  </div>
}

export function getStaticProps() {
  const allPostsData = getAllPostIds()

  return {
    props: {
      allPostsData,
    }
  }
}
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { MDXRemote } from "next-mdx-remote"

import DynamicVideoBackground from "../../components/dynamic/dynamic-video-background"
import CinematicBar from "../../components/cinematic-bar"
import DiagonalTexture from "../../components/diagonal-texture"
import { getAllPostIds, getPostData, PostDataInterface } from "../../lib/posts"

export default function Post({ postData }: { postData: PostDataInterface }) {
  const router = useRouter()

  const [scrollProgress, setScrollProgress] = useState(1)

  let { title, content, thumbnail } = postData

  const onScroll = (e: any) => {
    if (e === null) return

    const maxScrollHeight: number = e.currentTarget.scrollHeight - e.currentTarget.clientHeight
    let progress: number = Math.floor(e.currentTarget.scrollTop / maxScrollHeight * 100)
    
    setScrollProgress(progress < 4 ? 4 : progress)
  }

  return <div className="w-screen h-screen flex justify-center">
    <DynamicVideoBackground />

    <CinematicBar isBlackBar={true}>
      <div className="flex items-center w-full h-full absolute">
        <button className="w-fit h-fit ml-auto mr-16" onClick={() => router.push('/posts')}>
          <Image src='/icons/Close Button.svg' alt="Close Button" width={80} height={60} />
        </button>
      </div>
    </CinematicBar>

    <CinematicBar isBlackBar={true} position="bottom" />

    <DiagonalTexture />

    <section
      onScroll={e => onScroll(e)}
      style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0)), color-stop(10%, rgba(0,0,0,1)), color-stop(90%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)))" }}
      className="w-1/2 my-36 overflow-scroll-hidden py-4"
    >
      <div className="relative w-full h-[32rem] overflow-clip rounded-tr-[5rem] rounded-bl-[5rem] mt-8">
        <Image src={thumbnail} alt={`${title} Thumbnail`} fill className="object-cover" />
      </div>
      <h1 className="text-5xl font-bold mt-12 text-white">
        {title}
      </h1>
      <div 
        className="prose prose-2xl prose-invert max-w-none mt-8 mb-12 leading-normal"
      >
        <MDXRemote {...content} />
      </div>
    </section>
  </div>
}

export function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(props: any) {
  let { params } = props

  const postData: PostDataInterface = await getPostData(params.id)

  return {
    props: { postData }
  }
}
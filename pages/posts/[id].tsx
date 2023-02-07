import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { MDXRemote } from "next-mdx-remote"
import TwImage from "../../components/tw-image"

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

  return <>
    <Head>
      <title>Zenmore | {title}</title>
    </Head>
    <div className="w-screen h-screen flex justify-center">
      <DynamicVideoBackground />

      <CinematicBar isBlackBar={true}>
        <div className="flex items-center w-full h-full absolute">
          <button className="w-fit h-fit ml-auto mr-16" onClick={() => router.push('/posts')}>
            <TwImage 
              className="w-[80px] h-[60px] mobile:w-[40px] mobile:h-[30px]"
              src='/icons/Close Button.svg' alt="Close Button"
            />
          </button>
        </div>
      </CinematicBar>

      <CinematicBar isBlackBar={true} position="bottom" />

      <DiagonalTexture />

      <section
        onScroll={e => onScroll(e)}
        style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0)), color-stop(10%, rgba(0,0,0,1)), color-stop(90%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)))" }}
        className="w-1/2 my-36 overflow-scroll-hidden py-4 mobile:my-16"
      >
        <TwImage 
          className="object-cover w-full aspect-video overflow-clip rounded-tr-[2rem] rounded-bl-[2rem] mt-4"
          src={thumbnail} alt={`${title} Thumbnail`}
        />
        <h1 className="text-6xl font-bold mt-12 text-white mobile:text-4xl">
          {title}
        </h1>
        <div 
          className="prose prose-xl prose-invert max-w-none mt-8 mb-12 leading-normal mobile:prose-sm"
        >
          <MDXRemote {...content} />
        </div>
      </section>
    </div>
  </>
}

export function getStaticPaths() {
  const paths = getAllPostIds('game-info')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(props: any) {
  let { params } = props

  const postData: PostDataInterface = await getPostData(params.id, 'game-info')

  return {
    props: { postData }
  }
}
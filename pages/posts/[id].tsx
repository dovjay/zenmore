import Image from "next/image"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"

import VideoBackground from "../../components/video-background"
import CinematicBar from "../../components/cinematic-bar"
import DiagonalTexture from "../../components/diagonal-texture"
import { getAllPostIds, getPostData, PostDataInterface } from "../../lib/posts"

export default function Post({ postData }: { postData: PostDataInterface }) {
  const router = useRouter()

  let { title, date, id, contentMd, thumbnail } = postData

  return <div className="w-screen h-screen flex justify-center">
    <VideoBackground isScrollPlay={true} />

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
      style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0)), color-stop(10%, rgba(0,0,0,1)), color-stop(90%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)))" }}
      className="w-1/2 my-36 overflow-scroll-hidden py-4"
    >
      <div className="relative w-full h-[32rem]">
        <Image src={thumbnail} alt={`${title} Thumbnail`} fill className="object-contain" />
      </div>
      <h1 className="text-5xl font-bold mt-12 text-gray-100">
        {title}
      </h1>
      <div 
        className="text-2xl my-8 leading-normal text-[#838683]"
      >
        <ReactMarkdown remarkPlugins={[gfm]}>{contentMd}</ReactMarkdown>
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
import Image from "next/image"
import { PostDataInterface } from "../../../lib/posts"

interface TapeImageInterface {
  isHover?: boolean,
  isClicked?: boolean,
  postData: PostDataInterface
}

export default function TapeImage(props: TapeImageInterface) {
  let { title } = props.postData

  let isHover: string = props.isHover ? 'group-hover:translate-x-[40%]' : ''
  let isClicked: string  = props.isClicked ? 'translate-x-[25vw] opacity-0' : ''

  return <div 
    className={`absolute w-fit h-fit overflow-hidden transition duration-500 ${isHover} ${isClicked}`}
  >
    <div className="relative w-[18rem] h-[33rem]">
      <Image src="/images/Tape Image.png" alt="Tape Image" fill className="object-contain"/>

    </div>
    <div className="absolute mx-auto inset-x-0 top-0 bottom-8 flex">
      <div className="my-auto w-full mr-3 rotate-90">
        <span className="w-3/4 h-32 font-rocksalt text-xl font-bold leading-relaxed block mt-4 ml-12 overflow-hidden">
          {title}
        </span>
      </div>
    </div>
  </div>
}
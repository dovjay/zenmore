import Image from "next/image"
import { useContext } from "react"
import { TapeContext } from "./tape-card"

export default function TapeImage() {
  let ctx = useContext(TapeContext)

  let isHover: string = ctx.isHover ? 'group-hover:translate-x-[40%]' : ''
  let isClicked: string  = ctx.isClicked ? 'translate-x-[25vw] opacity-0' : ''

  return <div 
    className={`absolute w-full h-full overflow-hidden transition duration-500 ${isHover} ${isClicked}`}
  >
    <div className="relative w-full h-full">
      <Image src="/images/Tape Image.png" alt="Tape Image" fill className="object-contain"/>

    </div>
    <div className="absolute mx-auto inset-x-0 top-0 bottom-8 flex">
      <div className="my-auto w-full mr-3 rotate-90">
        <span className={`
          w-3/4 h-32 font-rocksalt text-xl font-bold leading-relaxed 
          block mt-4 ml-12 overflow-hidden mobile:text-[8px]
          mobile:h-12 mobile:ml-6 mobile:mt-0
        `}>
          {ctx.postData?.title}
        </span>
      </div>
    </div>
  </div>
}
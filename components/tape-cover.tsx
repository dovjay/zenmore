import Image from "next/image"
import { useContext } from "react"

import { TapeContext } from "./tape-card"

export default function TapeCover() {
  let ctx = useContext(TapeContext)

  let isHover: string = ctx.isHover ? 'group-hover:-translate-x-[40%]' : ''
  let isClicked: string  = ctx.isClicked ? '-translate-x-[25vw] opacity-0' : ''

  return <div 
    className={`absolute w-fit h-fit rounded-lg overflow-hidden transition duration-500 ${isHover} ${isClicked}`}
  >
    <div 
      className="w-32 h-[110%] absolute rotate-[40deg] translate-x-[5.5rem] translate-y-[1.5rem] overflow-hidden"
    >
      <div 
        style={{ backgroundImage: `url('${ctx.postData?.thumbnail}')` }}
        className="-rotate-[40deg] bg-[length:250%] bg-top w-[300%] h-full g-no-repeat -translate-x-[6rem] -top-4 absolute"
      />
      <div className="-rotate-[40deg] w-[20rem] h-[14.5rem] bg-black absolute bottom-0" />
      <div className="h-full w-1 bg-black absolute top-10 right-10" />
      <div className="h-full w-1 bg-black absolute top-10 right-[5.25rem]" />
    </div>
    <div className="absolute mx-6 mt-4">
      <Image src="/ZZZ Logo.png" alt="ZZZ Logo" width={48} height={48} />
      <h2 className="text-white text-3xl font-bold font-display uppercase mt-4 leading-normal">
        {ctx.postData?.title}
      </h2>
    </div>

    <div className="absolute bottom-8 h-16 overflow-hidden">
      <p className="text-white/50 text-sm font-medium mx-6 leading-normal">
        {ctx.postData?.description}
      </p>
    </div>
    
    <Image src="/images/Tape Cover.svg" alt="Tape Image" width={300} height={600} />
  </div>
}
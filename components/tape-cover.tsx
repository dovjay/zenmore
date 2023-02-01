import { useContext } from "react"

import { TapeContext } from "./tape-card"
import TwImage from "./tw-image"

export default function TapeCover() {
  let ctx = useContext(TapeContext)

  let isHover: string = ctx.isHover ? 'group-hover:-translate-x-[40%]' : ''
  let isClicked: string  = ctx.isClicked ? '-translate-x-[25vw] opacity-0' : ''

  return <>
    <TapeCoverClipPath />
    <div 
      className={`
        absolute w-full h-full
        transition duration-500 ${isHover} ${isClicked}
        tape-cover-clip bg-black
      `}
    >
      <div 
        className={`
          w-32 h-[110%] absolute rotate-[40deg] 
          translate-x-[5.5rem] translate-y-[1.5rem] 
          overflow-hidden portable:w-12
          portable:translate-x-8 portable:-translate-y-0
        `}
      >
        <div 
          style={{ backgroundImage: `url('${ctx.postData?.thumbnail}')` }}
          className="-rotate-[40deg] bg-[length:250%] bg-top w-[300%] h-full g-no-repeat -translate-x-[6rem] -top-4 absolute"
        />
        <div className="-rotate-[40deg] w-[20rem] h-[14.5rem] bg-black absolute bottom-0 portable:h-[10rem]" />
        <div className="h-full w-1 bg-black absolute top-10 right-10 portable:-top-10 portable:right-8 portable:w-[2px]" />
        <div className="h-full w-1 bg-black absolute top-10 right-[5.25rem] portable:-top-10 portable:right-[16px] portable:w-[2px]" />
      </div>
      <div className="absolute mx-6 mt-4 portable:mt-3 portable:mx-2">
        <TwImage 
          className="w-[44px] h-[48px] portable:h-[16px] portable:w-[14px]"
          src="/ZZZ Logo.png" alt="ZZZ Logo"
        />
        <h2 className="text-white text-3xl font-bold font-display uppercase mt-4 leading-normal portable:text-[11px] portable:mt-1">
          {ctx.postData?.title}
        </h2>
      </div>

      <div className="absolute bottom-8 h-16 overflow-hidden portable:bottom-3 portable:h-8">
        <p className="text-white/50 text-sm font-medium mx-6 leading-normal portable:text-[7px] portable:mx-2">
          {ctx.postData?.description}
        </p>
      </div>
    </div>
  </>
}

export function TapeCoverClipPath() {
  return <svg className="absolute w-0 h-0">
    <clipPath id="tape-cover-clip-path" clipPathUnits="objectBoundingBox">
      <path d="M0.001,0.016 C0.001,0.007,0.015,0,0.031,0 H0.97 C0.987,0,1,0.007,1,0.016 V0.535 C1,0.54,0.995,0.545,0.987,0.548 L0.831,0.607 C0.823,0.61,0.818,0.615,0.818,0.621 L0.816,0.741 C0.816,0.746,0.821,0.752,0.83,0.755 L0.986,0.811 C0.995,0.814,1,0.819,1,0.825 L0.999,0.984 C0.999,0.993,0.985,1,0.969,1 H0.03 C0.014,1,0,0.993,0,0.984 L0.001,0.016"/>
    </clipPath>
  </svg>
  
}
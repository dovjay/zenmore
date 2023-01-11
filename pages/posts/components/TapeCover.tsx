import Image from "next/image"

interface TapeCoverInterface {
  isHover?: boolean,
  isClicked?: boolean
}

export default function TapeCover(props: TapeCoverInterface) {
  let isHover: string = props.isHover ? 'group-hover:-translate-x-[40%]' : ''
  let isClicked: string  = props.isClicked ? '-translate-x-[25vw] opacity-0' : ''

  return <div 
    className={`absolute w-fit h-fit overflow-hidden transition duration-500 ${isHover} ${isClicked}`}
  >
    <div 
      className="w-32 h-[110%] absolute rotate-[40deg] translate-x-[5.5rem] translate-y-[1.5rem] overflow-hidden"
    >
      <div 
        style={{ backgroundImage: "url('/images/Thumbnail Article.png')" }}
        className="-rotate-[40deg] bg-[length:250%] bg-top w-[300%] h-full g-no-repeat -translate-x-[6rem] -top-4 absolute"
      />
      <div className="-rotate-[40deg] w-[20rem] h-[14.5rem] bg-black absolute bottom-0" />
      <div className="h-full w-1 bg-black absolute top-10 right-10" />
      <div className="h-full w-1 bg-black absolute top-10 right-[5.25rem]" />
    </div>
    <div className="absolute mx-6 mt-4">
      <Image src="/ZZZ Logo.png" alt="ZZZ Logo" width={48} height={48} />
      <h2 className="text-white text-4xl font-bold font-display uppercase mt-4 leading-normal">
        Title Text for The Wicked
      </h2>
    </div>

    <div className="absolute bottom-10 h-16 overflow-hidden">
      <p className="text-white/50 text-sm font-medium mx-6 leading-normal">
        The text is for a description of what is inside of the article in general. So it should not be too long either. In fact, I want to add a little bit more
      </p>
    </div>
    
    <Image src="/images/Tape Cover.svg" alt="Tape Image" width={300} height={600} />
  </div>
}
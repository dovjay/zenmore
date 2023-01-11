import Image from "next/image"

interface TapeImageInterface {
  isHover?: boolean,
  isClicked?: boolean
}

export default function TapeCover(props: TapeImageInterface) {
  let isHover: string = props.isHover ? 'group-hover:translate-x-[40%]' : ''
  let isClicked: string  = props.isClicked ? 'translate-x-[25vw] opacity-0' : ''

  return <div 
    className={`absolute w-fit h-fit overflow-hidden transition duration-500 ${isHover} ${isClicked}`}
  >
    <Image src="/images/Tape Image.png" alt="Tape Image" width={300} height={600} />
    <div className="absolute mx-auto inset-x-0 top-0 bottom-8 flex">
      <div className="my-auto w-full mr-3 rotate-90">
        <span className="w-3/4 h-32 font-rocksalt text-2xl font-bold block ml-12 overflow-hidden">
          Title Text for The Wicked
        </span>
      </div>
    </div>
  </div>
}
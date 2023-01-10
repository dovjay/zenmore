import Image from "next/image"

export default function TapeImage(props: object) {
  return <div className="w-fit h-fit absolute group-hover:translate-x-[40%] transition duration-500">
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
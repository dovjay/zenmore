import Image from "next/image"
import { string } from "prop-types"

interface ISkillButton {
  iconSrc: string,
  iconAlt: string,
  buttonName: string
}

export default function SkillButton(props: ISkillButton) {
  const { iconSrc, iconAlt, buttonName } = props

  return <div className="rounded-2xl border-[.4rem] border-gray-500 bg-[#161616] overflow-clip w-full">
    <Image 
        src={iconSrc} alt={iconAlt} 
        width={128} height={128} 
        className="my-6 mx-auto"
    />

    <div className="bg-black w-full text-center p-4">
        <span className="font-extrabold text-2xl italic">
          {buttonName}
        </span>
    </div>
  </div>
}
import Image from "next/image"

interface ISkillButton {
  iconSrc: string,
  iconAlt: string,
  buttonName: string,
  onClick: (e?: any) => void
}

export default function SkillButton(props: ISkillButton) {
  const { iconSrc, iconAlt, buttonName, onClick } = props

  return <button 
    className={`
      rounded-2xl border-[.4rem] border-gray-500 bg-[#161616] overflow-clip w-full
      focus:border-[#F6D904] transition duration-300
    `}
    onClick={onClick}
  >
    <Image 
        src={iconSrc} alt={iconAlt} 
        width={128} height={128} 
        className="my-2 mx-auto"
    />

    <div className="bg-black w-full text-center p-4">
        <span className="font-extrabold text-2xl italic">
          {buttonName}
        </span>
    </div>
  </button>
}
import TwImage from "./tw-image"

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
      focus:border-[#F6D904] transition duration-300 mobile:border-[.25rem]
      mobile:rounded-xl
    `}
    onClick={onClick}
  >
    <TwImage
      src={iconSrc} alt={iconAlt} 
      className="my-2 mx-auto w-[128px] h-[128px] mobile:w-[48px] mobile:h-[48px]"
    />

    <div className="bg-black w-full text-center p-4 mobile:p-1">
        <span className="font-extrabold text-2xl italic mobile:text-sm">
          {buttonName}
        </span>
    </div>
  </button>
}
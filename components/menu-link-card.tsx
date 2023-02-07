import Link from "next/link"
import TwImage from "./tw-image"

export default function MenuLinkCard(props: any) {
  let {
    icon,
    name,
    href
  } = props

  return <Link 
    className="flex flex-col items-center rounded-md h-20"
    href={href}
  >
    <div className="my-auto mobile:my-2">
      <TwImage
        className="w-[40px] h-[40px] mobile:w-[22px] mobile:h-[22px]"
        src={icon} alt={`${name} icon`}
      />
    </div>
    <div className="bg-black px-4">
      <span className="text-white font-bold text-lg text-center font-display mobile:text-sm">{name}</span>
    </div>
  </Link>
}
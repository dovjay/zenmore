import Link from "next/link"
import Image from "next/image"

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
    <div className="my-auto">
      <Image src={icon} alt={`${name} icon`} width={40} height={40} />
    </div>
    <div className="bg-black px-4">
      <span className="text-white font-bold text-lg text-center font-display">{name}</span>
    </div>
  </Link>
}
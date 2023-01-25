import Image from "next/image"

export default function AttackElementIcon(props: IAttackElementIcon) {
  let { icons } = props

  return <div className="flex gap-4">
    {icons.map((icon: IconTypeString, index: number) => (
      <Image src={IconType[icon]} alt="Icon" width={36} height={36} key={index} />
    ))}
  </div>
}

interface IAttackElementIcon {
  icons: IconTypeString[]
}

type IconTypeString = keyof typeof IconType

enum IconType {
  SLASH = '/icons/Slash Icon.png',
  STRIKE = '/icons/Strike Icon.png',
  PIERCE = '/icons/Piercing Icon.png',
  PHYSICAL = '/icons/Physical Icon.png',
  FIRE = '/icons/Fire Icon.png',
  ICE = '/icons/Ice Icon.png',
  ELECTRIC = '/icons/Lightning Icon.png',
  WIND = '/icons/Wind Icon.png'
}

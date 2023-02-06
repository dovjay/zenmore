import TwImage from "./tw-image"

export default function AttackElementIcon(props: IAttackElementIcon) {
  let { icons } = props

  return <div className="grid grid-flow-col justify-start gap-4 mobile:gap-2">
    {icons.map((icon: IconTypeString, index: number) => (
      <TwImage
        src={IconType[icon]} alt="Icon"
        className="w-[36px] h-[36px] mobile:w-[20px] mobile:h-[20px]"
        key={index}
      />
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

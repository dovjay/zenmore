import Image from "next/image"

export default function CinematicBar(props: any) {
  let { 
    position,
    isBlackBar,
    children
  } = props

  let positionClass: string = position === 'bottom' ? 'bottom-0' : ''
  let blackBarClass: string = isBlackBar ? 'bg-black' : 'bg-black/75'

  return <div className={`absolute w-screen min-h-[6.5rem] ${positionClass} ${blackBarClass}`}>
    {
      !isBlackBar &&
      <div
        style={{ backgroundImage: "url('/textures/dot texture.png')"}}
        className="absolute -z-10 w-full h-full bg-[length:10%] mix-blend-multiply"
      />
    }
    { children }
  </div>
}
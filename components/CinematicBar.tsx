import Image from "next/image"

export default function CinematicBar(props: any) {
  let { 
    position,
    children
  } = props

  position = position === 'bottom' ? 'bottom-0' : ''

  return <div className={`absolute bg-black/75 w-screen min-h-[6rem] ${position}`}>
    <div
      style={{ backgroundImage: "url('/textures/dot texture.png')"}}
      className="absolute -z-10 w-full h-full bg-[length:10%] mix-blend-multiply"
    />
    { children }
  </div>
}
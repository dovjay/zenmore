import TapeCover from "./TapeCover"
import TapeImage from "./TapeImage"

export default function TapeCard(props: any) {
  let { active } = props

  active = active ? 'scale-125 z-20 mx-10 group' : 'z-10'

  return <div className={`relative w-[18rem] h-[32rem] ${active}`}>
    <TapeImage />
    <TapeCover />
  </div>
}
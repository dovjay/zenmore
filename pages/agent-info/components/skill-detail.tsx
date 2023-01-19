import { useRecoilState } from "recoil"
import { AGNINF_skill_info } from "../../../store/atoms/AgentInfo"
import Image from "next/image"

import DiagonalTexture from "../../../components/diagonal-texture"
import CinematicBar from "../../../components/cinematic-bar"
import ButtonGroup, { IButtonItem } from "../../../components/button-group"

interface ISkillDetail {
  active: boolean
}

export default function SkillDetail(props: ISkillDetail) {
  let { active } = props

  let [skillInfo, setSkillInfo] = useRecoilState(AGNINF_skill_info)

  return <div className={`w-screen h-screen absolute inset-0 z-10 ${!active && "hidden"}`}>
    <DiagonalTexture />
    <CinematicBar isBlackBar>
      <div className="flex items-center w-full h-full absolute px-16">
        <ButtonGroup buttons={buttonGroup} />
        <button className="w-fit h-fit ml-auto" onClick={() => setSkillInfo('')}>
          <Image src='/icons/Close Button.svg' alt="Close Button" width={80} height={60} />
        </button>
      </div>
    </CinematicBar>
    <CinematicBar position="bottom" isBlackBar />
    
    <section className="w-1/2 h-[80%] text-white z-20 relative top-[10%] bottom-[10%] left-10 py-8">
      <h2 className="text-4xl font-bold">{skillInfo}</h2>
    </section>
  </div>
}

const buttonGroup: IButtonItem[] = [
  {
    buttonName: "Description",
    buttonValue: "description",
    onClick: () => ''
  },
  {
    buttonName: "Stats",
    buttonValue: "stats",
    onClick: () => ''
  }
]
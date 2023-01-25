import { useRecoilState } from "recoil"
import { AGNINF_skill_info } from "../store/atoms/AgentInfo"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

import DiagonalTexture from "./diagonal-texture"
import CinematicBar from "./cinematic-bar"
import ButtonGroup, { IButtonItem } from "./button-group"

function SkillTitle(props: ISkillTitle) {
  let { name, type } = props

  return <div className="w-full border-4 border-neutral-500/50 bg-black/80 px-6 py-4 flex gap-4 items-center rounded-xl">
    { !name && <Image src={SkillIcon[type]} alt={SkillType[type]} width={48} height={48} /> }
    <h2 className="text-3xl font-bold"> { 
      !name ? 
      <span>{SkillType[type]}</span> : 
      <span>{name}</span> 
    } </h2>
  </div>
}

export default function SkillDetail(props: ISkillDetail) {
  let { active, agentSkill } = props

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
    
    <section className="w-1/2 h-[72%] text-white z-20 relative translate-y-[20%] left-10 py-8 overflow-scroll-hidden">
      { agentSkill.filter((skill: any) => skill.type === skillInfo).map((skill: any, index: number) => (
        <div key={index}>
          <SkillTitle name={skill.name} type={skill.type} />
          <div className="prose prose-invert ml-8 text-xl mt-8">
            <ReactMarkdown components={MarkdownComponent}>{skill.description}</ReactMarkdown>
          </div>
        </div>
      )) }
    </section>
  </div>
}

const MarkdownComponent: object = {
  img: (image: any) => (
    <Image className="inline m-1" src={image.src} alt={image.alt} height="28" width="28" />
  )
}

interface ISkillDetail {
  active: boolean,
  agentSkill: any
}

interface ISkillTitle {
  name: string | null,
  type: keyof typeof SkillType
}

enum SkillType {
  BASIC = "Basic Attack",
  SPECIAL = "Special Attack",
  DODGE = "Dodge",
  COMBO = "Combo Attack"
}

enum SkillIcon {
  BASIC = "/icons/Basic Attack Icon.png",
  SPECIAL = "/icons/Special Attack Icon.png",
  DODGE = "/icons/Dodge Icon.png",
  COMBO = "/icons/QTE Icon.png"
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
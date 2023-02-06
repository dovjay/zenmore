import { useRecoilState } from "recoil"
import { AGNINF_skill_info, AGNINF_skill_preview } from "../store/atoms/AgentInfo"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

import DiagonalTexture from "./diagonal-texture"
import CinematicBar from "./cinematic-bar"
import ButtonGroup, { IButtonItem } from "./button-group"
import TwImage from "./tw-image"

function SkillTitle(props: ISkillTitle) {
  let { name, type } = props

  return <div className={`
    w-full border-4 border-neutral-500/50 bg-black/80 
    px-6 py-4 flex gap-4 items-center rounded-xl
    mobile:px-3 mobile:py-2 mobile:gap-2
  `}>
    { !name && <TwImage src={SkillIcon[type]} alt={SkillType[type]} className="w-[48px] h-[48px] mobile:w-[24px] mobile:h-[24px]" /> }
    <h2 className="text-3xl font-bold mobile:text-lg"> { 
      !name ? 
      <span>{SkillType[type]}</span> : 
      <span>{name}</span> 
    } </h2>
  </div>
}

export default function SkillDetail(props: ISkillDetail) {
  let { active, agentSkill } = props

  let [skillInfo, setSkillInfo] = useRecoilState(AGNINF_skill_info)
  let [skillPreview, setSkillPreview] = useRecoilState(AGNINF_skill_preview)

  return <div className={`w-screen h-screen absolute inset-0 z-10 ${!active && "hidden"}`}>
    <DiagonalTexture />
    <CinematicBar isBlackBar>
      <div className="flex items-center w-full h-full absolute px-16 mobile:px-12">
        <ButtonGroup buttons={buttonGroup} state={skillPreview} setState={setSkillPreview} />
        <button className="w-fit h-fit ml-auto" onClick={() => setSkillInfo('')}>
          <TwImage
            src='/icons/Close Button.svg' alt="Close Button"
            className="w-[80px] h-[60px] mobile:w-[40px] mobile:h-[30px]"
          />
        </button>
      </div>
    </CinematicBar>
    <CinematicBar position="bottom" isBlackBar />
    
    <section className={`
      w-1/2 h-[72%] text-white z-20 relative translate-y-[20%]
      left-10 py-4 overflow-scroll-hidden mobile:w-5/12
      mobile:h-[70%] mobile:py-2 mobile:left-8
    `}>
      { skillPreview == 'DESCRIPTION' && <div>
        { agentSkill.filter((skill: any) => skill.type === skillInfo).map((skill: any, index: number) => (
          <div key={index}>
            <SkillTitle name={skill.name} type={skill.type} />
            <div className="prose prose-invert ml-8 text-xl mt-8 mobile:ml-4 mobile:mt-4 mobile:prose-sm">
              <ReactMarkdown components={MarkdownComponent}>{skill.description}</ReactMarkdown>
            </div>
          </div>
        )) }
      </div>}
      { skillPreview == 'STATS' && <div className="h-full flex">
          <h1 className="m-auto font-[1000] card-chara-name text-8xl mobile:text-4xl">COMING SOON</h1>
      </div> }
    </section>
  </div>
}

const MarkdownComponent: object = {
  img: (image: any) => (
    <Image className="inline !m-1" src={image.src} alt={image.alt} height="28" width="28" />
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
    buttonValue: "DESCRIPTION"
  },
  {
    buttonName: "Stats",
    buttonValue: "STATS"
  }
]
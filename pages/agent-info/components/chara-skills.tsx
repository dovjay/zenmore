import { useResetRecoilState, useSetRecoilState } from "recoil"
import { AGNINF_skill_info } from "../../../store/atoms/AgentInfo"
import Image from "next/image"

import SkillButton from "./skill-button"

export default function CharaSkills() {
    let setSkillInfo = useSetRecoilState(AGNINF_skill_info)

    return <div className="bg-black text-white rounded-[1rem] border-4 border-black w-full h-fit bottom-0 mb-8 overflow-hidden relative">
        <div 
            style={{ backgroundImage: `url('/textures/Diagonal Texture 600.png')` }}
            className="absolute w-full h-full opacity-10 bg-[length:24rem]"
        />
        <div className="relative -translate-y-2">
        <h4 className="font-bold text-sm ml-8 my-6 tracking-wide">SKILL INFO</h4>

            <Image 
                src="/icons/Loop Icon.png" alt="Loop Icon" 
                width={40} height={40} 
                className="animate-spin-reverse absolute top-0 right-6" 
            />

            <section className="bg-black p-8 flex gap-4 items-center mt-4">
                <SkillButton 
                    iconSrc="/images/Basic Hi-Res.png" 
                    iconAlt="Basic Attack Icon"
                    buttonName="Basic"
                    onClick={() => setSkillInfo('BASIC')}
                />
                <SkillButton 
                    iconSrc="/images/Special Hi-Res.png" 
                    iconAlt="Special Attack Icon"
                    buttonName="Special"
                    onClick={() => setSkillInfo('SPECIAL')}
                />
                <SkillButton 
                    iconSrc="/images/Dodge Hi-Res.png" 
                    iconAlt="Dodge Icon"
                    buttonName="Dodge"
                    onClick={() => setSkillInfo('DODGE')}
                />
                <SkillButton 
                    iconSrc="/images/QTE Hi-Res.png" 
                    iconAlt="Combo Icon"
                    buttonName="Combo"
                    onClick={() => setSkillInfo('COMBO')}
                />
            </section>

            <h4 className="font-bold text-sm ml-8 my-4 tracking-wide">TALENT INFO</h4>

            <section className="w-full flex flex-col items-center px-8 pb-8">
                <Image src="/images/talent-button-header.png" alt="Talent Button Header" width={205} height={48} />
                <div className="w-full  bg-[#2E312E] text-[#2E312E] rounded-full border-[1rem] border-black p-2 text-center text-2xl font-bold italic">
                    <div className="overflow-clip flex gap-2 w-full rounded-full">
                        <button 
                            className={`
                                bg-black w-full py-2 -skew-x-[16deg] 
                                focus:ring-inset focus:ring-4 focus:ring-[#F6D904] focus:text-[#F6D904] 
                                rounded-l-[2rem] rounded-r-xl
                            `}
                            onClick={() => setSkillInfo('TALENT1')}
                        >
                            1
                        </button>
                        <button 
                            className={`
                                bg-black w-full py-2 -skew-x-[16deg] 
                                focus:ring-inset focus:ring-4 focus:ring-[#F6D904] focus:text-[#F6D904] 
                                rounded-xl
                            `}
                            onClick={() => setSkillInfo('TALENT2')}
                        >
                            2
                        </button>
                        <button 
                            className={`
                                bg-black w-full py-2 -skew-x-[16deg] 
                                focus:ring-inset focus:ring-4 focus:ring-[#F6D904] focus:text-[#F6D904] 
                                rounded-xl
                            `}
                            onClick={() => setSkillInfo('TALENT3')}
                        >
                            3
                        </button>
                        <button 
                            className={`
                                bg-black w-full py-2 -skew-x-[16deg] 
                                focus:ring-inset focus:ring-4 focus:ring-[#F6D904] focus:text-[#F6D904] 
                                rounded-l-xl rounded-r-[2rem]
                            `}
                            onClick={() => setSkillInfo('TALENT4')}
                        >
                            4
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
}
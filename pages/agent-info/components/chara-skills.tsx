import Image from "next/image"

import SkillButton from "./skill-button"

export default function CharaSkills() {
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
                className="animate-spin absolute top-0 right-6" 
            />

            <section className="bg-black p-8 flex gap-4 items-center mt-4">
                <SkillButton 
                    iconSrc="/images/Basic Hi-Res.png" 
                    iconAlt="Basic Attack Icon"
                    buttonName="Basic"
                />
                <SkillButton 
                    iconSrc="/images/Special Hi-Res.png" 
                    iconAlt="Special Attack Icon"
                    buttonName="Special"
                />
                <SkillButton 
                    iconSrc="/images/Dodge Hi-Res.png" 
                    iconAlt="Dodge Icon"
                    buttonName="Dodge"
                />
                <SkillButton 
                    iconSrc="/images/QTE Hi-Res.png" 
                    iconAlt="Combo Icon"
                    buttonName="Combo"
                />
            </section>

            <h4 className="font-bold text-sm ml-8 my-4 tracking-wide">TALENT INFO</h4>

            <section className="w-full flex flex-col items-center p-8">
                <Image src="/images/talent-button-header.png" alt="Talent Button Header" width={205} height={48} />
                <div className="w-full flex gap-2 bg-[#2E312E] text-[#2E312E] rounded-full border-[1rem] border-black p-2 text-center text-2xl font-bold italic">
                    <div className="bg-black w-full py-2 rounded-l-full">1</div>
                    <div className="bg-black w-full py-2">2</div>
                    <div className="bg-black w-full py-2">3</div>
                    <div className="bg-black w-full py-2 rounded-r-full">4</div>
                </div>
            </section>
        </div>
    </div>
}
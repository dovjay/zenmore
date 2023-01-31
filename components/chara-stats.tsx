import Image from "next/image"

import StatInfo from "./stat-info"
import AttackElementIcon from "./attack-element-icon"

export default function CharaStats(props: any) {
    let { agent } = props
    
    return <div className="bg-black text-white rounded-[1rem] border-4 border-black w-full h-fit bottom-0 mb-12 overflow-hidden relative z-10">
        <div 
            style={{ backgroundImage: `url('/textures/Diagonal Texture 600.png')` }}
            className="absolute w-full h-full opacity-10 bg-[length:24rem]"
        />
        <div className="relative">
            <h4 className="font-bold text-sm ml-8 my-4 tracking-wide">AGENT INFO</h4>

            <section className="bg-black px-8 flex items-center">
                <div className="w-full flex flex-col gap-2">
                    <h3 className="text-3xl font-bold">{agent.character.faction.alias}</h3>
                    <h1 className="text-5xl font-bold mb-1">{agent.character.name}</h1>
                    <AttackElementIcon icons={[...agent.character.attack, ...agent.character.element]} />
                </div>
                <Image 
                    src={agent.character.faction.imageUrl} 
                    alt={`${agent.character.faction.name} Logo`} 
                    width={200} height={200}
                />
            </section>

            <section className="flex gap-8 w-full p-8">
                <div className="w-1/2 flex gap-4 flex-col">
                    <StatInfo statName="HP" statValue={agent.character.baseStat.hp} />
                    <StatInfo statName="DEF" statValue={agent.character.baseStat.def} />
                    <StatInfo statName="Crit Rate" statValue={`${agent.character.baseStat.critRate}%`} />
                    <StatInfo statName="PEN Ratio" statValue={`${agent.character.baseStat.penRatio}%`} />
                    <StatInfo statName="Energy Recovery" statValue={agent.character.baseStat.energyRecovery} />
                </div>
                <div className="w-1/2 flex gap-4 flex-col">
                    <StatInfo statName="ATK" statValue={agent.character.baseStat.atk} />
                    <StatInfo statName="Impact" statValue={agent.character.baseStat.impact} />
                    <StatInfo statName="Crit DMG" statValue={`${agent.character.baseStat.critDamage}%`} />
                    <StatInfo statName="PEN" statValue={agent.character.baseStat.pen} />
                    <StatInfo empty />
                </div>
            </section>
        </div>
    </div>
}
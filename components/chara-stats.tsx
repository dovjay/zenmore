import TwImage from "./tw-image"
import StatInfo from "./stat-info"
import AttackElementIcon from "./attack-element-icon"

export default function CharaStats(props: any) {
    let { agent } = props
    
    return <div className={`
      bg-black text-white rounded-[1rem] border-4 border-black
        w-full h-fit bottom-0 mb-12 overflow-hidden relative z-10
        mobile:mb-8
    `}>
        <div 
            style={{ backgroundImage: `url('/textures/Diagonal Texture 600.png')` }}
            className="absolute w-full h-full opacity-10 bg-[length:24rem]"
        />
        <div className="relative">
            <h4 className="font-bold text-sm ml-8 my-4 tracking-wide mobile:my-1 mobile:ml-4 mobile:text-[8px]">AGENT INFO</h4>

            <section className="bg-black px-8 grid grid-cols-3 items-center justify-items-end mobile:px-4">
                <div className="w-full flex flex-col col-span-2 gap-2 mobile:gap-0">
                    <h3 className="text-3xl font-bold mobile:text-sm">{agent.character.faction.alias}</h3>
                    <h1 className="text-5xl font-bold mb-1 mobile:text-xl">{agent.character.name}</h1>
                    <AttackElementIcon icons={[...agent.character.attack, ...agent.character.element]} />
                </div>
                <TwImage 
                    src={agent.character.faction.imageUrl} 
                    alt={`${agent.character.faction.name} Logo`} 
                    className="w-[200px] h-[200px] mobile:w-[80px] mobile:h-[80px] inset-0"
                />
            </section>

            <section className={`
                grid grid-cols-2 gap-x-8 gap-y-4 w-full p-8
                mobile:gap-y-1 mobile:gap-x-2 mobile:p-2
            `}>
                <StatInfo statName="HP" statValue={agent.character.baseStat.hp} />
                <StatInfo statName="ATK" statValue={agent.character.baseStat.atk} />
                <StatInfo statName="DEF" statValue={agent.character.baseStat.def} />
                <StatInfo statName="Impact" statValue={agent.character.baseStat.impact} />
                <StatInfo statName="Crit Rate" statValue={`${agent.character.baseStat.critRate}%`} />
                <StatInfo statName="Crit DMG" statValue={`${agent.character.baseStat.critDamage}%`} />
                <StatInfo statName="PEN Ratio" statValue={`${agent.character.baseStat.penRatio}%`} />
                <StatInfo statName="PEN" statValue={agent.character.baseStat.pen} />
                <StatInfo statName="Energy Recovery" statValue={agent.character.baseStat.energyRecovery} />
                <StatInfo empty />
            </section>
        </div>
    </div>
}
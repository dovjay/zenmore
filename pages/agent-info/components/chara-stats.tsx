import Image from "next/image"

import StatInfo from "./stat-info"

export default function CharaStats() {
    return <div className="bg-black text-white rounded-[1rem] border-4 border-black w-full h-fit bottom-0 mb-20 overflow-hidden relative">
        <div 
            style={{ backgroundImage: `url('/textures/Diagonal Texture 600.png')` }}
            className="absolute w-full h-full opacity-10 bg-[length:24rem]"
        />
        <div className="relative">
            <h4 className="font-bold text-md ml-8 my-4 tracking-wider">AGENT INFO</h4>

            <section className="bg-black p-8 flex items-center">
                <div className="w-full">
                    <h3 className="text-4xl font-bold">Faction Name</h3>
                    <h1 className="text-6xl font-bold">Character Name</h1>
                    <h4 className="text-4xl">Attack/Element Type</h4>
                </div>
                <Image src="/images/faction-logos/HSOS6.png" alt="Faction Name Logo" width={200} height={200} />
            </section>

            <section className="flex gap-8 w-full p-8">
                <div className="w-1/2 flex gap-4 flex-col">
                    <StatInfo statName="HP" statValue="???" />
                    <StatInfo statName="DEF" statValue="???" />
                    <StatInfo statName="Crit Rate" statValue="???" />
                    <StatInfo statName="PEN Ratio" statValue="???" />
                    <StatInfo statName="Energy Recovery" statValue="???" />
                </div>
                <div className="w-1/2 flex gap-4 flex-col">
                    <StatInfo statName="ATK" statValue="???" />
                    <StatInfo statName="Impact" statValue="???" />
                    <StatInfo statName="Crit DMG" statValue="???" />
                    <StatInfo statName="PEN" statValue="???" />
                    <StatInfo empty />
                </div>
            </section>
        </div>
    </div>
}
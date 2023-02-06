import { useRecoilState, useRecoilValue } from 'recoil'
import { SyntheticEvent, useEffect, useState } from 'react'

import { Clamp } from '../lib/math'
import { AGNSLCT_selected_chara, AGNSLCT_charas } from '../store/atoms/AgentSelection'
import CharaCard, { CardClipPath } from './chara-card'

export default function CharaSelection(){ 
    const id: string = 'firstCard'
    let [selectedChara, setSelectedChara] = useRecoilState(AGNSLCT_selected_chara)
    let charas: any = useRecoilValue(AGNSLCT_charas)
    let [hoverNow, setHoverNow] = useState(-1)

    const onScroll = (e: SyntheticEvent<HTMLDivElement>) => {
        let minScroll: number = e.currentTarget.scrollHeight * .25
        let maxScroll: number = e.currentTarget.scrollHeight * .4

        let scrollY: number = Clamp(e.currentTarget.scrollTop, minScroll, maxScroll)
        e.currentTarget.scrollTo(0, scrollY)
    }

    useEffect(() => {
        const element = document.getElementById(id)

        if (element && charas) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }, [charas])
 
    return (
        <> 
            <div className="absolute top-[0px] right-[140px] z-[100] mobile:right-[64px]"> 
                <CardClipPath />
                
                <div 
                    className={`
                        grid grid-cols-3 place-items-center
                        skew-x-[16deg] bg-black h-screen
                        !overflow-x-hidden overflow-scroll-hidden 
                        [&>*:nth-child(3n+2)]:translate-y-[50%]
                        mobile:gap-3 px-2
                    `} 
                    onMouseLeave={() => setHoverNow(-1)}
                    onScroll={e => onScroll(e)}
                >
                {
                    [...Array(9)].map((item: any, index: number) => (
                        <CharaCard key={index + 1000} index={index} />
                    ))
                }
                {
                    charas.map((chara: any, index: number) => (
                        <CharaCard 
                            chara={chara}
                            id={index === 0 ? id : undefined}
                            key={chara.id} 
                            index={index}
                            hoverNow={hoverNow} setHoverNow={setHoverNow}
                            selectedChara={selectedChara} setSelectedChara={setSelectedChara}
                        />
                    ))
                }
                {
                    [...Array(9)].map((item: any, index: number) => (
                        <CharaCard key={index + 2000} index={index} />
                    ))
                }
                </div>
            </div>
        </>
    )
}
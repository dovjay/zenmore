import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useState } from 'react'

import { AGNSLCT_selected_chara, AGNSLCT_charas } from '../../../store/atoms/AgentSelection'
import CharaCard, { CardClipPath } from './chara-card'

export default function CharaSelection(){ 
    let [selectedChara, setSelectedChara] = useRecoilState(AGNSLCT_selected_chara)
    let charas: any = useRecoilValue(AGNSLCT_charas)

    let [hoverNow, setHoverNow] = useState(-1)
 
    return (
        <> 
            <div className="absolute top-[0px] right-[140px] z-[100]"> 
                <CardClipPath />
                
                <div 
                    className={`
                        grid grid-cols-3 place-items-center
                        skew-x-[16deg] bg-black h-screen 
                        overflow-scroll-hidden [&>*:nth-child(3n+2)]:top-[50%]
                    `} 
                    onMouseLeave={() => setHoverNow(-1)}
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
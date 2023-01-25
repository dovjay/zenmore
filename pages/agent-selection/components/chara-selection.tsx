import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useState } from 'react'

import { AGNSLCT_selected_chara, AGNSLCT_charas, AGNSLCT_select_alias } from '../../../store/atoms/AgentSelection'

export default function CharaSelection(){ 
    let [selectedChara, setSelectedChara] = useRecoilState(AGNSLCT_selected_chara)
    let charas: any = useRecoilValue(AGNSLCT_charas)
    let setAlias = useSetRecoilState(AGNSLCT_select_alias)

    let [hoverNow, setHoverNow] = useState(-1)
 
    return (
        <> 
            <div className="absolute top-[0px] right-[140px] z-[100]"> 
                <svg className="svg absolute">
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                        <path d="M0,0 H0.666 C0.698,0,0.725,0.021,0.733,0.052 L1,1 H0.339 C0.308,1,0.281,0.979,0.272,0.949 L0,0"></path>
                    </clipPath>
                </svg>
                <div className="chara-card-container skew-x-[16deg]" onMouseLeave={() => setHoverNow(-1)}>  
                {
                    charas.map((chara: any, index: number) => (
                        <div className={`chara-card relative mx-[-1.9em] skew-x-[-16deg] ${!chara.empty ? 'cursor-pointer' : ''}`} 
                            onMouseEnter={() => setHoverNow(index)} key={chara.id}
                            onClick={() => {
                                setTimeout(() => {
                                    setSelectedChara(index)
                                    setAlias(chara.alias)
                                }, 400)
                            }}
                        >
                            <div className="clipped"
                                style={{
                                    background: !chara.empty && (hoverNow != -1 ? index == hoverNow : index == selectedChara) ? '#F6D904' : '#000000',
                                    width:'224px', height: '216px'
                                }}
                            ></div> 
                            { chara.empty && 
                                <div className="clipped absolute top-[8px] left-[12px]"
                                    style={{
                                        background:`url('${chara.cardImage}') no-repeat center center`,
                                        backgroundSize: '100%'
                                    }}
                                ></div>
                            }
                            { !chara.empty && 
                                <div className="clipped absolute top-[8px] left-[12px]"
                                    style={{
                                        background:`url('${chara.cardImage}') no-repeat center top`,
                                        backgroundSize: '100%'
                                    }}
                                >
                                    <div className='relative w-full h-full'>
                                        <div className='absolute bottom-[0] w-[160px] right-[0] h-[40px] '
                                            style={{ backgroundImage: `url('images/Diagonal Texture 600.svg')`, opacity: 0.5 }}
                                        >
                                        </div>
                                        <div className='absolute bottom-[0] w-[160px] right-[0] h-[40px] '
                                            style={{ backgroundImage: `url('images/Tint.svg')`, opacity: 0.7 }}
                                        >
                                        </div>
                                        <h6 className='mb-0 absolute bottom-[8px] text-right right-[15px] w-[110px] text-white font-[1000] tracking-wide	'>
                                            { chara.alias }
                                        </h6>
                                    </div>
                                </div>
                            }
                            
                        </div>   
                    ))
                }
                </div>
            </div>
        </>
    )
}
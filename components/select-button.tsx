import { useRouter } from 'next/router'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

import { AGNSLCT_change_chara, AGNSLCT_selected_chara, AGNSLCT_charas } from '../store/atoms/AgentSelection'
import { TintType, TintTypeString } from "../lib/TintType"
import TwImage from './tw-image'

export default function SelectButton(){
    let setChangeChara = useSetRecoilState(AGNSLCT_change_chara)
    let [selectedChara, setSelectedChara] = useRecoilState(AGNSLCT_selected_chara)
    let charas = useRecoilValue(AGNSLCT_charas)
    const router = useRouter()

    const onSubmit = () => {
        setChangeChara(true)
        setSelectedChara(selectedChara)
        setTimeout(() => {
            router.push(`/agent-info/${charas[selectedChara].alias}`)
        }, 700)
    }

    return (
        <>
            <svg className="absolute w-0 h-0">
                <clipPath id="select-button-path" clipPathUnits="objectBoundingBox">
                    <path d="M1,0 V1 L0,0.5 L1,0" />
                </clipPath>
            </svg>

            {/* Selector Background */}
            <div className='w-fit h-fit absolute right-0 z-50 cursor-default'>
                <TwImage 
                    className='h-screen w-[800px] object-cover mobile:w-[360px]'
                    src="/images/select-btn/Selector Background.svg" alt='Selector Background'
                />
            </div>

            {/* Side Button */}
            <button 
                className={`
                    absolute w-[132px] right-0 h-screen z-50 clipped-select-button 
                    animate-select-button-slide overflow-clip bg-[length:66px_1080px]
                    mobile:w-[66px] mobile:bg-[length:33px_540px]
                `}
                style={{ backgroundImage: `url('images/select-btn/Animation Tile Loop.png')` }}
                onClick={onSubmit}
            >
                {/* Dot Texture */}
                <TwImage
                    className='h-full w-full absolute'
                    src="/images/select-btn/picthai-free-vector60-11-01 1.png"
                    alt="dot texture"
                />

                {/* Select Button Text */}
                <div className='absolute w-full h-full inset-0'>
                    <TwImage
                        className={`
                            h-[150px] w-[80px] top-[42.25%] left-8
                            mobile:h-[75px] mobile:w-[40px] mobile:left-4
                            mobile:top-[41%]
                        `}
                        src="/images/select-btn/Button Text.svg"
                        alt='Button Text'
                    />
                </div>

                {/* Tint Button */}
                <div
                    className={`
                        ${TintType[charas[selectedChara]?.colorTheme as TintTypeString]}
                        before:content-[''] before:w-full before:h-full before:absolute before:inset-0
                    `}
                />
            </button>
        </>
    )
} 
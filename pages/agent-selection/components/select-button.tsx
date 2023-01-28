import { useRouter } from 'next/router'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

import { AGNSLCT_change_chara, AGNSLCT_selected_chara, AGNSLCT_charas } from '../../../store/atoms/AgentSelection'

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
            <div style={{cursor:'pointer'}} onClick={onSubmit}>
                <svg className="svg absolute">
                    <clipPath id="select-button-path" clipPathUnits="objectBoundingBox"><path d="M1,0 V1 L0,0.5 L1,0"></path></clipPath>
                </svg>
                <img src="/images/select-btn/Selector Background.svg" className="absolute right-[0] z-[100]" style={{height:'100vh', width: '430px', objectFit:'cover'}} />
                
                {/* <img src="/images/select-btn/Side Button Tint.svg" className="absolute right-[0] z-[100]" style={{height:'100vh',}} /> */}
                <div className='w-full h-full before:content-[""] chara-tint-lime'></div>
                <svg width="156" height="1080" viewBox="0 0 130 1080" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    className="absolute right-[0px] z-[100]" style={{height:'100vh',}}>
                    <path d="M156 0V1080L0 540L156 0Z" fill={TintType[charas[selectedChara]?.colorTheme as TintTypeString]} />
                </svg>


                <img src="" className="absolute right-[0] z-[100] clipped-select-button animate-select-button-slide overflow-hidden" 
                    style={{height:'100vh', width:'200px', backgroundImage: `url('images/select-btn/Animation Tile Loop.png')`}} />
                <img src="/images/select-btn/picthai-free-vector60-11-01 1.png" className="absolute right-[0] z-[100] clipped-select-button" style={{height:'100vh'}} />
                <img src="/images/select-btn/Button Text.svg" className="absolute right-[25px] top-[42.5%] z-[100]" style={{height:'150px'}} />
            </div>
        </>
    )
} 

type TintTypeString = keyof typeof TintType

enum TintType {
    LIME = '#6aa300',
    RED = '#be3421',
    PINK = '#af2c4d',
    BLUE = '#239ca5',
    GRAY_INVERT = '#d4d4d4',
    GRAY = '#9e9e9e',
    AMBER = '#c49c18'
}
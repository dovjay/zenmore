import { useRecoilState } from 'recoil'

import { AGNINF_menu, MenuSelector } from '../store/atoms/AgentInfo'

export interface IButtonItem {
    buttonName: string,
    buttonValue: string
}

export interface IButtonGroup {
    buttons: IButtonItem[]
}

interface IActiveBackground {
    position: "first" | "mid" | "last",
    active: boolean
}

function ActiveBackground(props: IActiveBackground) {
    let { position, active } = props

    let first: string = position === 'first' ? 'rounded-l-[2rem] rounded-r-md' : ''
    let mid: string = position === 'mid' ? 'rounded-md' : ''
    let last: string = position === 'last' ? 'rounded-l-md rounded-r-[2rem]' : ''

    return <>
        {
            active && <div 
                className={`
                    absolute inset-0 w-full h-full -skew-x-[24deg] bg-[#F6D904] 
                    ring-[#F6D904] animate-ring-scale
                    ${first} ${mid} ${last}
                `} 
            />
        }
    </> 
}

export default function ButtonGroup(props: IButtonGroup) {
    let { buttons } = props

    const [activeMenu, setActiveMenu] = useRecoilState(AGNINF_menu)

    return (
        <div 
            className='min-w-[32rem] w-3/4 rounded-full bg-black flex border-4 border-neutral-400 text-xl font-bold italic tracking-wider'
        >
            {buttons.map((button, index) => (
                <button key={index} 
                    className='w-full relative py-2 group' 
                    onClick={() => setActiveMenu(button.buttonValue as MenuSelector)}
                >
                    <ActiveBackground 
                        position={index === 0 ? 'first' : index === buttons.length-1 ? 'last' : 'mid'}
                        active={activeMenu === button.buttonValue} 
                    />
                    <span className={`relative ${activeMenu === button.buttonValue ? 'text-black' : 'text-white'}`}>
                        {button.buttonName}
                    </span>
                </button>
            ))}
        </div>
    )
}
import { useState } from "react"
import { SetterOrUpdater, useRecoilState } from "recoil"

export interface IButtonItem {
    buttonName: string,
    buttonValue: string
}

export interface IButtonGroup {
    buttons: IButtonItem[],
    state: any,
    setState: SetterOrUpdater<any>,
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
            active && <div >
                {position == 'first' && <div style={{ right:'13px', top: '0'}}
                    className={`
                        absolute  w-full h-full bg-[#F6D904] 
                        ring-[#F6D904] animate-ring-scale
                        ${first} ${mid} ${last}
                    `} 
                />}
                {position == 'last' && <div style={{ left:'13px', top: '0'}}
                    className={`
                        absolute  w-full h-full bg-[#F6D904] 
                        ring-[#F6D904] animate-ring-scale
                        ${first} ${mid} ${last}
                    `} 
                />}
                <div 
                    className={`
                        absolute inset-0 w-full h-full -skew-x-[24deg] bg-[#F6D904] 
                        ring-[#F6D904] animate-ring-scale
                        ${first} ${mid} ${last}
                    `} 
                />
            </div>
        }
    </> 
}

export default function ButtonGroup(props: IButtonGroup) {
    let { buttons, state, setState } = props

    let [activeButton, setActiveButton] = useState(state)

    const handleOnClick = (buttonValue: string) => {
        setActiveButton(buttonValue)
        setState(buttonValue)
    }

    return (
        <div 
            className='min-w-[32rem] rounded-full bg-black flex border-4 border-neutral-400/50 text-xl font-bold italic tracking-wider'
        >
            {buttons.map((button, index) => (
                <button key={index} 
                    className='w-full relative py-2 group' 
                    onClick={() => handleOnClick(button.buttonValue)}
                >
                    <ActiveBackground 
                        position={index === 0 ? 'first' : index === buttons.length-1 ? 'last' : 'mid'}
                        active={activeButton === button.buttonValue} 
                    />
                    <span className={`relative ${activeButton === button.buttonValue ? 'text-black' : 'text-white'}`}>
                        {button.buttonName}
                    </span>
                </button>
            ))}
        </div>
    )
}
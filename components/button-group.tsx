import { useState } from "react"

export interface IButtonItem {
    buttonName: string,
    buttonValue: string,
    onClick: () => void
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

    let [activeButton, setActiveButton] = useState(buttons[0].buttonValue)

    const handleOnClick = (e: any, buttonValue: string) => {
        setActiveButton(buttonValue)
        e()
    }

    return (
        <div 
            className='min-w-[32rem] rounded-full bg-black flex border-4 border-neutral-400/50 text-xl font-bold italic tracking-wider'
        >
            {buttons.map((button, index) => (
                <button key={index} 
                    className='w-full relative py-2 group' 
                    onClick={() => handleOnClick(button.onClick, button.buttonValue)}
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
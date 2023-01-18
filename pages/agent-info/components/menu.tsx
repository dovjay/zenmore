import { useRecoilState } from 'recoil'

import { AGNINF_menu } from '../../../store/atoms/AgentInfo'

export default function Menu() {
    const [active_menu, setActiveMenu] = useRecoilState(AGNINF_menu)

    return (
        <>
            <div className="nav-wrap w-[600px]">
                <div className="nav-content rounded-full flex h-[50px] p-[0.5em] z-[2]" >
                    <div className={`h-full w-full prev-nav ${active_menu == 'stats' ? 'active' : ''}`}  onClick={() => setActiveMenu('stats')}>
                        Base Stats
                    </div> 
                    <div className={`h-full w-full mid-nav ${active_menu == 'skills' ? 'active' : ''}`}  onClick={() => setActiveMenu('skills')}>
                        Skills
                    </div> 
                    <div className={`h-full w-full next-nav ${active_menu == 'equip' ? 'active' : ''}`}  onClick={() => setActiveMenu('equip')}>
                        Equip
                    </div> 
                </div>
            </div> 
        </>
    )
}
import MenuCorner from '../../components/menu-corner'
import CharaPreview from '../agent-selection/components/chara-preview'
import BangbooBackground from '../agent-selection/components/bangboo-background'
import FilmRollBackground from './components/film-roll-background'
import Menu from './components/menu'
import LightingBackground from './components/lighting-background'

import CharaStats from './components/chara-stats'
import CharaSkills from './components/chara-skills'
import CharaEquip from './components/chara-equip'

import { useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSelectedCharacter } from '../../store/selectors/AgentSelection'

import { AGNINF_menu } from '../../store/atoms/AgentInfo'

export default function AgentSelection() {

    let selectedCharacter = useRecoilValue(getSelectedCharacter)
    let menu = useRecoilValue(AGNINF_menu)
    const router = useRouter()

    useEffect(() => {
        if(Object.keys(selectedCharacter).length === 0)
            router.push('/agent-selection')
    }, [])

    return (
        <>
            <div className='relative h-screen bg-[#000000]'>
                <div className=''>
                    <BangbooBackground />
                    <LightingBackground />
                    <FilmRollBackground />
                    <MenuCorner />
                    <CharaPreview charaName={false} />

                    <div className='w-1/3 absolute right-20 bottom-0 mb-20'>
                        { menu === 'stats' && <CharaStats /> }
                        { menu === 'skills' && <CharaSkills /> }
                        { menu === 'equip' && <CharaEquip /> }
                        <Menu />
                    </div>

                </div>
            </div>
        </>
    )
}

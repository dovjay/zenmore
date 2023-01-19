import MenuCorner from '../../components/menu-corner'
import CharaPreview from '../agent-selection/components/chara-preview'
import BangbooBackground from '../agent-selection/components/bangboo-background'
import FilmRollBackground from './components/film-roll-background'
import ButtonGroup, { IButtonItem } from '../../components/button-group'
import LightingBackground from './components/lighting-background'

import CharaStats from './components/chara-stats'
import CharaSkills from './components/chara-skills'
import CharaEquip from './components/chara-equip'
import SkillDetail from './components/skill-detail'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSelectedCharacter } from '../../store/selectors/AgentSelection'

import { AGNINF_skill_info, AGNINF_menu } from '../../store/atoms/AgentInfo'

export default function AgentSelection() {
    let selectedCharacter = useRecoilValue(getSelectedCharacter)
    let menu = useRecoilValue(AGNINF_menu)
    let setActiveMenu = useSetRecoilState(AGNINF_menu)
    let skill_info = useRecoilValue(AGNINF_skill_info)
    const router = useRouter()
    

    const buttonGroup: IButtonItem[] = [
        {
            buttonName: 'Base Stats',
            buttonValue: 'stats',
            onClick: () => setActiveMenu('stats')
        },
        {
            buttonName: 'Skills',
            buttonValue: 'skills',
            onClick: () => setActiveMenu('skills')
        },
        {
            buttonName: 'Equip',
            buttonValue: 'equip',
            onClick: () => setActiveMenu('equip')
        }
    ]

    useEffect(() => {
        if(Object.keys(selectedCharacter).length === 0)
            router.push('/agent-selection')
    }, [router, selectedCharacter])

    return (
        <div className='relative h-screen bg-black'>
            <div className=''>
                <BangbooBackground />
                <LightingBackground />
                <FilmRollBackground tintColor="#65a30d" />
                <MenuCorner />
                <CharaPreview charaName={false} />
                
                <SkillDetail active={skill_info !== ''} />

                <div className='w-[48rem] absolute right-24 bottom-28 z-10'>
                    { menu === 'stats' && <CharaStats /> }
                    { menu === 'skills' && <CharaSkills /> }
                    { menu === 'equip' && <CharaEquip /> }
                </div>
                <div className='w-[48rem] absolute right-24 bottom-12 flex justify-center'>
                    <ButtonGroup buttons={buttonGroup} />
                </div>
            </div>
        </div>
    )
}

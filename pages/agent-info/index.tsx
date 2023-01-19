import MenuCorner from '../../components/menu-corner'
import CharaPreview from '../agent-selection/components/chara-preview'
import BangbooBackground from '../agent-selection/components/bangboo-background'
import FilmRollBackground from './components/film-roll-background'
import ButtonGroup, { IButtonItem } from '../../components/button-group'
import LightingBackground from './components/lighting-background'

import CharaStats from './components/chara-stats'
import CharaSkills from './components/chara-skills'
import CharaEquip from './components/chara-equip'

import { useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSelectedCharacter } from '../../store/selectors/AgentSelection'

import { AGNINF_menu } from '../../store/atoms/AgentInfo'

const buttonGroup: IButtonItem[] = [
    {
        buttonName: 'Base Stats',
        buttonValue: 'stats'
    },
    {
        buttonName: 'Skills',
        buttonValue: 'skills'
    },
    {
        buttonName: 'Equip',
        buttonValue: 'equip'
    }
]

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
                    <FilmRollBackground tintColor="#65a30d" />
                    <MenuCorner />
                    <CharaPreview charaName={false} />

                    <div className='w-[48rem] absolute right-24 bottom-20'>
                        { menu === 'stats' && <CharaStats /> }
                        { menu === 'skills' && <CharaSkills /> }
                        { menu === 'equip' && <CharaEquip /> }
                        <div className='w-full flex justify-center'>
                            <ButtonGroup buttons={buttonGroup} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

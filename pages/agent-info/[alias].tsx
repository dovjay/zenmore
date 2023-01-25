import MenuCorner from '../../components/menu-corner'
import BangbooBackground from '../agent-selection/components/bangboo-background'
import FilmRollBackground from './components/film-roll-background'
import ButtonGroup, { IButtonItem } from '../../components/button-group'
import LightingBackground from './components/lighting-background'

import CharaStats from '../../components/chara-stats'
import CharaSkills from './components/chara-skills'
import CharaEquip from './components/chara-equip'
import SkillDetail from '../../components/skill-detail'

import Image from 'next/image'
import { AGNINF_skill_info, AGNINF_menu, AGNINF_agent } from '../../store/atoms/AgentInfo'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from "swr"
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(r => r.data)

export default function AgentInfo() {
    const router = useRouter()
    const { alias } = router.query
    const setAgent = useSetRecoilState(AGNINF_agent)

    const { data, error, isLoading } = useSWR(`/api/characters/${alias}`, fetcher)

    useEffect(() => {
        if (data) setAgent(data)
    }, [data, setAgent])

    let menu = useRecoilValue(AGNINF_menu)
    let setActiveMenu = useSetRecoilState(AGNINF_menu)
    let skill_info = useRecoilValue(AGNINF_skill_info)
    
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

    if (error) return <div>Something went wrong! {error.toString()}</div>
    
    if (isLoading) return <div>Loading...</div>

    return (
        <div className='relative h-screen bg-black'>
            <div className=''>
                <BangbooBackground />
                <LightingBackground />
                <FilmRollBackground tintColor="#65a30d" />
                <MenuCorner />

                <Image 
                    alt="Chara Preview"  fill 
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
                    className="!absolute h-screen !left-[-10%]" 
                    src={data.character.fullImage} 
                />
                
                <SkillDetail active={skill_info !== ''} agentSkill={data.character.skills} />

                <div className='w-[48rem] absolute right-24 bottom-28 z-10'>
                    { menu === 'stats' && <CharaStats agent={data} /> }
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

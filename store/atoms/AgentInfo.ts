import { atom } from 'recoil'

export type MenuSelector = 'stats' | 'skills' | 'equip'

export type SkillSelector = 'basic' | 'special' | 'dodge' | 'combo' | 'talent1' | 'talent2' | 'talent3' | 'talent4' | ''

export const AGNINF_menu = atom<MenuSelector>({
    key: 'AGNINF_menu',
    default: 'stats',
})

export const AGNINF_skill_info = atom<SkillSelector>({
    key: 'AGINF_skill_info',
    default: ''
})
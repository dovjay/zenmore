import { atom } from 'recoil'

export type MenuSelector = 'stats' | 'skills' | 'equip'

export type SkillSelector = 'BASIC' | 'SPECIAL' | 'DODGE' | 'COMBO' | 'TALENT1' | 'TALENT2' | 'TALENT3' | 'TALENT4' | ''

export type SkillPreviewSelector = 'DESCRIPTION' | 'STATS'

export const AGNINF_menu = atom<MenuSelector>({
    key: 'AGNINF_menu',
    default: 'stats',
})

export const AGNINF_skill_info = atom<SkillSelector>({
    key: 'AGINF_skill_info',
    default: ''
})

export const AGNINF_skill_preview = atom<SkillPreviewSelector>({
    key: 'AGNINF_skill_preview',
    default: 'DESCRIPTION'
})

export const AGNINF_agent = atom<any>({
    key: 'AGNINF_agent',
    default: {}
})
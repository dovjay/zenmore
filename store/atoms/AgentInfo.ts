import { atom } from 'recoil'

export type MenuSelector = 'stats' | 'skills' | 'equip'

export const AGNINF_menu = atom<MenuSelector>({
    key: 'AGNINF_menu',
    default: 'stats',
}); 
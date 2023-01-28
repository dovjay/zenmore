import { atom } from 'recoil'

type Charas = {
    name: string,
    alias: string,
    cardImage: string,
    fullImage: string,
    colorTheme: string
}

export const AGNSLCT_selected_chara = atom<number>({
    key: 'AGNSLCT_selected_chara',
    default: 0,
})

export const AGNSLCT_charas = atom<Charas[]>({
    key : 'AGNSLCT_charas',
    default: []
})

export const AGNSLCT_change_chara = atom<boolean>({
    key : 'AGNSLCT_change_chara',
    default: false
})
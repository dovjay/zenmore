import { atom } from 'recoil'

type Charas = {
    name?: string,
    nickname?: string,
    image: string,
    big_charas?: string,
    empty?: boolean
}

export const AGNSLCT_selected_chara = atom({
    key: 'AGNSLCT_selected_chara',
    default: 0,
});

export const AGNSLCT_charas = atom<Charas[]>({
    key : 'AGNSLCT_charas',
    default: []
})

export const AGNSLCT_change_chara = atom({
    key : 'AGNSLCT_change_chara',
    default: false
})
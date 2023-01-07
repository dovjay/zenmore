import {atom} from 'recoil'

export const AGNSLCT_selected_chara = atom({
    key: 'AGNSLCT_selected_chara',
    default: 0,
});

export const AGNSLCT_charas = atom({
    key : 'AGNSLCT_charas',
    default: []
})

export const AGNSLCT_change_chara = atom({
    key : 'AGNSLCT_change_chara',
    default: false
})
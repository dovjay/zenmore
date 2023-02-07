import axios from 'axios';
import { selector } from 'recoil'
import { AGNSLCT_selected_chara } from '../atoms/AgentSelection'

export const getSelectedCharacter = selector({
    key: 'getSelectedCharacter',
    get: async ({ get }) => {
        // const characterId = get(AGNSLCT_selected_chara)
        // const character = await axios.get(`/api/characters/${characterId}`)
        // return character.data
    },
});
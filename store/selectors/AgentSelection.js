import {selector} from 'recoil';
import {AGNSLCT_charas, AGNSLCT_selected_chara} from '../atoms/AgentSelection';

export const getSelectedCharacter = selector({
    key: 'getSelectedCharacter',
    get: ({get}) => {
        const charas = get(AGNSLCT_charas);
        const idx = get(AGNSLCT_selected_chara);
      
        if(idx == null || idx < 0 || idx >= charas.length){
            return {}
        }

        return charas[idx];
    },
});
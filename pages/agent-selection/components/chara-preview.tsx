import { useRecoilValue } from 'recoil'
import { getSelectedCharacter } from '../../../store/selectors/AgentSelection'
import { AGNSLCT_charas, AGNSLCT_selected_chara } from '../../../store/atoms/AgentSelection'


export default function CharaPreview(){

    let selectedCharacter = useRecoilValue(getSelectedCharacter)
    let charas: any = useRecoilValue(AGNSLCT_charas)
    let selected = useRecoilValue(AGNSLCT_selected_chara)

    return (
        <>
            <div>
                {
                    charas.map((chara: any, index: any) => (
                        <div key={index + 'chara-big-image'} className={`${selected == index ? 'opacity-100' : 'opacity-0'}`}>
                            <img className="absolute h-screen" src={chara.big_charas} />
                            <h2 className="text-4xl font-[900] text-white absolute bottom-[50px] left-[100px]">{chara.name}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
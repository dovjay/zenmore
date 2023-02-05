import { useRecoilValue } from 'recoil'
import { AGNSLCT_charas, AGNSLCT_selected_chara } from '../store/atoms/AgentSelection'
import Image from "next/image"

export default function CharaPreview(props:any){
    let charas: any = useRecoilValue(AGNSLCT_charas)
    let selected = useRecoilValue(AGNSLCT_selected_chara)

    return (
        <div>
            {
                charas.map((chara: any, index: any) => (
                    <div key={index + 'chara-big-image'} className={`${selected == index ? 'opacity-100' : 'opacity-0'}`}>
                        <div className=''>
                            <Image alt="Chara Preview"  fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
                                className="absolute h-screen !left-[-15%] mobile:!left-[-17%]" src={chara.fullImage} />
                        </div>
                        {
                            props.charaName != false && 
                            <h2 className={`
                                text-4xl font-[900] text-white absolute bottom-[50px] left-[100px]
                                mobile:text-2xl mobile:left-[28px] mobile:bottom-[20px] shadow-sm
                            `}>
                                {chara.name}
                            </h2>
                        }
                    </div>
                ))
            }
        </div>
    )
}
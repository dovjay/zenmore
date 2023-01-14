import MenuCorner from '../../components/menu-corner'
import CharaSelection from './components/chara-selection'
import CharaPreview from './components/chara-preview'
import BangbooBackground from './components/bangboo-background'
import SelectButton from './components/select-button'

import { useRecoilState } from 'recoil'
import { AGNSLCT_charas, AGNSLCT_change_chara } from '../../store/atoms/AgentSelection'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import chara_data from './data.json'

import animationData from '../../public/lottiefiles/Zenmore_Transition.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export default function AgentSelection() {

  let [charas, setCharas] = useRecoilState(AGNSLCT_charas)
  let [change_chara, setChangeChara] = useRecoilState(AGNSLCT_change_chara)
  const lottieRef:any = useRef<LottieRefCurrentProps>(null);
  const router = useRouter()
  const [show, setShow] = useState(true)

  useEffect(() => {
    setCharas(chara_data.chara)
  }, [setCharas])

  useEffect(() => {
    lottieRef.current?.play();
    setTimeout(() => {
      lottieRef.current?.stop();
      setChangeChara(false) 
    }, 700) 

    if(change_chara)
    setTimeout(() => { 
      setShow(false)
    }, 400) 
  }, [change_chara, setChangeChara])

  return (
    <>
      <div className='relative h-screen bg-[#000000] overflow-hidden'>
        <div className=''>
          {
            show && <div>
              <SelectButton />
              <CharaSelection />
            </div>
          }
          <BangbooBackground />
          <MenuCorner />
          <CharaPreview />
        </div>

        <div className={`h-screen w-screen absolute ${change_chara ? 'z-[250]' : 'z-[-1]'}`}>
          <Lottie lottieRef={lottieRef} animationData={animationData} loop={true} autoplay={false}  
            className={`h-screen w-screen z-[250] absolute scale-[1.2]`} />
        </div>
      </div>
    </>
  )
}

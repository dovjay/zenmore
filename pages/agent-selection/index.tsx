import MenuCorner from '../../components/menu-corner'
import CharaSelection from '../../components/chara-selection'
import CharaPreview from '../../components/chara-preview'
import BangbooBackground from '../../components/bangboo-background'
import SelectButton from '../../components/select-button'
import Loading from '../loading'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { AGNSLCT_change_chara, AGNSLCT_charas } from '../../store/atoms/AgentSelection'
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import Head from 'next/head'

import animationData from '../../public/lottiefiles/Zenmore_Transition.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(r => r.data)

export default function AgentSelection() {
  let setCharas = useSetRecoilState(AGNSLCT_charas)
  let [change_chara, setChangeChara] = useRecoilState(AGNSLCT_change_chara)
  const lottieRef:any = useRef<LottieRefCurrentProps>(null)
  const [show, setShow] = useState(true)

  const { data, error, isLoading } = useSWR('/api/characters', fetcher)

  useEffect(() => {
    if (data) setCharas(data.characters)
  }, [data, setCharas])

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

  if (error) return <div>Something went wrong! {error.toString()}</div>

  if (isLoading) return <Loading />

  return (
    <>
      <Head>
        <title>Zenmore | Agent Selection</title>
      </Head>

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

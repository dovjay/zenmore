import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import MenuCorner from './components/menu-corner'
import CharaSelection from './components/chara-selection'
import CharaPreview from './components/chara-preview'
import BangbooBackground from './components/bangboo-background'
import SelectButton from './components/select-button'


import { useRecoilState } from 'recoil'
import { AGNSLCT_charas, AGNSLCT_change_chara } from '../../store/atoms/AgentSelection'
import { useEffect, useRef } from 'react'

import chara_data from './data.json'

import Lottie from 'react-lottie';
import animationData from '../../public/Zenmore_Transition.json';

export default function Home() {

  let [charas, setCharas] = useRecoilState(AGNSLCT_charas)
  let [change_chara, setChangeChara] = useRecoilState(AGNSLCT_change_chara)

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    setCharas(chara_data?.chara)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setChangeChara(false)
    }, 600)
  }, [change_chara])

  return (
    <>
      <div className='relative h-screen bg-[#000000]'>
        <div className=''>
          <SelectButton />
          <BangbooBackground />
          <MenuCorner />
          <CharaSelection />
          <CharaPreview />
        </div>
        
        <div className={`h-screen w-screen z-[250] absolute ${change_chara ? 'block' : 'hidden'}`}>
           <Lottie 
              isStopped={!change_chara}
              options={defaultOptions}
              className="h-screen w-screen"
          />
        </div>
      </div>
    </>
  )
}

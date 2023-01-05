import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import MenuCorner from './components/menu-corner'
import CharaSelection from './components/chara-selection'
import CharaPreview from './components/chara-preview'
import BangbooBackground from './components/bangboo-background'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-[#000000]'>
        <BangbooBackground />
        <MenuCorner />
        <CharaSelection />
        <CharaPreview />
      </div>
    </>
  )
}

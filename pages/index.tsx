import Head from 'next/head'
import TwImage from '../components/tw-image'

import CinematicBar from '../components/cinematic-bar'
import DynamicVideoBackground from '../components/dynamic/dynamic-video-background'
import NewsSlider from '../components/news-slider'
import MenuLinkCard from '../components/menu-link-card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zenmore</title>
      </Head>

      <DynamicVideoBackground displayInframe={true} />

      <CinematicBar>
        <div className='flex items-center h-full px-8 py-4'>
          <TwImage 
            className='h-[64px] w-[52px] mobile:h-[30px] mobile:w-[26px]'
            src="/ZZZ Logo.png" alt="ZZZ Logo"
          />
          <h1 className='ml-8 text-4xl font-bold font-display text-white mobile:text-xl'>
            ZENMORE
          </h1>
          <a 
            className='ml-auto text-3xl text-white font-bold mobile:text-lg hover:animate-pulse'
            href='https://ko-fi.com/dovjay' target='_blank' rel='noreferrer'
          >
            Support Us!
          </a>
        </div>
      </CinematicBar>

      <NewsSlider />

      <CinematicBar position="bottom">
        <div className='flex items-center justify-center gap-1'>
          <MenuLinkCard href="/agent-selection" icon="/icons/Agents Icon.png" name="Agents" />
          <MenuLinkCard href="/posts" icon="/icons/Proxy Icon.png" name="Game Info" />
        </div>
      </CinematicBar>
      
      <footer className='text-white text-center text-md fixed bottom-0 bg-black w-screen mobile:text-sm'>
        <span>
          Copyright © COGNOSPHERE  |  Created by Re:Noir
        </span>
      </footer>
    </>
  )
}

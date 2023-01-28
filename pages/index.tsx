import Head from 'next/head'
import Image from 'next/image'

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
          <Image src="/ZZZ Logo.png" alt="ZZZ Logo" width={64} height={68} />
          <h1 className='ml-8 text-4xl font-bold font-display text-white'>ZENMORE</h1>
          <button className='ml-auto text-3xl text-white font-bold'>Support Us!</button>
        </div>
      </CinematicBar>

      <NewsSlider />

      <CinematicBar position="bottom">
        <div className='flex items-center justify-center gap-1'>
          <MenuLinkCard href="/agent-selection" icon="/icons/Agents Icon.png" name="Agents" />
          <MenuLinkCard href="/posts" icon="/icons/Proxy Icon.png" name="Game Info" />
        </div>
      </CinematicBar>
      
      <footer className='text-white text-center text-md fixed bottom-0 bg-black w-screen'>
        <span>
          Copyright © COGNOSPHERE  |  Created by Re:Noir
        </span>
      </footer>
    </>
  )
}

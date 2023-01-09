import Head from 'next/head'
import Image from 'next/image'

import CinematicBar from '../components/CinematicBar'
import DynamicVideoBackground from '../components/DynamicVideoBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicVideoBackground />
      <CinematicBar position="top">
        <div className='flex items-center h-full px-8 py-4'>
          <Image src="/ZZZ Logo.png" alt="ZZZ Logo" width={64} height={68} />
          <h1 className='ml-8 text-4xl font-bold font-display text-white'>ZENMORE</h1>
          <button className='ml-auto text-3xl text-white font-bold'>Support Us!</button>
        </div>
      </CinematicBar>
      <CinematicBar position="bottom" />
    </>
  )
}

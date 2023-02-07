import Lottie from 'lottie-react'
import Head from 'next/head'
import loadingAnimation from '../public/lottiefiles/Bangboo Loading.json'

export default function Loading() {
  return <>
    <Head>
      <title>Zenmore | Loading...</title>
    </Head>
    <div className="w-screen h-screen">
      <Lottie 
        animationData={loadingAnimation}
        loop
        autoplay
        className='absolute bottom-4 right-4'
      />
    </div>
  </>
}
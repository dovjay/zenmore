import '../styles/globals.css'
import '../styles/CharaSelection.css'

import type { AppProps } from 'next/app'
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className="">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )
}

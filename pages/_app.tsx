import '../styles/globals.css'
import '../styles/CharaSelection.css'

import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { RecoilRoot } from 'recoil'
import { Analytics } from '@vercel/analytics/react'

import Layout from '../components/layout'

export type NextPageWithLayout<P = {}, IP = P>   = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </RecoilRoot>
  )
}

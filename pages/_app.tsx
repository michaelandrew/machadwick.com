import { Karla } from '@next/font/google'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'

const karla = Karla()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${karla.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
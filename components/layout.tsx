import Head from 'next/head'

import config from '../config'
import Header from './header'

type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>{config.siteMetadata.title}</title>
      <meta name="description" content={config.siteMetadata.description} />
    </Head>
    <Header acronym={config.siteMetadata.acronym} />
    {children}
  </>
)

export default Layout
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'
import SEO from '../components/seo'


const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <SEO title="Home" keywords={[ 
            'react', 
            'angular', 
            'frontend',
            'javascript', 
            'software developer'
          ]} />
          <Title title={data.site.siteMetadata.title}
                 description={data.site.siteMetadata.description} />
        </Layout>

      </>
    )}
  />
)

export default IndexPage

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteAcronymQuery {
        site {
          siteMetadata {
            acronym
          }
        }
      }
    `}
    render={data => (
      <>
        <Header acronym={data.site.siteMetadata.acronym} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

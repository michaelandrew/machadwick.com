import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ acronym }) => (
  <header className="header">
    {acronym}
  </header>
)

Header.propTypes = {
  acronym: PropTypes.string,
}

Header.defaultProps = {
  acronym: 'MC',
}

export default Header

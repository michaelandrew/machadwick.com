import PropTypes from 'prop-types'
import React from 'react'

import './title.css'

const Title = ({ title, description }) => (
  <div className="title">
    <h1 className="title__heading">
      {title}
    </h1>
    <p class="title__sub">
      {description}
    </p>
    <div class="title__contact">
      <a href="https://github.com/michaelandrew" target="_blank">Github</a>
      <a href="mailto:michael.andrew.chadwick@gmail.com">Email</a>
      <a href="https://s3.eu-west-2.amazonaws.com/static.machadwick.com/Michael+Chadwick.pdf" target="_blank">CV</a>
    </div>
  </div>
)

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: 'Michael Chadwick',
}

export default Title

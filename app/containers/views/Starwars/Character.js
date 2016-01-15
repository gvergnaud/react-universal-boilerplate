import React, { Component, PropTypes } from 'react'

const Character = ({ name, gender }) => (
  <div>
    <p>{name} ({gender})</p>
  </div>
)

Character.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
}

export default Character

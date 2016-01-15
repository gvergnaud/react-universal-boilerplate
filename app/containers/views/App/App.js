import React, { Component, PropTypes } from 'react'
import Navigation from 'components/Navigation'
import './App.scss'

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

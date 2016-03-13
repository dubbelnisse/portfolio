import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'

export class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default CSSModules(App, styles)

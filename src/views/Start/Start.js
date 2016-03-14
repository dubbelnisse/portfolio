import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'

export class StartPage extends Component {
  render () {
    return (
      <div style={{height: window.innerHeight + 'px'}} styleName="wrap">
        <img src="/static/images/me.jpg" styleName="me" />
      </div>
    )
  }
}

export default CSSModules(StartPage, styles)

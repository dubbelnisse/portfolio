import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'
import Icon from '../../components/Icon/Icon'

export class StartPage extends Component {
  render () {
    return (
      <div style={{height: window.innerHeight + 'px'}} styleName="wrap">
        <img src="/static/images/me.jpg" styleName="me" />
        <div styleName="social">
          <a href="https://se.linkedin.com/in/nils-nilsson-94604143">
            <Icon
              color="blue"
              icon="fa-linkedin" />
          </a>
          <a href="https://github.com/dubbelnisse">
            <Icon
              icon="fa-github" />
          </a>
        </div>
      </div>
    )
  }
}

export default CSSModules(StartPage, styles)

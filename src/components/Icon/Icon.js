import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Icon.css'
import classNames from 'classnames'

export class Icon extends Component {
  render () {
    const styles = classNames('wrap', this.props.color)

    return (
      <div styleName={styles}>
        <i className={`fa ${this.props.icon}`} styleName="icon" />
      </div>
    )
  }
}

export default CSSModules(Icon, styles, { allowMultiple: true })

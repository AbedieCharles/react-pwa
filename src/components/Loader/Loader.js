import React, { Component } from 'react'

// Style
import styles from '../../components/Loader/Loader.scss'

export default class Loader extends Component {
  render () {
    return (
      <div className={styles.container}>
        Loading
      </div>
    )
  }
}

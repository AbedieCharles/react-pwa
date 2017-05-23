import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Style
import styles from '../../components/Nav/Nav.scss'

export default class Nav extends Component {
  render () {
    return (
      <ul>
        <li className={styles.item}>
          <NavLink to='/posts' className={styles.item}>
            Posts
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/about' className={styles.item}>
            About
          </NavLink>
        </li>
      </ul>
    )
  }
}

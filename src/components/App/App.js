import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// Style
import 'normalize.css'
import styles from '../../components/App/App.scss'

// Components
import Header from '../../components/Header/Header'
import Routes from '../../components/Routes/Routes'

const customHistory = createBrowserHistory()

export default class App extends Component {
  render () {
    return (
      <Router history={customHistory}>
        <div className={styles.main}>
          <Header />
          <div className={styles.container}>
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

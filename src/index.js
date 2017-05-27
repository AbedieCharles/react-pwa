import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'

// Commons styles
import './styles/base.scss'

// Components
import App from './components/App/App'

render(<App />, document.getElementById('App'))

if (process.env.NODE_ENV === 'production') {
  install()
}

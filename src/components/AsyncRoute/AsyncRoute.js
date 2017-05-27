import React, { Component } from 'react'

// Components
import Loader from '../../components/Loader/Loader'

export default class AsyncRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.props.loading.then(module => {
      this.component = module.default
      console.log(this.component)
      this.setState({loaded: true})
    })
  }

  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <Loader />
    }
  }
}

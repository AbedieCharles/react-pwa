import React, { Component } from 'react'

// Components
import Post from '../../components/Post/Post'

export default class PostDetail extends Component {
  render () {
    return (
      <div>
        <Post {... this.props.post} />
      </div>
    )
  }
}

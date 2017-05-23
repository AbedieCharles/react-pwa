import React, { Component } from 'react'

// Components
import Post from '../../components/Post/Post'
import posts from '../../../article.json'

export default class Home extends Component {
  render () {
    return (
      <div>
        Home
        {posts.posts.map(post => <Post title={post.title} slug={post.slug} excerpt={post.excerpt} titleLink key={post.slug} />)}
      </div>
    )
  }
}

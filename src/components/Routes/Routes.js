import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Data
import posts from '../../../article.json'

// Components
import Home from '../../components/Home/Home'
import Post from '../../components/Post/Post'
import About from '../../components/About/About'
import PostDetail from '../../components/PostDetail/PostDetail'
import NoMatch from '../../components/NoMatch/NoMatch'

export default class Routes extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={Post} />
          <Route path='/about' component={About} />
          <Route path='/post/:slug' component={props => {
            const post = posts.posts.filter(post => props.match.params.slug === post.slug)
            return <PostDetail post={post[0]} />
          }} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Data
import posts from '../../../article.json'

// Components
import AsyncRoute from '../../components/AsyncRoute/AsyncRoute'
import Post from '../../components/Post/Post'

export default class Routes extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={props => <AsyncRoute props={Object.assign({}, props, posts)} loading={System.import('../Home/Home')} />} />
          <Route path='/about' component={props => <AsyncRoute loading={System.import('../About/About')} />} />
          <Route path='/post/:slug' component={props => {
            const post = posts.posts.filter(post => props.match.params.slug === post.slug)
            return <AsyncRoute props={Object.assign({}, props, {post: post[0]})} loading={System.import('../PostDetail/PostDetail')} />
          }} />
          <Route component={props => <AsyncRoute props={props} loading={System.import('../NoMatch/NoMatch')} />} />
        </Switch>
      </div>
    )
  }
}

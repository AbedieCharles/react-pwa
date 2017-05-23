import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// Style
import 'normalize.css'
import styles from '../../components/App/App.scss'

// Data
import posts from '../../../article.json'

// Components
import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home'
import Post from '../../components/Post/Post'
import PostDetail from '../../components/PostDetail/PostDetail'
import NoMatch from '../../components/NoMatch/NoMatch'

const customHistory = createBrowserHistory()

export default class App extends Component {
  render () {
    return (
      <Router history={customHistory}>
        <div className={styles.main}>
          <Header />
          <div className={styles.container}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/posts' component={Post} />
              <Route path='/post/:slug' component={props => {
                const post = posts.posts.filter(post => props.match.params.slug === post.slug)
                console.log(post)
                return <PostDetail post={post[0]} />
              }} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

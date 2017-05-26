import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Post extends Component {
  render () {
    return (
      <article>
        <h2>
          {this.props.titleLink ? <Link to={`/post/${this.props.slug}`}>{this.props.title}</Link> : this.props.title}
          <p>{this.props.excerpt}</p>
        </h2>
        {this.props.titleLink ? '' : <div>{this.props.content}</div>}
      </article>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string
}

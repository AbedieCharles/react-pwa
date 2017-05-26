import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Routes from '../../components/Routes/Routes'
import PostDetail from '../../components/PostDetail/PostDetail'
import NoMatch from '../../components/NoMatch/NoMatch'

test('should render the Home component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(Home).length).toBe(1)
})


test('should render the About component when visiting /about', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/about' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(About).length).toBe(1)
})

test('should render the PostDetail component when visiting /post/:slug', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/post/1' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(PostDetail).length).toBe(1)
})

test('should render the NotFound component when visiting /404-not-found', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/404-not-found' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(NoMatch).length).toBe(1)
})
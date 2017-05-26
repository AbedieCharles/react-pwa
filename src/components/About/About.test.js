import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

// Components
import About from '../../components/About/About'

test('About component should render as excepted', () => {
  const component = shallow(<About />)
  const tree = toJson(component)
  console.log(tree)
  expect(tree).toMatchSnapshot()
})

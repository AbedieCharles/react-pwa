import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

// Components
import Header from '../../components/Header/Header'

test('Header component should render as excepted', () => {
  const component = shallow(<Header />)
  const tree = toJson(component)
  console.log(tree)
  expect(tree).toMatchSnapshot()
})

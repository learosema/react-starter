/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import CheckboxWithLabel from './CheckboxWithLabel'

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn='Yes' labelOff='No' />)
  expect(checkbox.text()).toEqual('No')
  checkbox.find('input').simulate('change')
  expect(checkbox.text()).toEqual('Yes')
})

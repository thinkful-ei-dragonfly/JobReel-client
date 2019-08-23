import React from 'react';
import ReactDOM from 'react-dom'
import Company from './Company'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Company smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Company />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Company snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Company />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('opens the edit company form', () => {
    const wrapper = shallow(<Company />)
    wrapper.find('.edit-button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
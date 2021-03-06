import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Contact from './Contact'

const props = {
  key: 1,
  id: 1,
  name: 'name',
  job_title: 'job title',
  company: 'company',
  email: 'email@email.com',
  linkedin: 'http://www.linkedin.com',
  comments: 'comment',
  date: new Date(),
  connected: true,
  user: 2
}

describe('Contact smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Contact {...props} />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Contact snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Contact {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens the edit form', () => {
    const wrapper = shallow(<Contact {...props} />)
    wrapper.find('.edit-button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
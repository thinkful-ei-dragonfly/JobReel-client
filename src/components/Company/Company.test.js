import React from 'react';
import ReactDOM from 'react-dom'
import Company from './Company'

describe('Company smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Company />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})
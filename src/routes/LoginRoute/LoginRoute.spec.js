import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginRoute from './LoginRoute';

configure({ adapter: new Adapter()})

describe('<LoginRoute />', () => {
  it('should render without crashing', () => {
    shallow(<LoginRoute />);    
  })
})
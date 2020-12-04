import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundRoute from './NotFoundRoute';

configure({ adapter: new Adapter()})

describe('<NotFoundRoute />', () => {
  it('should render without crashing', () => {
    shallow(<NotFoundRoute />);    
  })
})
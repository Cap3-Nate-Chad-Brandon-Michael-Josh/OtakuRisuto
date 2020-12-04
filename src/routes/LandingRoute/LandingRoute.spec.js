import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingRoute from './LandingRoute';

configure({ adapter: new Adapter()})

describe('<LandingRoute />', () => {
  it('should render without crashing', () => {
    shallow(<LandingRoute />);    
  })
})
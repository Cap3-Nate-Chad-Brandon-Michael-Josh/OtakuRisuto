import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashboardRoute from './DashboardRoute';

configure({ adapter: new Adapter()})

describe('<DashboardRoute />', () => {
  it('should render without crashing', () => {
    shallow(<DashboardRoute />);    
  })
})
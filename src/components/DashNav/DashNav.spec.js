import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashNav from './DashNav';

configure({ adapter: new Adapter()})

describe('<DashNav />', () => {
  it.skip('should render without crashing', () => {
    shallow(<DashNav />);    
  })
})
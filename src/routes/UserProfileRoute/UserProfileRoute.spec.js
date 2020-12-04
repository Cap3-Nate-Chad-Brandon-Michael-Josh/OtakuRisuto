import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserProfileRoute from './UserProfileRoute';

configure({ adapter: new Adapter()})

describe('<UserProfileRoute />', () => {
  it('should render without crashing', () => {
    shallow(<UserProfileRoute />);    
  })
})
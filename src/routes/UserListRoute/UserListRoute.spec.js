import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserListRoute from './UserListRoute';

configure({ adapter: new Adapter()})

describe('<UserListRoute />', () => {
  it('should render without crashing', () => {
    shallow(<UserListRoute />);    
  })
})
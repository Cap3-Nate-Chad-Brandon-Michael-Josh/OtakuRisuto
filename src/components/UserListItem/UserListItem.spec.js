import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserListItem from './UserListItem';

configure({ adapter: new Adapter()})

describe('<UserListItem />', () => {
  it('should render without crashing', () => {
    shallow(<UserListItem />);    
  })
})
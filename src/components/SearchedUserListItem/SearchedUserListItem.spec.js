import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchedUserListItem from './SearchedUserListItem';

configure({ adapter: new Adapter()})

describe('<SearchedUserListItem />', () => {
  it('should render without crashing', () => {
    shallow(<SearchedUserListItem />);    
  })
})
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserResultItem from './UserResultItem';

configure({ adapter: new Adapter()})

let user = {
    user_id: 1,
    username: 'test user'
}

describe('<UserResultItem />', () => {
  it('should render without crashing', () => {
    shallow(<UserResultItem user={user}/>);    
  })
})
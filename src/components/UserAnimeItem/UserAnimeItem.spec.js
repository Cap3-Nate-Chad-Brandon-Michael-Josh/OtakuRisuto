import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserAnimeItem from './UserAnimeItem';

configure({ adapter: new Adapter()})

describe('<UserAnimeItem />', () => {
  it('should render without crashing', () => {
    shallow(<UserAnimeItem />);    
  })
})
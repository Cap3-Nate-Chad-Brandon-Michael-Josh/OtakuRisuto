import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';

configure({ adapter: new Adapter()})

describe('<SearchBar />', () => {
  it('should render without crashing', () => {
    shallow(<SearchBar />);    
  })
})
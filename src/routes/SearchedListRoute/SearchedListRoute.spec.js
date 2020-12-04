import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchedListRoute from './SearchedListRoute';

configure({ adapter: new Adapter()})

describe('<SearchedListRoute />', () => {
  it('should render without crashing', () => {
    shallow(<SearchedListRoute />);    
  })
})
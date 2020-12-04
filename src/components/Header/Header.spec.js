import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter()})

describe('<Header />', () => {
  it.skip('should render without crashing', () => {
    shallow(<Header />);    
  })
})
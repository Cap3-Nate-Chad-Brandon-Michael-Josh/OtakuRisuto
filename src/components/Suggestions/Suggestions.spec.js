import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Suggestions from './Suggestions';

configure({ adapter: new Adapter()})

describe('<Suggestions />', () => {
  it('should render without crashing', () => {
    shallow(<Suggestions />);    
  })
})
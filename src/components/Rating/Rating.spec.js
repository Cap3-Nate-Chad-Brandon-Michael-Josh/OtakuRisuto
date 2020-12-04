import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rating from './Rating';
import OtakuContext from '../../contexts/OtakuContext';

configure({ adapter: new Adapter()})

describe('<Rating />', () => {
  it.skip('should render without crashing', () => {
    shallow(<Rating />);    
  })
})
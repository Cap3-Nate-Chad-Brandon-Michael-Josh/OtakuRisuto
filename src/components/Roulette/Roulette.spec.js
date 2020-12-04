import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Roulette from './Roulette';

configure({ adapter: new Adapter()})

describe('<Roulette />', () => {
  it('should render without crashing', () => {
    shallow(<Roulette />);    
  })
})
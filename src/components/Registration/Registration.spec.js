import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Registration from './Registration';

configure({ adapter: new Adapter()})

describe('<Registration />', () => {
  it('should render without crashing', () => {
    shallow(<Registration />);    
  })
})
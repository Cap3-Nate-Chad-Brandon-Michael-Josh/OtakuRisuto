import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsRoute from './ResultsRoute';

configure({ adapter: new Adapter()})

describe('<ResultsRoute />', () => {
  it('should render without crashing', () => {
    shallow(<ResultsRoute />);    
  })
})
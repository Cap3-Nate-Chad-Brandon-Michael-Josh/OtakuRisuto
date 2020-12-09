import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddedResponse from './AddedResponse';

configure({ adapter: new Adapter()})

describe('<AddedResponse />', () => {
  it('should render without crashing', () => {
    shallow(<AddedResponse />);    
  })
})
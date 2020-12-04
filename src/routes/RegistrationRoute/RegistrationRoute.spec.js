import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationRoute from './RegistrationRoute';

configure({ adapter: new Adapter()})

describe('<RegistrationRoute />', () => {
  it('should render without crashing', () => {
    shallow(<RegistrationRoute />);    
  })
})
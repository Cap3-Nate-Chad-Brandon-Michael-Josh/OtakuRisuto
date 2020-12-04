import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Comments from './Comments';

configure({ adapter: new Adapter()})

describe('<Comments />', () => {
  it('should render without crashing', () => {
    shallow(<Comments />);    
  })
})
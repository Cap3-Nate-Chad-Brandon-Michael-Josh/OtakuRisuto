import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingForm from './RatingForm';

configure({ adapter: new Adapter()})

describe('<RatingForm />', () => {
  it('should render without crashing', () => {
    shallow(<RatingForm />);    
  })
})
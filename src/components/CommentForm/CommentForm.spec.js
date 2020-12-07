import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentForm from './CommentForm';

configure({ adapter: new Adapter()})

describe('<CommentForm />', () => {
  it('should render without crashing', () => {
    shallow(<CommentForm />);    
  })
})
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditListForm from './EditListForm';

configure({ adapter: new Adapter()})

describe('<EditListForm />', () => {
  it('should render without crashing', () => {
    shallow(<EditListForm />);    
  })
})
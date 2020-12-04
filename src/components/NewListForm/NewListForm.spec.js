import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewListForm from './NewListForm';

configure({ adapter: new Adapter()})

describe('<NewListForm />', () => {
  it('should render without crashing', () => {
    shallow(<NewListForm />);    
  })
})
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter()})

describe('<App />', () => {
  it('should render without crashing', () => {
    shallow(<App />);    
  })
})
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashNav from './DashNav';
import OtakuContext from '../../contexts/OtakuContext';


configure({ adapter: new Adapter()})

// Need to dynamically set context

describe('<DashNav />', () => {
  it.skip('should render without crashing', () => {        
    const wrapper = shallow(<DashNav />, 
      { context: { 
        currentList: {
          name: 'test list name'
        }
      }}
    )
    // console.log(wrapper.context().currentList)
    // expect(wrapper.context().currentList.name.to.equal('test list name')); 
  })
})


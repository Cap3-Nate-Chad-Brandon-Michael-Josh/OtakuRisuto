import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchPublicListsResults from './SearchPublicListsResults';

configure({ adapter: new Adapter()});

const list = {
    list_id: 1,
    name: 'test name',
    owner: {
        username: 'test username',
    },
}

describe('<SearchPublicListsResults />', () => {
  it('should render without crashing', () => {
    shallow(<SearchPublicListsResults list={list}/>);    
  })
})
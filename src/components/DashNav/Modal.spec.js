import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';

configure({ adapter: new Adapter()})

describe('<Modal />', () => {
  it('should render without crashing', () => {
    const anime = {
      title: 'test anime',
      image_url: 'test image',
      genre: ['genre1', 'genre2'],
    }
    shallow(<Modal anime={anime}/>);    
  })
})
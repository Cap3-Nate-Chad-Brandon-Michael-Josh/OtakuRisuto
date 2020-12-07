import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KitsuAnimeItem from './KitsuAnimeItem';

configure({ adapter: new Adapter()})

const animeObject = {
    title: 'test title',
    description: 'test description',                    
    image_url: 'test url',
    rating: 'test rating',
    episode_count: 123,
    // only return genreObject values that match the id of genres in the anime object from kitsu.
    genre: ['test1', 'test2']
};

const lists = [
    {
        list_id: 1,
        name: 'test list',
    },
    {
        list_id: 2,
        name: 'test list 2',
    }
];

describe('<KitsuAnimeItem />', () => {
  it('should render without crashing', () => {
    shallow(<KitsuAnimeItem anime={animeObject} userLists={lists}/>);    
  })
})
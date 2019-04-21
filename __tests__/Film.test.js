import React from 'react';
import {shallow} from 'enzyme';
import Film from "../src/components/search-result/film/Film";

describe('Film', () => {
   const film =
    {
      'id': 1,
      'name': "film 1",
      'genre': 'genre 1',
      'age': 1332,
      'rating': 4.5,
      'img': "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
      'description': "Some info",
      'director': "Tarantion 1",
      'regards': 'Oscar winning move',
      'duration': '122 min',
    };


  it('render Film correctly', () => {
    const component = shallow(<Film value={film}/>);

    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import MovieSearch from "../src/pages/MovieSearch";

describe('MovieSearch', () => {
  it('renders MovieSearch correctly', () => {
    const component = shallow(<MovieSearch />);

    expect(component).toMatchSnapshot();
  });
});

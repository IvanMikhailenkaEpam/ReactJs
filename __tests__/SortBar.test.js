import React from 'react';
import { shallow } from 'enzyme';
import SortBar from "../src/components/sort-bar/SortBar";

describe('SortBar', () => {
  it('renders SortBar correctly', () => {
    const component = shallow(<SortBar />);

    expect(component).toMatchSnapshot();
  });
});

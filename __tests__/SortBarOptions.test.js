import React from 'react';
import { shallow } from 'enzyme';
import SortByOptions from "../src/components/sort-bar/sort-by-options/SortByOptions";

describe('SortByOptions', () => {
  it('renders SortByOptions correctly', () => {
    const component = shallow(<SortByOptions />);

    expect(component).toMatchSnapshot();
  });
});

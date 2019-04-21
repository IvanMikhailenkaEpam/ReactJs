import React from 'react';
import { shallow } from 'enzyme';
import SortBarInfo from "../src/components/sort-bar/sort-bar-info/SortBarInfo";

describe('SortBarInfo', () => {
  it('renders SortBarInfo correctly', () => {
    const component = shallow(<SortBarInfo text="some text" />);

    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import SearchArea from "../src/components/navbar/search-area/SearchArea";

describe('SearchArea', () => {
  it('renders SearchArea correctly', () => {
    const component = shallow(<SearchArea />);

    expect(component).toMatchSnapshot();
  });

  it('titleBtn click should mach snapshot', () => {
    const component = shallow(<SearchArea />);

    component.find('button#titleBtn').simulate('click');

    expect(component).toMatchSnapshot();
  });

  it('genreBtn click should mach snapshot', () => {
    const component = shallow(<SearchArea />);

    component.find('button#genreBtn').simulate('click');

    expect(component).toMatchSnapshot();
  });
});

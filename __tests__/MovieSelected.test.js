import React from 'react';
import { shallow } from 'enzyme';
import MovieSelected from "../src/pages/MovieSelected";

describe('MovieSelected', () => {
  it('renders MovieSearch correctly without params', () => {
    const component = shallow(<MovieSelected />);

    expect(component).toMatchSnapshot();
  });

  it('renders MovieSearch correctly with selected film id', () => {
    const component = shallow(<MovieSelected match={{params: {id: 1}}}/>);

    expect(component).toMatchSnapshot();
  });
});

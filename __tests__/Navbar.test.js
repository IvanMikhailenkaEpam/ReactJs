import React from 'react';
import { shallow } from 'enzyme';
import Navbar from "../src/components/navbar/Navbar";

describe('Navbar', () => {
  it('renders Navbar correctly', () => {
    const component = shallow(<Navbar />);

    expect(component).toMatchSnapshot();
  });
});

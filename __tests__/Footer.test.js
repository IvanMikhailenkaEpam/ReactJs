import React from 'react';
import { shallow } from 'enzyme';
import Footer from "../src/components/footer/Footer";

describe('Footer', () => {
  it('renders Footer correctly', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});

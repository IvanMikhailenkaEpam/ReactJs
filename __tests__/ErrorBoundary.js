import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from "../src/components/error-boundary/ErrorBoundaty";

describe('ErrorBoundary', () => {
  it('renders SearchArea correctly', () => {
    const component = shallow(<ErrorBoundary />);

    expect(component).toMatchSnapshot();
  });
});

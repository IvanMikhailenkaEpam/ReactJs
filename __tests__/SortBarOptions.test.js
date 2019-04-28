import React from 'react';
import { shallow } from 'enzyme';
import SortByOptions from "../src/components/sort-bar/sort-by-options/SortByOptions";

describe('SortByOptions', () => {
  it('renders SortByOptions correctly', () => {
    const component = shallow(<SortByOptions />);

    expect(component).toMatchSnapshot();
  });

  it('passed function for first span have been called', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SortByOptions  onClick={mockCallBack}/>);
    component.find("span.pointer").first().simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('passed function for second have been called', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SortByOptions  onClick={mockCallBack}/>);
    component.find("span.pointer").last().simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});

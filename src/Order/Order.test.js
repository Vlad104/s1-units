import React from 'react';
import Order from './Order';
import { fakeOrders } from '../mock/fakeOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order component', () => {
  it('render order', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render empty order', () => {
    const wrapper = shallow(<Order order={{}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

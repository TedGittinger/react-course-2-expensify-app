import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';

test('test some change event', () => {
  const focused = 'true';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').props('onFocusChange')({ focused: focused }); // call the function with parm?
  expect(wrapper.state('calendarFocused')).toBe(focused);
});

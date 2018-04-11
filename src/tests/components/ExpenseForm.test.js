import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expense from '../fixtures/expenses';
import toJson from 'enzyme-to-json';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

// test('should render ExpenseForm correctly with expense date', () => {
//     const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
//     expect(wrapper).toMatchSnapshot();
// });


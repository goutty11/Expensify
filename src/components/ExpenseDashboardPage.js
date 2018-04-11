import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import Test from '../Test';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpensesSummary />
       <ExpenseListFilters />
       <ExpenseList /> 
       <Test />
    </div>
);

export default ExpenseDashBoardPage;
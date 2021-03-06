import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
//import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <h1>Add expenses here !</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add expenses here !</h1>
//         <ExpenseForm 
//             onSubmit= {(expense) => {
//                 props.onSubmit(expense);
//                 //props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
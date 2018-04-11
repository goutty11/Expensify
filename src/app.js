import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { startSetExpenses } from './actions/expenses';
import { setTextfilter, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description:'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description:'gas bill', createdAt:1000 }));
// store.dispatch(addExpense({ description:'Rent', amount: 109500 }));

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
  
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then( ()=> {
        ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('logged In');
    }
    else {
        console.log('Logged out');
    }
});


  





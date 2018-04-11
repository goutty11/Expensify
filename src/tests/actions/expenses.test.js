import { addExpense, editExpense, removeExpense } from '../../actions/expenses';



test('Should setup the remove expense action object', () => {
    const action = removeExpense({ id:'123a'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123a'
     });
});


test('setup the action for the edit expense action object', () => {
    const action = editExpense('4321', { note:'This is the updated expense' });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '4321',
        updates: {
            note: 'This is the updated expense'
        } 
    });
});


test('setup the add expense action object', () => {
    const expenseData = {
        description: 'Movie',
        note: 'Black panther', 
        amount: 12,
        createdAt: 1000
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('setup the add expense action object from the empty value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description:'',
            note: '', 
            amount: 0,
            createdAt: 0
        }
    });
});


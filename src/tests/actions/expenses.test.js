// addExpense = (
// removeExpense
// editExpense = (id, updates) => ({

import { addExpense, editExpense } from '../../actions/expenses';

test('test editExpense', () => {
  const result = editExpense('ted1234', {
    note: 'somenote',
    description: 'somedescription'
  });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'ted1234',
    updates: { note: 'somenote', description: 'somedescription' }
  });
});

test('ADD EXPENSE TEST no defaults', () => {
  const expense = {
    description: 'rent',
    note: 'somenote',
    amount: 1000,
    createdAt: 10000
  };
  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test('ADD EXPENSE TEST WITH DEFAULTS', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

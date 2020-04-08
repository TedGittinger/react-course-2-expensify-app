import { setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('setTextFilter', () => {
  const action = setTextFilter('someText');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'someText'
  });
});

test('setTextFilter', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('sortByDate', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('sortByAmount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

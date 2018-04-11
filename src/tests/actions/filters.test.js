import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', ()=> {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate set text filter action object', () => {
    const action = setTextFilter('Manoj');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'Manoj'
    });
});


test('Should generate action object for sortByAmount', () => {
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});


test('Should generate action object for sortByDate', () => {
    //const action = sortByDate();
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    });
});
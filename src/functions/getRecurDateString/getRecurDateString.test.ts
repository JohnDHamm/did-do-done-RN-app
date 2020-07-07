import getRecurDateString from './getRecurDateString';
import moment from 'moment';

describe('getRecurDateString', () => {
  const today = new Date();
  const in10days = moment(today).add(10, 'days').format('MMMM D');
  const in3weeks = moment(today).add(3, 'weeks').format('MMMM D');
  const nextYear = moment(today).add(1, 'year').format('YYYY');
  const in12months =
    moment(today).add(12, 'months').format('MMMM D') + `, ${nextYear}`;

  it('returns the recur date string', () => {
    expect(getRecurDateString(today, 10, 'days')).toEqual(in10days);
    expect(getRecurDateString(today, 3, 'weeks')).toEqual(in3weeks);
    expect(getRecurDateString(today, 12, 'months')).toEqual(in12months);
  });
});

import moment from 'moment';
import checkDateIsThisWeek from './checkDateIsThisWeek';

describe('checkDateIsThisWeek()', () => {
  it('returns true for a date that is in the next 7 days', () => {
    const tomorrow = moment().add(1, 'day').valueOf();
    expect(checkDateIsThisWeek(tomorrow)).toEqual(true);
    const in7days = moment().add(7, 'days').valueOf();
    expect(checkDateIsThisWeek(in7days)).toEqual(true);
  });

  it('returns false for a date that is not in the next 7 days', () => {
    const today = moment().valueOf();
    expect(checkDateIsThisWeek(today)).toEqual(false);
    const lastMonth = moment().subtract(1, 'month').valueOf();
    expect(checkDateIsThisWeek(lastMonth)).toEqual(false);
    const in8days = moment().add(8, 'days').valueOf();
    expect(checkDateIsThisWeek(in8days)).toEqual(false);
  });
});

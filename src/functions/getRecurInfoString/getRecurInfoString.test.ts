import getRecurInfoString from './getRecurInfoString';

describe('getRecurInfoString()', () => {
  it('returns a formatted string for the recur info', () => {
    const recurInfo1: RecurringInfo = {
      days: 21,
      weeks: null,
      months: null,
      nextdate: 1234567890,
    };
    expect(getRecurInfoString(recurInfo1)).toEqual('every 21 days');

    const recurInfo2: RecurringInfo = {
      days: null,
      weeks: 7,
      months: null,
      nextdate: 1234567890,
    };
    expect(getRecurInfoString(recurInfo2)).toEqual('every 7 weeks');

    const recurInfo3: RecurringInfo = {
      days: null,
      weeks: null,
      months: 5,
      nextdate: 1234567890,
    };
    expect(getRecurInfoString(recurInfo3)).toEqual('every 5 months');
  });
});

import getRecurFreqData from './getRecurFreqData';

const mockRecurInfo: RecurringInfo[] = [
  {
    days: 7,
    weeks: null,
    months: null,
    nextdate: 1234567890,
  },
  {
    days: null,
    weeks: 4,
    months: null,
    nextdate: 1234567890,
  },
  {
    days: null,
    weeks: null,
    months: 8,
    nextdate: 1234567890,
  },
];

describe('getRecurfreqData()', () => {
  it('returns the recur freq data', () => {
    expect(getRecurFreqData(mockRecurInfo[0])).toEqual({
      freq: 7,
      metric: 'days',
    });

    expect(getRecurFreqData(mockRecurInfo[1])).toEqual({
      freq: 4,
      metric: 'weeks',
    });

    expect(getRecurFreqData(mockRecurInfo[2])).toEqual({
      freq: 8,
      metric: 'months',
    });
  });
});

import formatEventCardRecurInfo from './formatEventCardRecurInfo';

const nextDate = new Date('11-03-2020').getTime();

const mockRecur: RecurringInfo[] = [
  {
    days: 15,
    weeks: null,
    months: null,
    nextdate: nextDate,
  },
  {
    days: null,
    weeks: 4,
    months: null,
    nextdate: nextDate,
  },
  {
    days: null,
    weeks: null,
    months: 6,
    nextdate: nextDate,
  },
];

describe('formatEventCardRecurInfo()', () => {
  it('return the proper formatted sring of recur date info', () => {
    expect(formatEventCardRecurInfo(mockRecur[0])).toBe(
      'Nov 3 (every 15 days)'
    );
    expect(formatEventCardRecurInfo(mockRecur[1])).toBe(
      'Nov 3 (every 4 weeks)'
    );
    expect(formatEventCardRecurInfo(mockRecur[2])).toBe(
      'Nov 3 (every 6 months)'
    );
  });
});

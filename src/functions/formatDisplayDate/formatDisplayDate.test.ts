import moment from 'moment';
import formatDisplayDate from './formatDisplayDate';

describe('formatDisplayDate()', () => {
  it('returns formatted date for display', () => {
    // (this year, not this week) => 'Nov 3'
    const date1 = new Date().getTime();
    const formattedDate1 = moment(date1).format('MMM D');
    expect(formatDisplayDate(date1, false)).toEqual(formattedDate1);
    // (different year) => 'Nov 3, 2019'
    const date2 = new Date('11-03-2019').getTime();
    expect(formatDisplayDate(date2, false)).toEqual("Nov 3, '19");
    // (this week) => 'Thursday, Jul 9'
    const date3 = new Date('07-09-2020').getTime();
    expect(formatDisplayDate(date3, true)).toEqual('Thursday, Jul 9');
  });
});

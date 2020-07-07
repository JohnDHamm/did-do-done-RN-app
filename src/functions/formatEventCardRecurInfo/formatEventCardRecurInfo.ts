import moment from 'moment';

const formatEventCardRecurInfo = (recurs: RecurringInfo): string => {
  const nextDate = moment(recurs.nextdate).format('MMM D');
  let recurFreq = '(every ';

  if (recurs.days) {
    recurFreq = recurFreq + recurs.days.toString() + ' days)';
  }
  if (recurs.weeks) {
    recurFreq = recurFreq + recurs.weeks.toString() + ' weeks)';
  }
  if (recurs.months) {
    recurFreq = recurFreq + recurs.months.toString() + ' months)';
  }
  return `${nextDate} ${recurFreq}`;
};

export default formatEventCardRecurInfo;

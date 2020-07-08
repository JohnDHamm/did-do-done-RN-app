import moment from 'moment';
import getRecurInfoString from '../getRecurInfoString/getRecurInfoString';

const formatEventCardRecurInfo = (recurs: RecurringInfo): string => {
  const nextDate = moment(recurs.nextdate).format('MMM D');
  return `${nextDate} (${getRecurInfoString(recurs)})`;
};

export default formatEventCardRecurInfo;

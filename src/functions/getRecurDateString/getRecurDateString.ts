import moment from 'moment';

const getRecurDateStrng = (
  eventDate: Date,
  freq: number,
  metric: RecurFreqMetric
): string => {
  const orig = moment(eventDate);
  const nextDate = orig.add(freq, metric);
  const year = nextDate.year();
  let displayDate = nextDate.format('MMMM D');
  if (year !== moment().year()) {
    displayDate = displayDate + `, ${year.toString()}`;
  }
  return displayDate;
};

export default getRecurDateStrng;

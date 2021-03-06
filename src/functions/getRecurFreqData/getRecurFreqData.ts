const getRecurFreqData = (recurInfo: RecurringInfo): RecurFreqData => {
  let freq = 0;
  let metric: RecurFreqMetric = 'days';
  if (recurInfo.days) {
    freq = recurInfo.days;
    metric = 'days';
  }
  if (recurInfo.weeks) {
    freq = recurInfo.weeks;
    metric = 'weeks';
  }
  if (recurInfo.months) {
    freq = recurInfo.months;
    metric = 'months';
  }

  return { freq, metric };
};

export default getRecurFreqData;

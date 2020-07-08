const getRecurInfoString = (recurInfo: RecurringInfo): string => {
  let recurInfoString = '';
  if (recurInfo.days) {
    recurInfoString = recurInfo.days.toString() + ' days';
  }
  if (recurInfo.weeks) {
    recurInfoString = recurInfo.weeks.toString() + ' weeks';
  }
  if (recurInfo.months) {
    recurInfoString = recurInfo.months.toString() + ' months';
  }

  return `every ${recurInfoString}`;
};

export default getRecurInfoString;

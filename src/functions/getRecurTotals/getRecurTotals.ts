import moment from 'moment';

const getRecurTotals = (events: SavedEvent[]): RecurTotals => {
  const totals: RecurTotals = {
    missed: 0,
    today: 0,
    thisweek: 0,
    next30: 0,
  };
  const startThisWeek = moment().add(1, 'day').startOf('day');
  const endThisWeek = moment().add(7, 'day').endOf('day');
  const end30days = moment().add(30, 'days').endOf('day');

  events.forEach((event) => {
    if (event.recurs) {
      const recurDate = moment(event.recurs.nextdate);
      if (recurDate.isBefore(moment().startOf('day'))) {
        totals.missed = totals.missed + 1;
        return;
      }
      if (recurDate.isSame(moment(), 'day')) {
        totals.today = totals.today + 1;
        return;
      }
      if (recurDate.isBetween(startThisWeek, endThisWeek)) {
        totals.thisweek = totals.thisweek + 1;
        return;
      }
      if (recurDate.isBetween(endThisWeek, end30days)) {
        totals.next30 = totals.next30 + 1;
        return;
      }
    }
  });

  return totals;
};

export default getRecurTotals;

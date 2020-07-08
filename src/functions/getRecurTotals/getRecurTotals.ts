import moment from 'moment';
import { DATE_MOMENTS } from '../../constants';

const getRecurTotals = (events: SavedEvent[]): RecurTotals => {
  const totals: RecurTotals = {
    missed: 0,
    today: 0,
    thisweek: 0,
    next30: 0,
  };

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
      if (
        recurDate.isBetween(
          DATE_MOMENTS.startThisWeek(),
          DATE_MOMENTS.endThisWeek()
        )
      ) {
        totals.thisweek = totals.thisweek + 1;
        return;
      }
      if (
        recurDate.isBetween(
          DATE_MOMENTS.endThisWeek(),
          DATE_MOMENTS.end30days()
        )
      ) {
        totals.next30 = totals.next30 + 1;
        return;
      }
    }
  });

  return totals;
};

export default getRecurTotals;

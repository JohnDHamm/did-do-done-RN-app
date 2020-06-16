import moment from 'moment';
const composeRecurData = (events: SavedEvent[]): Array<RecurSectionData> => {
  const startThisWeek = moment().add(1, 'day').startOf('day');
  const endThisWeek = moment().add(7, 'day').endOf('day');
  const end30days = moment().add(30, 'days').endOf('day');
  const missedEvents: Array<SavedEvent> = [];
  const todayEvents: Array<SavedEvent> = [];
  const thisweekEvents: Array<SavedEvent> = [];
  const next30Events: Array<SavedEvent> = [];
  const laterEvents: Array<SavedEvent> = [];

  events.forEach((event) => {
    if (event.recurs) {
      const recurDate = moment(event.recurs?.nextdate);
      if (recurDate.isBefore(moment().startOf('day'))) {
        missedEvents.push(event);
        return;
      }
      if (recurDate.isSame(moment(), 'day')) {
        todayEvents.push(event);
        return;
      }
      if (recurDate.isBetween(startThisWeek, endThisWeek)) {
        thisweekEvents.push(event);
        return;
      }
      if (recurDate.isBetween(endThisWeek, end30days)) {
        next30Events.push(event);
        return;
      }
      laterEvents.push(event);
    }
  });

  const sortEventsByDate = (array: Array<SavedEvent>): Array<SavedEvent> => {
    array.sort(function (a, b) {
      return a.recurs && b.recurs ? a.recurs.nextdate - b.recurs.nextdate : 0;
    });
    return array;
  };

  const data: RecurSectionData[] = [
    {
      title: 'missed',
      data: sortEventsByDate(missedEvents),
    },
    {
      title: 'today',
      data: sortEventsByDate(todayEvents),
    },
    {
      title: 'this week',
      data: sortEventsByDate(thisweekEvents),
    },
    {
      title: 'next 30 days',
      data: sortEventsByDate(next30Events),
    },
    {
      title: 'later',
      data: sortEventsByDate(laterEvents),
    },
  ];

  return data;
};

export default composeRecurData;

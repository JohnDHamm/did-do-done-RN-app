import getRecurTotals from './getRecurTotals';
import moment from 'moment';

const today = new Date().getTime();

const mockEvents: SavedEvent[] = [
  //non-recurring
  {
    id: 0,
    name: 'non-recurring event',
    date: today,
  },
  //missed 1
  {
    id: moment(today).subtract(3, 'weeks').valueOf(),
    name: 'event 1',
    date: moment(today).subtract(3, 'weeks').valueOf(),
    tagIds: [1],
    recurs: {
      days: null,
      weeks: 2,
      months: null,
      nextdate: moment(today).subtract(2, 'weeks').valueOf(),
    },
  },
  // today 2
  {
    id: moment(today).subtract(3, 'weeks').valueOf(),
    name: 'event 2',
    date: moment(today).subtract(3, 'weeks').valueOf(),
    tagIds: [1],
    recurs: {
      days: null,
      weeks: 3,
      months: null,
      nextdate: today,
    },
  },
  // today 1
  {
    id: moment(today).subtract(4, 'months').valueOf(),
    name: 'event 3',
    date: moment(today).subtract(4, 'months').valueOf(),
    tagIds: [1],
    recurs: {
      days: null,
      weeks: null,
      months: 4,
      nextdate: today,
    },
  },
  // this week 2
  {
    id: moment(today).valueOf(),
    name: 'event 4',
    date: moment(today).valueOf(),
    tagIds: [1],
    recurs: {
      days: 5,
      weeks: null,
      months: null,
      nextdate: moment(today).add(5, 'days').valueOf(),
    },
  },
  // this week 1
  {
    id: moment(today).valueOf(),
    name: 'event 5',
    date: moment(today).valueOf(),
    tagIds: [1],
    recurs: {
      days: 2,
      weeks: null,
      months: null,
      nextdate: moment(today).add(2, 'days').valueOf(),
    },
  },
  // this week 3
  {
    id: moment(today).valueOf(),
    name: 'event 5',
    date: moment(today).valueOf(),
    tagIds: [1],
    recurs: {
      days: 2,
      weeks: null,
      months: null,
      nextdate: moment(today).add(6, 'days').valueOf(),
    },
  },
  // next 30 days
  {
    id: moment(today).valueOf(),
    name: 'event 6',
    date: moment(today).valueOf(),
    tagIds: [1],
    recurs: {
      days: 21,
      weeks: null,
      months: null,
      nextdate: moment(today).add(21, 'days').valueOf(),
    },
  },
  // later
  {
    id: moment(today).valueOf(),
    name: 'event 7',
    date: moment(today).valueOf(),
    tagIds: [1],
    recurs: {
      days: null,
      weeks: null,
      months: 2,
      nextdate: moment(today).add(2, 'months').valueOf(),
    },
  },
];

const totals: RecurTotals = {
  missed: 1,
  today: 2,
  thisweek: 3,
  next30: 1,
};

describe('getRecurTotals()', () => {
  it('returns the recur events totals', () => {
    expect(getRecurTotals(mockEvents)).toEqual(totals);
  });
});

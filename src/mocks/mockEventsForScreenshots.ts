import moment from 'moment';

const today = Date.now();

export const mockEventsForScreenshots: Array<SavedEvent> = [
  // CAR tag ---------------------------------------
  // later
  {
    id: moment(today).subtract(2, 'months').add(5, 'days').valueOf(),
    name: 'oil change',
    date: moment(today).subtract(2, 'months').add(5, 'days').valueOf(),
    notes: '124,045 miles',
    tagIds: [1],
    recurs: {
      days: null,
      weeks: null,
      months: 5,
      nextdate: moment(today)
        .subtract(2, 'months')
        .add(5, 'days')
        .add(5, 'months')
        .valueOf(),
    },
  },
  // next 30
  {
    id: moment(today).subtract(1, 'year').add(22, 'days').valueOf(),
    name: 'tire rotation',
    date: moment(today).subtract(1, 'year').add(22, 'days').valueOf(),
    notes: '91,632 miles - at dealership',
    tagIds: [1],
    recurs: {
      days: null,
      weeks: null,
      months: 12,
      nextdate: moment(today)
        .subtract(1, 'year')
        .add(22, 'days')
        .add(1, 'year')
        .valueOf(),
    },
  },
  // missed
  {
    id: moment(today).subtract(4, 'months').subtract(4, 'days').valueOf(),
    name: 'changed air filter',
    date: moment(today).subtract(4, 'months').subtract(4, 'days').valueOf(),
    notes: '97,045 miles',
    tagIds: [1],
    recurs: {
      days: null,
      weeks: null,
      months: 4,
      nextdate: moment(today).subtract(4, 'days').valueOf(),
    },
  },
  // later
  {
    id: moment(today).subtract(18, 'months').add(5, 'days').valueOf(),
    name: 'car tune-up',
    date: moment(today).subtract(18, 'months').add(5, 'days').valueOf(),
    notes: '97,045 miles',
    tagIds: [1],
    recurs: {
      days: null,
      weeks: null,
      months: 48,
      nextdate: moment(today)
        .subtract(18, 'months')
        .add(5, 'days')
        .add(48, 'months')
        .valueOf(),
    },
  },
  // HOME tag ---------------------------------------
  // later
  {
    id: moment(today).subtract(18, 'days').valueOf(),
    name: 'change A/C filter',
    date: moment(today).subtract(18, 'days').valueOf(),
    tagIds: [2],
    recurs: {
      days: 90,
      weeks: null,
      months: null,
      nextdate: moment(today).subtract(18, 'days').add(90, 'days').valueOf(),
    },
  },
  // today
  {
    id: moment(today).subtract(10, 'weeks').valueOf(),
    name: 'clean dryer vent',
    date: moment(today).subtract(10, 'weeks').valueOf(),
    tagIds: [2],
    recurs: {
      days: null,
      weeks: 10,
      months: null,
      nextdate: moment(today).valueOf(),
    },
  },
  // next 30
  {
    id: moment(today).subtract(11, 'months').subtract(18, 'days').valueOf(),
    name: 'defrost freezer',
    date: moment(today).subtract(11, 'months').subtract(18, 'days').valueOf(),
    tagIds: [2],
    recurs: {
      days: null,
      weeks: null,
      months: 12,
      nextdate: moment(today)
        .subtract(11, 'months')
        .subtract(18, 'days')
        .add(12, 'months')
        .valueOf(),
    },
  },
  // this week
  {
    id: moment(today).subtract(4, 'months').valueOf(),
    name: 'deep clean oven',
    date: moment(today).subtract(4, 'months').valueOf(),
    tagIds: [2],
    recurs: {
      days: null,
      weeks: null,
      months: 4,
      nextdate: moment(today).add(5, 'days').valueOf(),
    },
  },
  // next 30
  {
    id: moment(today).subtract(6, 'weeks').add(8, 'days').valueOf(),
    name: 'replace water filter',
    date: moment(today).subtract(6, 'weeks').add(8, 'days').valueOf(),
    tagIds: [2],
    recurs: {
      days: null,
      weeks: 6,
      months: null,
      nextdate: moment(today).add(8, 'days').valueOf(),
    },
  },
  // SAFETY tag -----------------------------------------------------------------
  // later
  {
    id: moment(today).subtract(7, 'months').add(4, 'days').valueOf(),
    name: 'test fire extinguisher',
    date: moment(today).subtract(7, 'months').add(4, 'days').valueOf(),
    tagIds: [3],
    recurs: {
      days: null,
      weeks: null,
      months: 12,
      nextdate: moment(today)
        .subtract(7, 'months')
        .add(4, 'days')
        .add(12, 'months')
        .valueOf(),
    },
  },
  /// this week
  {
    id: moment(today).subtract(6, 'months').add(2, 'days').valueOf(),
    name: 'replace smoke alarm batteries',
    date: moment(today).subtract(6, 'months').add(2, 'days').valueOf(),
    notes: '2 x 9v batteries needed',
    tagIds: [3],
    recurs: {
      days: null,
      weeks: null,
      months: 6,
      nextdate: moment(today)
        .subtract(6, 'months')
        .add(2, 'days')
        .add(6, 'months')
        .valueOf(),
    },
  },
  // later
  {
    id: moment(today).subtract(2, 'weeks').valueOf(),
    name: 'new rear brakes/rotors',
    date: moment(today).subtract(2, 'weeks').valueOf(),
    notes: '125,182 miles',
    tagIds: [1, 3],
    recurs: {
      days: null,
      weeks: null,
      months: 36,
      nextdate: moment(today).subtract(2, 'weeks').add(36, 'months').valueOf(),
    },
  },
  // NO TAGS --------------------------------------------------------
  // later
  {
    id: moment(today).subtract(2, 'months').add(3, 'days').valueOf(),
    name: 'dentist-cleaning/checkup',
    date: moment(today).subtract(2, 'months').add(3, 'days').valueOf(),
    recurs: {
      days: null,
      weeks: null,
      months: 6,
      nextdate: moment(today)
        .subtract(2, 'months')
        .add(3, 'days')
        .add(6, 'months')
        .valueOf(),
    },
  },
  // not recurring
  {
    id: moment(today).subtract(2, 'days').valueOf(),
    name: 'started Nog trial',
    date: moment(today).subtract(2, 'days').valueOf(),
    notes: 'free for 30 days',
  },
];

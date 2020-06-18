import moment from 'moment';

const today = Date.now();

export const mockSavedEvents: Array<SavedEvent> = [
  /// 2 months ago, next 30
  {
    id: moment(today).subtract(2, 'months').valueOf(),
    name: 'change Honda oil',
    date: moment(today).subtract(2, 'months').valueOf(),
    notes: '120,045 miles',
    tags: [
      {
        name: 'car',
        color: 'steelblue',
      },
    ],
    recurs: {
      days: null,
      weeks: null,
      months: 3,
      nextdate: moment(today).subtract(2, 'months').add(3, 'months').valueOf(),
    },
  },
  /// 12.25.19, later
  {
    id: moment('2019-12-25').valueOf(),
    name: 'rotate tires',
    date: moment('2019-12-25').valueOf(),
    notes: '81,632 miles - at JiffyLube',
    tags: [
      {
        name: 'car',
        color: 'steelblue',
      },
    ],
    recurs: {
      days: null,
      weeks: null,
      months: 12,
      nextdate: moment('2019-12-25').add(1, 'year').valueOf(), // 12.25.20
    },
  },
  /// 4 months + 2 days ago, this week
  {
    id: moment(today).subtract(4, 'months').add(2, 'days').valueOf(),
    name: 'changed air filter',
    date: moment(today).subtract(4, 'months').add(2, 'days').valueOf(),
    notes: '97,045 miles',
    tags: [
      {
        name: 'car',
        color: 'steelblue',
      },
    ],
    recurs: {
      days: null,
      weeks: null,
      months: 4,
      nextdate: moment(today).add(2, 'days').valueOf(),
    },
  },
  /// 90 days ago, today
  {
    id: moment(today).subtract(90, 'days').valueOf(),
    name: 'A/C filter change',
    date: moment(today).subtract(90, 'days').valueOf(),
    tags: [
      {
        name: 'home',
        color: 'darkolivegreen',
      },
    ],
    recurs: {
      days: 90,
      weeks: null,
      months: null,
      nextdate: moment(today).valueOf(),
    },
  },
  /// 100 days ago, today
  {
    id: moment(today).subtract(100, 'days').valueOf(),
    name: 'aaa',
    date: moment(today).subtract(100, 'days').valueOf(),
    tags: [
      {
        name: 'home',
        color: 'darkolivegreen',
      },
    ],
    recurs: {
      days: 100,
      weeks: null,
      months: null,
      nextdate: moment(today).valueOf(),
    },
  },
  /// 13 weeks ago, last week
  {
    id: moment(today).subtract(13, 'weeks').valueOf(),
    name: 'replace smoke alarm batteries',
    date: moment(today).subtract(13, 'weeks').valueOf(),
    tags: [
      {
        name: 'home',
        color: 'darkolivegreen',
      },
    ],
    recurs: {
      days: null,
      weeks: 12,
      months: null,
      nextdate: moment(today).subtract(13, 'weeks').add(12, 'weeks').valueOf(),
    },
  },
  /// 14 weeks ago, 3 weeks
  {
    id: moment(today).subtract(14, 'weeks').valueOf(),
    name: 'something',
    date: moment(today).subtract(14, 'weeks').valueOf(),
    tags: [
      {
        name: 'home',
        color: 'darkolivegreen',
      },
    ],
    recurs: {
      days: null,
      weeks: 12,
      months: null,
      nextdate: moment(today).subtract(14, 'weeks').add(11, 'weeks').valueOf(),
    },
  },
  /// 4+ weeks ago, in 8 days (next30)
  {
    id: moment(today).subtract(6, 'weeks').add(8, 'days').valueOf(),
    name: 'replace water filter',
    date: moment(today).subtract(6, 'weeks').add(8, 'days').valueOf(),
    tags: [
      {
        name: 'home',
        color: 'darkolivegreen',
      },
    ],
    recurs: {
      days: null,
      weeks: 6,
      months: null,
      nextdate: moment(today).add(8, 'days').valueOf(),
    },
  },
  /// 3+ months ago, this week
  {
    id: moment(today).subtract(4, 'months').add(4, 'days').valueOf(),
    name: 'deep oven cleaning',
    date: moment(today).subtract(4, 'months').add(4, 'days').valueOf(),
    tags: [
      {
        name: 'clean',
        color: 'darkgoldenrod',
      },
    ],
    recurs: {
      days: null,
      weeks: 4,
      months: null,
      nextdate: moment(today).add(4, 'days').valueOf(),
    },
  },
  /// 2 weeks ago, next 30
  {
    id: moment(today).subtract(2, 'weeks').valueOf(),
    name: 'wash shower curtains',
    date: moment(today).subtract(2, 'weeks').valueOf(),
    tags: [
      {
        name: 'clean',
        color: 'darkgoldenrod',
      },
      {
        name: 'home',
        color: 'darkolivegreen',
      },
    ],
    recurs: {
      days: null,
      weeks: 4,
      months: null,
      nextdate: moment(today).subtract(2, 'weeks').add(4, 'weeks').valueOf(),
    },
  },
  /// 2 weeks ago, later
  {
    id: moment(today).subtract(4, 'weeks').valueOf(),
    name: 'wash comforter',
    date: moment(today).subtract(4, 'weeks').valueOf(),
    recurs: {
      days: null,
      weeks: 10,
      months: null,
      nextdate: moment(today).add(6, 'weeks').valueOf(),
    },
  },
  /// 1 week ago, 12 months
  {
    id: moment(today).subtract(1, 'weeks').valueOf(),
    name: 'something next year',
    date: moment(today).subtract(1, 'weeks').valueOf(),
    recurs: {
      days: null,
      weeks: null,
      months: 12,
      nextdate: moment(today).subtract(1, 'weeks').add(12, 'months').valueOf(),
    },
  },
  ///
  {
    id: moment(today).subtract(3, 'weeks').add(1, 'day').valueOf(),
    name: 'haircut',
    date: moment(today).subtract(3, 'weeks').add(1, 'day').valueOf(),
    notes: 'SportClips',
  },
  ///
  {
    id: moment(today).subtract(6, 'days').valueOf(),
    name: 'went hiking',
    date: moment(today).subtract(6, 'days').valueOf(),
    notes: '@ Big South Fork',
  },
];

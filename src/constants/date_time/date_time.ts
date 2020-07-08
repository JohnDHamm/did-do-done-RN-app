import moment from 'moment';

const startThisWeek = (): moment.Moment =>
  moment().add(1, 'day').startOf('day');

const endThisWeek = (): moment.Moment => moment().add(7, 'day').endOf('day');

const end30days = (): moment.Moment => moment().add(30, 'days').endOf('day');

export const DATE_MOMENTS = {
  startThisWeek,
  endThisWeek,
  end30days,
};

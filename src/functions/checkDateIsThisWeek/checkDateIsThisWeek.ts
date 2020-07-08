import moment from 'moment';

const checkDateIsThisWeek = (date: number): boolean => {
  const startThisWeek = moment().add(1, 'day').startOf('day');
  const endThisWeek = moment().add(7, 'day').endOf('day');
  return moment(date).isBetween(startThisWeek, endThisWeek);
};

export default checkDateIsThisWeek;

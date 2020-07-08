import moment from 'moment';

const formatDisplayDate = (date: number, showDay: boolean): string => {
  const savedYear = moment(date).year();
  let displayDate;
  if (showDay) {
    displayDate = moment(date).format('dddd, MMM D');
  } else {
    displayDate = moment(date).format('MMM D');
    if (savedYear !== moment().year()) {
      displayDate = displayDate + `, '${savedYear.toString().slice(2, 4)}`;
    }
  }

  return displayDate;
};

export default formatDisplayDate;

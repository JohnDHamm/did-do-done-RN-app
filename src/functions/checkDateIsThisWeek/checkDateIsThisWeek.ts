import moment from 'moment';
import { DATE_MOMENTS } from '../../constants/';

const checkDateIsThisWeek = (date: number): boolean => {
  return moment(date).isBetween(
    DATE_MOMENTS.startThisWeek(),
    DATE_MOMENTS.endThisWeek()
  );
};

export default checkDateIsThisWeek;

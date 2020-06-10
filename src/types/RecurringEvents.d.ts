type RecurType = 'missed' | 'today' | 'thisweek' | 'next30';

type RecurTotals = {
  [badge in RecurType]: number;
};

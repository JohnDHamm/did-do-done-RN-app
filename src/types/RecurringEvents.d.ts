type RecurType = 'missed' | 'today' | 'thisweek' | 'next30';

type RecurTotals = {
  [badge in RecurType]: number;
};

type RecurSectionHeader =
  | 'missed'
  | 'today'
  | 'this week'
  | 'next 30 days'
  | 'later';

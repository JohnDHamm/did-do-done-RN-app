type RecurringInfo = {
  days: number | null;
  weeks: number | null;
  months: number | null;
  nextdate: number;
};

type SavedEvent = {
  id: number;
  name: string;
  date: number;
  notes?: string;
  tags?: Tag[];
  recurs?: RecurringInfo;
};

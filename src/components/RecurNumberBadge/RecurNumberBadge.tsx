import React from 'react';
import { COLORS } from '../../styles';
import { Badge, BadgeNumber } from './RecurNumberBadge.styles';

interface RecurNumberBadgeProps {
  total: number;
  type: 'missed' | 'today' | 'thisweek' | 'next30';
}
const RecurNumberBadge: React.FC<RecurNumberBadgeProps> = ({
  total,
  type,
}: RecurNumberBadgeProps) => {
  let color = '';

  switch (type) {
    case 'missed':
      color = COLORS.MISSED_RED;
      break;
    case 'today':
      color = COLORS.TODAY_GREEN;
      break;
    case 'thisweek':
      color = COLORS.THIS_WEEK_YELLOW;
      break;
    case 'next30':
      color = COLORS.PRIMARY_GRAY;
      break;
  }
  return (
    <Badge color={color}>
      <BadgeNumber>{total}</BadgeNumber>
    </Badge>
  );
};

export default RecurNumberBadge;

import React from 'react';
import {
  BadgeContainer,
  BadgeLabel,
  Block,
  Header,
  MinRow,
} from './RecurEventsBlock.styles';
import RecurNumberBadge from '../RecurNumberBadge/RecurNumberBadge';
import { COLORS } from '../../styles';

interface BlockProps {
  recurTotals: RecurTotals;
  minimized?: boolean;
}

const RecurEventsBlock: React.FC<BlockProps> = ({
  recurTotals,
  minimized = false,
}) => {
  const renderMinRecurBadges = () => {
    const badgeTypes: Array<RecurType> = ['missed', 'today', 'thisweek'];
    return badgeTypes.map((badgeType) => {
      if (recurTotals[badgeType] > 0)
        return (
          <BadgeContainer key={badgeType}>
            <RecurNumberBadge type={badgeType} total={recurTotals[badgeType]} />
          </BadgeContainer>
        );
    });
  };

  return !minimized ? (
    <Block>
      <Header>do again:</Header>
      {recurTotals.missed > 0 && (
        <MinRow>
          <RecurNumberBadge type="missed" total={recurTotals.missed} />
          <BadgeLabel color={COLORS.MISSED_RED}>missed</BadgeLabel>
        </MinRow>
      )}
      {recurTotals.today > 0 && (
        <MinRow>
          <RecurNumberBadge type="today" total={recurTotals.today} />
          <BadgeLabel color={COLORS.TODAY_GREEN}>today</BadgeLabel>
        </MinRow>
      )}
      {recurTotals.thisweek > 0 && (
        <MinRow>
          <RecurNumberBadge type="thisweek" total={recurTotals.thisweek} />
          <BadgeLabel color={COLORS.THIS_WEEK_YELLOW}>this week</BadgeLabel>
        </MinRow>
      )}
      <MinRow>
        <RecurNumberBadge type="next30" total={recurTotals.next30} />
        <BadgeLabel color={COLORS.PRIMARY_GRAY}>next 30 days</BadgeLabel>
      </MinRow>
    </Block>
  ) : (
    <MinRow>
      <Header>do again:</Header>
      {renderMinRecurBadges()}
      <BadgeContainer key={'next30'}>
        <RecurNumberBadge type={'next30'} total={recurTotals.next30} />
      </BadgeContainer>
    </MinRow>
  );
};

export default RecurEventsBlock;

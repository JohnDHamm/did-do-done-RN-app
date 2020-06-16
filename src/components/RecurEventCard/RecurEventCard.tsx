import React from 'react';
import {
  Container,
  Date,
  Icon,
  MissedMsg,
  Name,
  Notes,
  RecurMsg,
  Row,
  TagsRow,
  TopRow,
} from './RecurEventCard.styles';
import Tag from '../Tag/Tag';
import IMAGES from '../../../assets/images';
import moment from 'moment';

const RecurEventCard: React.FC<SavedEvent> = ({
  name,
  notes,
  tags,
  recurs,
}) => {
  const getDisplayDate = (): string => {
    const nextdateYear = moment(recurs?.nextdate).year();
    const startThisWeek = moment().add(1, 'day').startOf('day');
    const endThisWeek = moment().add(7, 'day').endOf('day');
    const isThisWeek = moment(recurs?.nextdate).isBetween(
      startThisWeek,
      endThisWeek
    );
    let displayDate = isThisWeek
      ? moment(recurs?.nextdate).format('dddd, MMM D')
      : moment(recurs?.nextdate).format('MMM D');
    if (nextdateYear !== moment().year()) {
      displayDate = displayDate + `, '${nextdateYear.toString().slice(2, 4)}`;
    }
    return displayDate;
  };

  const renderMissedMsg = () => {
    let missedMsg = '';
    const recurDate = moment(recurs?.nextdate).startOf('day');
    if (recurDate.isBefore(moment().startOf('day'))) {
      const weekslate = moment().startOf('day').subtract(2, 'months');
      const dayslate = moment().startOf('day').subtract(14, 'days');

      if (recurDate.isBefore(weekslate)) {
        const months = moment().startOf('day').diff(recurDate, 'months', true);
        missedMsg = `over ${months} months`;
      } else if (recurDate.isBefore(dayslate)) {
        const weeks = moment().startOf('day').diff(recurDate, 'weeks');
        missedMsg = `over ${weeks} weeks`;
      } else {
        const days = moment().startOf('day').diff(recurDate, 'days');
        missedMsg = `${days} day${days > 1 ? 's' : ''}`;
      }
    }
    return missedMsg.length > 0 ? (
      <MissedMsg>{missedMsg} late!</MissedMsg>
    ) : null;
  };

  const getRecurDate = (): string => {
    let recurFreq = 'every ';
    if (recurs?.days) {
      recurFreq = recurFreq + (recurs?.days).toString() + ' days';
    }
    if (recurs?.weeks) {
      recurFreq = recurFreq + (recurs?.weeks).toString() + ' weeks';
    }
    if (recurs?.months) {
      recurFreq = recurFreq + (recurs?.months).toString() + ' months';
    }
    return `${recurFreq}`;
  };

  const renderTags = (tags: Tag[]) => {
    const extraStyles = {
      marginRight: 5,
    };
    return tags.map((tag) => (
      <Tag
        key={tag.name}
        label={tag.name}
        color={tag.color}
        selected={true}
        extraStyles={extraStyles}
      />
    ));
  };

  return (
    <Container>
      {renderMissedMsg()}
      <TopRow>
        <Date>{getDisplayDate()}</Date>
        <Row>
          <Icon source={IMAGES.RECUR_ICON} />
          <RecurMsg>{getRecurDate()}</RecurMsg>
        </Row>
      </TopRow>
      <Name>{name}</Name>
      {notes && <Notes>{notes}</Notes>}
      {tags && tags.length && <TagsRow>{renderTags(tags)}</TagsRow>}
    </Container>
  );
};

export default RecurEventCard;

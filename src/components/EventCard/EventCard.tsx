import React from 'react';
import {
  Container,
  Date,
  Icon,
  Name,
  Notes,
  RecurDate,
  RecurMsg,
  RecurRow,
  TagsRow,
  TopRow,
} from './EventCard.styles';
import Tag from '../Tag/Tag';
import IMAGES from '../../../assets/images';
import moment from 'moment';
import { mockSavedTags } from '../../mocks/mockSavedTags';

const EventCard: React.FC<SavedEvent> = ({
  name,
  date,
  notes,
  tagIds,
  recurs,
}) => {
  const savedYear = moment(date).year();
  let displayDate = moment(date).format('MMM D');
  if (savedYear !== moment().year()) {
    displayDate = displayDate + `, '${savedYear.toString().slice(2, 4)}`;
  }

  const getRecurDate = (): string => {
    const nextDate = moment(recurs?.nextdate).format('MMM D');
    let recurFreq = '(every ';

    if (recurs?.days) {
      recurFreq = recurFreq + (recurs?.days).toString() + ' days)';
    }
    if (recurs?.weeks) {
      recurFreq = recurFreq + (recurs?.weeks).toString() + ' weeks)';
    }
    if (recurs?.months) {
      recurFreq = recurFreq + (recurs?.months).toString() + ' months)';
    }
    return `${nextDate} ${recurFreq}`;
  };

  const createTags = (tagIds: number[]) => {
    return mockSavedTags.filter((tag) => tagIds.includes(tag.id));
    //TODO: replace mocks with context tags
  };

  const renderTags = (tagIds: number[]) => {
    const tags: Tag[] = createTags(tagIds);
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
      <TopRow>
        <Name>{name}</Name>
        <Date>{displayDate}</Date>
      </TopRow>
      {recurs && (
        <RecurRow>
          <Icon source={IMAGES.RECUR_ICON} />
          <RecurMsg>do again:</RecurMsg>
          <RecurDate>{getRecurDate()}</RecurDate>
        </RecurRow>
      )}
      {notes && <Notes>{notes}</Notes>}
      {tagIds && tagIds.length && <TagsRow>{renderTags(tagIds)}</TagsRow>}
    </Container>
  );
};

export default EventCard;

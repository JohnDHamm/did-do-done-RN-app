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
import { TagsContext } from '../../contexts';
import { formatDisplayDate, formatEventCardRecurInfo } from '../../functions';

const EventCard: React.FC<SavedEvent> = ({
  name,
  date,
  notes,
  tagIds,
  recurs,
}) => {
  const { tags } = React.useContext<TagsContextInterface>(TagsContext);
  const displayDate = formatDisplayDate({ date, showDay: false });

  const createTags = (tagIds: number[]) => {
    return tags.filter((tag) => tagIds.includes(tag.id));
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
          <RecurDate>{formatEventCardRecurInfo(recurs)}</RecurDate>
        </RecurRow>
      )}
      {notes && <Notes>{notes}</Notes>}
      {tagIds && tagIds.length && <TagsRow>{renderTags(tagIds)}</TagsRow>}
    </Container>
  );
};

export default EventCard;

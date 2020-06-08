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

const EventCard: React.FC<SavedEvent> = ({
  name,
  date,
  notes,
  tags,
  recurs,
}) => {
  //TODO: convert date to string for display
  //TODO: convert recurs info to string for display

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
      <TopRow>
        <Name>{name}</Name>
        <Date>June 2</Date>
      </TopRow>
      {recurs && (
        <RecurRow>
          <Icon source={IMAGES.RECUR_ICON} />
          <RecurMsg>do again:</RecurMsg>
          <RecurDate>Sep 1 (every 3 mo.)</RecurDate>
        </RecurRow>
      )}
      {notes && <Notes>{notes}</Notes>}
      {tags && tags.length && <TagsRow>{renderTags(tags)}</TagsRow>}
    </Container>
  );
};

export default EventCard;

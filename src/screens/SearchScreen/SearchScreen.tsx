import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AddIcon, Container, StyledText } from './SearchScreen.styles';
import { Button, EventCard, SectionHeader, Tag } from '../../components';
import { COLORS } from '../../styles';
import IMAGES from '../../../assets/images';
import { mockSavedTags } from '../../mocks/mockSavedTags';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderTags = (tags: Tag[]) => {
    return tags.map((tag) => (
      <Tag key={tag.name} label={tag.name} color={tag.color} selected={true} />
    ));
  };

  return (
    <Container>
      <StyledText>Did? Do. Done!</StyledText>
      <Tag label="car" color="navy" selected={false} />
      {/* {renderTags(mockSavedTags)} */}
      <Button label="see all events" />
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
        <AddIcon source={IMAGES.ADD_EVENT_ICON} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Recurring')}>
        <Button label="recurring events" type="alt" />
      </TouchableOpacity>
      <SectionHeader text="looking back..." />
      <EventCard id={123456789} name="A/C filter change" date={1550185200000} />
      <EventCard
        id={123456789}
        name="A/C filter change"
        date={1591382049879}
        tags={[{ name: 'home', color: 'darkolivegreen' }]}
      />
      <EventCard
        id={123456789}
        name="A/C filter change"
        date={1591382049879}
        notes="Try a better filter (HEPA-9) next time for comparison"
        tags={[
          { name: 'home', color: 'darkolivegreen' },
          { name: 'clean', color: 'darkgoldenrod' },
        ]}
        recurs={{ days: null, weeks: null, months: 3, nextdate: 1599349015000 }}
      />
    </Container>
  );
};

export default SearchScreen;

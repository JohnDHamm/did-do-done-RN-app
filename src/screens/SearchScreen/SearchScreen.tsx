import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, StyledText } from './SearchScreen.styles';
import { EventCard, SectionHeader, Tag } from '../../components';
import { COLORS } from '../../styles';
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
      <Button title="event" onPress={() => navigation.navigate('Event')} />
      <Button
        title="recurring events"
        onPress={() => navigation.navigate('Recurring')}
      />
      <SectionHeader text="looking back..." />
      <SectionHeader
        text="missed"
        color={COLORS.MISSED_RED}
        textColor={COLORS.WHITE}
      />
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
      />
      <EventCard
        id={123456789}
        name="A/C filter change"
        date={1591382049879}
        tags={[{ name: 'home', color: 'darkolivegreen' }]}
        recurs={{ days: null, weeks: 2, months: null, nextdate: 1599349015000 }}
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

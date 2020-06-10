import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Container,
  StyledText,
  TagsBlock,
} from './SearchScreen.styles';
import { Button, EventCard, SectionHeader, Tag } from '../../components';
import { COLORS } from '../../styles';
import IMAGES from '../../../assets/images';
import { mockSavedTags } from '../../mocks/mockSavedTags';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [savedTags] = React.useState<Tag[]>(mockSavedTags);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const toggleTag = (tagName: string): void => {
    const newSelectedTags = Array.from(selectedTags);
    if (selectedTags.includes(tagName)) {
      setSelectedTags(newSelectedTags.filter((tag) => tag !== tagName));
    } else {
      newSelectedTags.push(tagName);
      setSelectedTags(newSelectedTags);
    }
  };

  const renderTags = (tags: Tag[]) => {
    const extraStyles = {
      marginTop: 3,
      marginBottom: 3,
      marginRight: 3,
      marginLeft: 3,
    };
    return tags.map((tag) => (
      <TouchableOpacity key={tag.name} onPress={() => toggleTag(tag.name)}>
        <Tag
          key={tag.name}
          label={tag.name}
          color={tag.color}
          selected={selectedTags.includes(tag.name)}
          extraStyles={extraStyles}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <Container>
      <StyledText>Did? Do. Done!</StyledText>
      <TagsBlock>{renderTags(savedTags)}</TagsBlock>
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

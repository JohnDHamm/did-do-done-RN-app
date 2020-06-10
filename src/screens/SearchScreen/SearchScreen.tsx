import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Container,
  StyledText,
  TagsBlock,
} from './SearchScreen.styles';
import {
  Button,
  EventCard,
  RecurEventsBlock,
  SearchBar,
  SectionHeader,
  Tag,
} from '../../components';
import { COLORS } from '../../styles';
import IMAGES from '../../../assets/images';
import { mockSavedTags } from '../../mocks/mockSavedTags';

const mockRecurTotals: RecurTotals = {
  missed: 3,
  today: 1,
  thisweek: 2,
  next30: 12,
};

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [savedTags] = React.useState<Tag[]>(mockSavedTags);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [isSearching, setIsSearching] = React.useState<boolean>(true);
  const [searchText, setSearchText] = React.useState<string>('');

  const getSearchResults = () => {
    console.log('search selectedTags:', selectedTags);
    console.log('search searchText:', searchText);
  };

  const toggleTag = (tagName: string): void => {
    const newSelectedTags = Array.from(selectedTags);
    if (selectedTags.includes(tagName)) {
      setSelectedTags(newSelectedTags.filter((tag) => tag !== tagName));
    } else {
      newSelectedTags.push(tagName);
      setSelectedTags(newSelectedTags);
    }
  };

  const handleSearchSubmit = (searchText: string) => {
    setSearchText(searchText);
  };

  const handleSearchAll = () => {
    setIsSearching(true);
    const allTagNames = savedTags.map((tag) => tag.name);
    setSelectedTags(allTagNames);
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

  React.useEffect(() => {
    selectedTags.length || searchText
      ? setIsSearching(true)
      : setIsSearching(false);
    getSearchResults();
  }, [selectedTags, searchText]);

  return (
    <Container>
      <StyledText>Did? Do. Done!</StyledText>
      <SearchBar
        onClear={() => console.log('clear search text')}
        onSubmit={(searchText) => handleSearchSubmit(searchText)}
      />
      <TagsBlock>{renderTags(savedTags)}</TagsBlock>
      {!isSearching && (
        <TouchableOpacity onPress={() => handleSearchAll()}>
          <Button label="see all events" />
        </TouchableOpacity>
      )}
      {!isSearching && (
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <AddIcon source={IMAGES.ADD_EVENT_ICON} />
        </TouchableOpacity>
      )}
      {isSearching && (
        <>
          <SectionHeader text="looking back..." />
          <EventCard
            id={123456789}
            name="A/C filter change"
            date={1550185200000}
          />
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
            recurs={{
              days: null,
              weeks: null,
              months: 3,
              nextdate: 1599349015000,
            }}
          />
        </>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Recurring')}>
        <RecurEventsBlock
          recurTotals={mockRecurTotals}
          minimized={isSearching}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default SearchScreen;

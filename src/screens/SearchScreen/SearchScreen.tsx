import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Container,
  ResultsBlock,
  ResultsView,
  SearchBlock,
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
import IMAGES from '../../../assets/images';
import { mockSavedEvents } from '../../mocks/mockSavedEvents';
import { mockSavedTags } from '../../mocks/mockSavedTags';
import { getRecurTotals } from '../../functions';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [savedEvents] = React.useState<SavedEvent[]>(mockSavedEvents);
  const [recurTotals, setRecurTotals] = React.useState<RecurTotals>({
    missed: 0,
    today: 0,
    thisweek: 0,
    next30: 0,
  });
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

  const renderEventCards = (events: SavedEvent[]) => {
    return events.map((event) => {
      const { id, name, date, notes, tags, recurs } = event;
      return (
        <TouchableOpacity key={id} onPress={() => navigation.navigate('Event')}>
          <EventCard
            id={id}
            name={name}
            date={date}
            notes={notes}
            tags={tags}
            recurs={recurs}
          />
        </TouchableOpacity>
      );
    });
  };

  React.useEffect(() => {
    selectedTags.length || searchText
      ? setIsSearching(true)
      : setIsSearching(false);
    getSearchResults();
  }, [selectedTags, searchText]);

  React.useEffect(() => {
    setRecurTotals(getRecurTotals(savedEvents));
  }, [savedEvents]);

  return (
    <Container isSearching={isSearching}>
      {!isSearching && <StyledText>Did? Do. Done!</StyledText>}
      <SearchBlock>
        <SearchBar
          onClear={() => console.log('clear search text')}
          onSubmit={(searchText) => handleSearchSubmit(searchText)}
        />
        <TagsBlock>{renderTags(savedTags)}</TagsBlock>
        <TouchableOpacity onPress={() => handleSearchAll()}>
          <Button label="see all events" />
        </TouchableOpacity>
      </SearchBlock>
      {!isSearching && (
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <AddIcon source={IMAGES.ADD_EVENT_ICON} />
        </TouchableOpacity>
      )}
      {isSearching && (
        <ResultsBlock>
          <SectionHeader text="looking back..." />
          <ResultsView>{renderEventCards(savedEvents)}</ResultsView>
        </ResultsBlock>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Recurring')}>
        <RecurEventsBlock recurTotals={recurTotals} minimized={isSearching} />
      </TouchableOpacity>
    </Container>
  );
};

export default SearchScreen;

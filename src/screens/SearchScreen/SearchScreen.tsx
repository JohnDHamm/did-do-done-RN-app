import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Container,
  EmptyMessage,
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
import uniqby from 'lodash.uniqby';
import { COLORS } from '../../styles';

const tagExtraStyles = {
  marginTop: 3,
  marginBottom: 3,
  marginRight: 3,
  marginLeft: 3,
};

const NO_TAG_LABEL = 'no tag';

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
  const [searchResults, setSearchResults] = React.useState<SavedEvent[]>([]);
  const [showEmptyMessage, setShowEmptyMessage] = React.useState<boolean>('');

  const getSearchResults = () => {
    //filter by tags
    const tagFilteredEvents: Array<SavedEvent> = [];
    if (selectedTags.length > 0) {
      savedEvents.forEach((event) => {
        if (event.tags) {
          const eventTags = event.tags.map((tag) => tag.name);
          eventTags.forEach((tag) => {
            if (selectedTags.includes(tag)) {
              tagFilteredEvents.push(event);
              return;
            }
          });
        } else {
          if (selectedTags.includes('no tag')) {
            tagFilteredEvents.push(event);
          }
        }
      });
    }
    //filter by searchText
    const textFilteredEvents: Array<SavedEvent> = searchText
      ? tagFilteredEvents.filter((event) =>
          event.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];

    const filteredEvents: SavedEvent[] = searchText
      ? textFilteredEvents
      : tagFilteredEvents;

    const uniqueEvents = uniqby(filteredEvents, 'id');
    uniqueEvents.sort((a, b) => b.id - a.id);
    setSearchResults(uniqueEvents);
    setShowEmptyMessage(uniqueEvents.length === 0);
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

  const setAllTagsActve = (): void => {
    const allTagNames = savedTags.map((tag) => tag.name);
    allTagNames.push(NO_TAG_LABEL);
    setSelectedTags(allTagNames);
  };

  const handleSearchSubmit = (searchText: string) => {
    if (searchText && selectedTags.length === 0) {
      setAllTagsActve();
    }
    setSearchText(searchText);
  };

  const onSearchTextClear = (): void => {
    setSearchText('');
  };

  const handleSearchAll = () => {
    setIsSearching(true);
    setAllTagsActve();
  };

  const renderTags = (tags: Tag[]) => {
    return tags.map((tag) => (
      <TouchableOpacity key={tag.name} onPress={() => toggleTag(tag.name)}>
        <Tag
          key={tag.name}
          label={tag.name}
          color={tag.color}
          selected={selectedTags.includes(tag.name)}
          extraStyles={tagExtraStyles}
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
          onClear={() => onSearchTextClear()}
          onSubmit={(searchText) => handleSearchSubmit(searchText)}
        />
        <TagsBlock>
          {renderTags(savedTags)}
          <TouchableOpacity onPress={() => toggleTag(NO_TAG_LABEL)}>
            <Tag
              label={NO_TAG_LABEL}
              color={COLORS.PRIMARY_GRAY}
              selected={selectedTags.includes(NO_TAG_LABEL)}
              extraStyles={tagExtraStyles}
            />
          </TouchableOpacity>
        </TagsBlock>
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
          <ResultsView>
            {renderEventCards(searchResults)}
            {showEmptyMessage && (
              <EmptyMessage>no matching results found...</EmptyMessage>
            )}
          </ResultsView>
        </ResultsBlock>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Recurring')}>
        <RecurEventsBlock recurTotals={recurTotals} minimized={isSearching} />
      </TouchableOpacity>
    </Container>
  );
};

export default SearchScreen;

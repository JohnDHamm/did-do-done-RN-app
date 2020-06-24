import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Container,
  EmptyMessage,
  HeaderAddIcon,
  ListSeparator,
  ResultsBlock,
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
import { EventsContext, TagsContext } from '../../contexts';
import { getRecurTotals } from '../../functions';
import uniqby from 'lodash.uniqby';
import { COLORS } from '../../styles';

const tagExtraStyles = {
  marginTop: 3,
  marginBottom: 3,
  marginRight: 3,
  marginLeft: 3,
};

const NO_TAG_ID = 0;

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const { events } = React.useContext<EventsContextInterface>(EventsContext);
  const { tags } = React.useContext<TagsContextInterface>(TagsContext);

  const [hasSavedEvents, setHasSavedEvents] = React.useState<boolean>(false);
  const [recurTotals, setRecurTotals] = React.useState<RecurTotals>({
    missed: 0,
    today: 0,
    thisweek: 0,
    next30: 0,
  });
  const [selectedTags, setSelectedTags] = React.useState<number[]>([]);
  const [isSearching, setIsSearching] = React.useState<boolean>(true);
  const [searchText, setSearchText] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<SavedEvent[]>([]);

  const getSearchResults = () => {
    //filter by tags
    const tagFilteredEvents: Array<SavedEvent> = [];
    if (selectedTags.length > 0) {
      events.forEach((event) => {
        if (event.tagIds) {
          const eventTagIds = event.tagIds.map((id) => id);
          eventTagIds.forEach((tagId) => {
            if (selectedTags.includes(tagId)) {
              tagFilteredEvents.push(event);
              return;
            }
          });
        } else {
          if (selectedTags.includes(NO_TAG_ID)) {
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
  };

  const toggleTag = (id: number): void => {
    const newSelectedTags = Array.from(selectedTags);
    if (selectedTags.includes(id)) {
      setSelectedTags(newSelectedTags.filter((tag) => tag !== id));
    } else {
      newSelectedTags.push(id);
      setSelectedTags(newSelectedTags);
    }
  };

  const setAllTagsActve = (): void => {
    const allTagIds = tags.map((tag) => tag.id);
    allTagIds.push(NO_TAG_ID);
    setSelectedTags(allTagIds);
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
      <TouchableOpacity key={tag.name} onPress={() => toggleTag(tag.id)}>
        <Tag
          key={tag.id}
          label={tag.name}
          color={tag.color}
          selected={selectedTags.includes(tag.id)}
          extraStyles={tagExtraStyles}
        />
      </TouchableOpacity>
    ));
  };

  const ListItem = (event: SavedEvent) => {
    const { id, name, date, notes, tagIds, recurs } = event;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Event', { event })}>
        <EventCard
          id={id}
          name={name}
          date={date}
          notes={notes}
          tagIds={tagIds}
          recurs={recurs}
        />
      </TouchableOpacity>
    );
  };

  const HeaderRightButton: JSX.Element = (
    <TouchableOpacity
      onPress={() => navigation.navigate('Event', { event: {} })}
    >
      <HeaderAddIcon source={IMAGES.ADD_EVENT_ICON} />
    </TouchableOpacity>
  );

  React.useEffect(() => {
    const title = isSearching ? 'Did? Do. Done!' : '';
    navigation.setOptions({
      title,
      headerRight: () => (isSearching ? HeaderRightButton : null),
    });
  }, [isSearching]);

  React.useEffect(() => {
    selectedTags.length || searchText
      ? setIsSearching(true)
      : setIsSearching(false);
    getSearchResults();
  }, [selectedTags, searchText]);

  React.useEffect(() => {
    setHasSavedEvents(events.length > 0);
    setRecurTotals(getRecurTotals(events));
  }, [events]);

  return (
    <Container isSearching={isSearching} hasEvents={hasSavedEvents}>
      {!isSearching && <StyledText>Did? Do. Done!</StyledText>}
      {hasSavedEvents && (
        <SearchBlock>
          <SearchBar
            onClear={() => onSearchTextClear()}
            onSubmit={(searchText) => handleSearchSubmit(searchText)}
          />
          <TagsBlock>
            {renderTags(tags)}
            <TouchableOpacity onPress={() => toggleTag(NO_TAG_ID)}>
              <Tag
                label={'no tag'}
                color={COLORS.PRIMARY_GRAY}
                selected={selectedTags.includes(NO_TAG_ID)}
                extraStyles={tagExtraStyles}
              />
            </TouchableOpacity>
          </TagsBlock>
          <TouchableOpacity onPress={() => handleSearchAll()}>
            <Button label="see all events" />
          </TouchableOpacity>
        </SearchBlock>
      )}
      {!isSearching && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Event', { event: {} })}
        >
          <AddIcon source={IMAGES.ADD_EVENT_ICON} />
        </TouchableOpacity>
      )}
      {isSearching && (
        <ResultsBlock>
          <SectionHeader text="looking back..." />
          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <ListItem
                id={item.id}
                name={item.name}
                date={item.date}
                notes={item.notes}
                tagIds={item.tagIds}
                recurs={item.recurs}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <ListSeparator />}
            ListEmptyComponent={
              <EmptyMessage>no matching results found...</EmptyMessage>
            }
          />
        </ResultsBlock>
      )}
      {hasSavedEvents && (
        <TouchableOpacity onPress={() => navigation.navigate('Recurring')}>
          <RecurEventsBlock recurTotals={recurTotals} minimized={isSearching} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default SearchScreen;

import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Container,
  EmptyMessage,
  HeaderAddIcon,
  ListSeparator,
  ResultsBlock,
  SearchBlock,
  TagsBlock,
} from './SearchScreen.styles';
import {
  AppTitle,
  Button,
  DevSettings,
  EventCard,
  RecurEventsBlock,
  SearchBar,
  SectionHeader,
  Tag,
} from '../../components';
import IMAGES from '../../../assets/images';
import { EventsContext, SearchContext, TagsContext } from '../../contexts';
import { getRecurTotals, searchEventsByText } from '../../functions';
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
  const { searchTerms, setCurrentSearchTerms } = React.useContext<
    SearchContextInterface
  >(SearchContext);

  const [hasSavedEvents, setHasSavedEvents] = React.useState<boolean>(false);
  const [recurTotals, setRecurTotals] = React.useState<RecurTotals>({
    missed: 0,
    today: 0,
    thisweek: 0,
    next30: 0,
  });
  const [selectedTagIds, setSelectedTagIds] = React.useState<number[]>(
    searchTerms.selectedTagIds
  );
  const [isSearching, setIsSearching] = React.useState<boolean>(true);
  const [searchText, setSearchText] = React.useState<string>(
    searchTerms.searchText
  );
  const [searchResults, setSearchResults] = React.useState<SavedEvent[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      //TODO?: check if changes in events before getSearchResults? usePrev hook?
      getSearchResults();
    }, [events, searchTerms])
  );

  const getSearchResults = () => {
    //filter by tags
    const tagFilteredEvents: Array<SavedEvent> = [];
    if (selectedTagIds.length > 0) {
      events.forEach((event) => {
        if (event.tagIds) {
          const eventTagIds = event.tagIds.map((id) => id);
          eventTagIds.forEach((tagId) => {
            if (selectedTagIds.includes(tagId)) {
              tagFilteredEvents.push(event);
              return;
            }
          });
        } else {
          if (selectedTagIds.includes(NO_TAG_ID)) {
            tagFilteredEvents.push(event);
          }
        }
      });
    }

    //filter by searchText
    const textFilteredEvents: Array<SavedEvent> = searchEventsByText(
      tagFilteredEvents,
      searchText
    );

    const filteredEvents: SavedEvent[] = searchText
      ? textFilteredEvents
      : tagFilteredEvents;

    const uniqueEvents = uniqby(filteredEvents, 'id');
    uniqueEvents.sort((a, b) => b.date - a.date);
    setSearchResults(uniqueEvents);
  };

  const setSelectedTags = (tagIds: number[]) => {
    setSelectedTagIds(tagIds);
    const newSearchTerms: SearchTerms = {
      selectedTagIds: tagIds,
      searchText,
    };
    setCurrentSearchTerms(newSearchTerms);
  };

  const toggleTag = (id: number): void => {
    const newSelectedTags = Array.from(selectedTagIds);
    if (selectedTagIds.includes(id)) {
      setSelectedTags(newSelectedTags.filter((tag) => tag !== id));
    } else {
      newSelectedTags.push(id);
      setSelectedTags(newSelectedTags);
    }
  };

  const setAllTagsActive = (): void => {
    const allTagIds = tags.map((tag) => tag.id);
    allTagIds.push(NO_TAG_ID);
    setSelectedTags(allTagIds);
  };

  const changeSearchText = (text: string) => {
    setSearchText(text);
    const newSearchTerms: SearchTerms = {
      selectedTagIds,
      searchText: text,
    };
    setCurrentSearchTerms(newSearchTerms);
  };

  const handleSearchSubmit = (searchText: string) => {
    if (searchText && selectedTagIds.length === 0) {
      setAllTagsActive();
    }
    changeSearchText(searchText);
  };

  const onSearchTextClear = (): void => {
    changeSearchText('');
  };

  const handleSearchAll = () => {
    setIsSearching(true);
    setAllTagsActive();
  };

  const renderTags = (tags: Tag[]) => {
    return tags.map((tag) => (
      <TouchableOpacity key={tag.name} onPress={() => toggleTag(tag.id)}>
        <Tag
          key={tag.id}
          label={tag.name}
          color={tag.color}
          selected={selectedTagIds.includes(tag.id)}
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
    selectedTagIds.length || searchText
      ? setIsSearching(true)
      : setIsSearching(false);
    getSearchResults();
  }, [selectedTagIds, searchText]);

  React.useEffect(() => {
    if (events.length < 1) {
      setIsSearching(false);
    }
    setHasSavedEvents(events.length > 0);
    setRecurTotals(getRecurTotals(events));
  }, [events]);

  React.useEffect(() => {
    // console.log('SearchScreen mount');
  }, []);

  return (
    <Container isSearching={isSearching} hasEvents={hasSavedEvents}>
      <DevSettings />
      {!isSearching && <AppTitle />}
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
                selected={selectedTagIds.includes(NO_TAG_ID)}
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

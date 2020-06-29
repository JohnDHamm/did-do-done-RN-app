import React from 'react';
import { SectionList, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Container, ListSeparator } from './RecurringScreen.styles';
import { EventsContext } from '../../contexts';
import { RecurEventCard, SectionHeader } from '../../components';
import { COLORS } from '../../styles';
import { composeRecurData } from '../../functions';

const RecurringScreen: React.FC = () => {
  const navigation = useNavigation();
  const { events } = React.useContext<EventsContextInterface>(EventsContext);
  const [sectionData, setSectionData] = React.useState<RecurSectionData[]>([]);

  const createList = () => {
    const recurData = composeRecurData(events.filter((event) => event.recurs));
    setSectionData(recurData);
  };

  useFocusEffect(
    React.useCallback(() => {
      createList();
    }, [events])
  );

  const ListItem = (event: SavedEvent) => {
    const { id, name, date, notes, tagIds, recurs } = event;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Event', { event })}>
        <RecurEventCard
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

  const renderSectionHeader = (title: RecurSectionHeader) => {
    let bgColor = '';
    let textColor = COLORS.WHITE;
    switch (title) {
      case 'missed':
        bgColor = COLORS.MISSED_RED;
        break;
      case 'today':
        bgColor = COLORS.TODAY_GREEN;
        break;
      case 'this week':
        bgColor = COLORS.THIS_WEEK_YELLOW;
        break;
      case 'next 30 days':
        bgColor = COLORS.PRIMARY_GRAY;
        break;
      case 'later':
        bgColor = COLORS.LIGHT_GRAY;
        textColor = COLORS.PRIMARY_GRAY;
    }
    return <SectionHeader text={title} color={bgColor} textColor={textColor} />;
  };

  React.useEffect(() => {
    createList();
  }, []);

  return (
    <Container>
      <SectionList
        sections={sectionData}
        renderSectionHeader={({ section: { title } }) =>
          renderSectionHeader(title)
        }
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
      />
    </Container>
  );
};

export default RecurringScreen;

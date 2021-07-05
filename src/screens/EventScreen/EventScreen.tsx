import React from 'react';
import { Alert, Modal, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ButtonSection,
  Container,
  DeleteBtnContainer,
  Label,
  NotesHeader,
  RecurBlock,
  RecurDateText,
  RecurFreqText,
  RecurRow,
  Section,
  TagsBlock,
  TagsRow,
} from './EventScreen.styles';
import {
  Button,
  ErrorMessage,
  Input,
  RecurEventModal,
  Tag,
  TagMgmtModal,
} from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TagsContext } from '../../contexts';
import { COLORS } from '../../styles';
import {
  getRecurDateString,
  getRecurFreqData,
  saveData,
} from '../../functions';
import { EventsContext } from '../../contexts';
import { ThemeContext } from 'styled-components';
import moment from 'moment';

const tagExtraStyles = {
  marginTop: 3,
  marginBottom: 3,
  marginRight: 5,
};

const EventScreen: React.FC = () => {
  const navigation = useNavigation<EventScreenNavigationProp>();
  const route = useRoute<EventScreenRouteProp>();
  const { event } = route.params;
  const theme = React.useContext(ThemeContext);

  const { events, setCurrentEvents } = React.useContext<EventsContextInterface>(
    EventsContext
  );
  const { tags } = React.useContext<TagsContextInterface>(TagsContext);
  const [name, setName] = React.useState<string>(event.name || '');
  const [date, setDate] = React.useState<Date>(
    event.date ? new Date(event.date) : new Date()
  );
  const [notes, setNotes] = React.useState<string>(event.notes || '');
  const [selectedTags, setSelectedTags] = React.useState<number[]>([]);
  const [recurInfo, setRecurInfo] = React.useState<RecurringInfo | null>(
    event.recurs || null
  );
  const [recurDate, setRecurDate] = React.useState<string>('');
  const [recurFreq, setRecurFreq] = React.useState<string>('');
  const [isPastRecurDate, setIsPastRecurDate] = React.useState<boolean>(false);
  const [saveBtnLabel, setSaveBtnLabel] = React.useState<string>('save event');
  const [showRecurModal, setShowRecurModal] = React.useState<boolean>(false);
  const [showTagModal, setShowTagModal] = React.useState<boolean>(false);
  const [errMsg, setErrMsg] = React.useState<string>('');
  const [showDeleteBtn, setShowDeleteBtn] = React.useState<boolean>(false);

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const toggleTag = (tagId: number): void => {
    const newSelectedTags = Array.from(selectedTags);
    if (selectedTags.includes(tagId)) {
      setSelectedTags(newSelectedTags.filter((id) => id !== tagId));
    } else {
      newSelectedTags.push(tagId);
      setSelectedTags(newSelectedTags);
    }
  };

  const renderTags = (tags: Tag[]) => {
    return tags.map((tag) => (
      <TouchableOpacity key={tag.name} onPress={() => toggleTag(tag.id)}>
        <Tag
          key={tag.name}
          label={tag.name}
          color={tag.color}
          selected={selectedTags.includes(tag.id)}
          extraStyles={tagExtraStyles}
        />
      </TouchableOpacity>
    ));
  };

  const updateRecurInfo = ({ freq, metric }: RecurFreqData) => {
    setRecurFreq(freq.toString() + ' ' + metric);
    setRecurDate(getRecurDateString(date, freq, metric));
    const nextDate = moment(date).add(freq, metric);
    setIsPastRecurDate(nextDate.isBefore(moment().startOf('day')));

    setRecurInfo((recurInfo) => ({
      nextdate: moment(date).add(freq, metric).valueOf(),
      days: recurInfo?.days || null,
      weeks: recurInfo?.weeks || null,
      months: recurInfo?.months || null,
    }));
  };

  const handleSubmitRecur = (newRecurData: RecurringInfo) => {
    setRecurInfo(newRecurData);
    updateRecurInfo(getRecurFreqData(newRecurData));
  };

  const handleSubmitTag = () => {
    console.log('tag submit');
  };

  const composeEvent = (eventId: number): SavedEvent => {
    const event: SavedEvent = {
      id: eventId,
      name,
      date: date.getTime(),
    };
    if (notes.length > 0) {
      event.notes = notes;
    }
    if (selectedTags.length > 0) {
      event.tagIds = selectedTags;
    }
    if (recurInfo) {
      event.recurs = recurInfo;
    }

    return event;
  };

  const saveEvent = (): void => {
    if (name.length > 0) {
      setErrMsg('');
      const updateEvents = Array.from(events);
      if (event.id) {
        const changedEvent = composeEvent(event.id);
        const filteredEvents = updateEvents.filter(
          (event) => event.id !== changedEvent.id
        );
        filteredEvents.push(changedEvent);
        saveData('EventsStore', filteredEvents, setCurrentEvents);
      } else {
        const newEvent = composeEvent(date.getTime());
        updateEvents.push(newEvent);
        saveData('EventsStore', updateEvents, setCurrentEvents);
      }
      navigation.goBack();
    } else {
      setErrMsg('Sorry, your event cannot be saved without a name!');
    }
  };

  const deleteConfirm = (): void => {
    Alert.alert('Warning!', 'Are you sure you want to delete this event?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel delete event'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => deleteEvent() },
    ]);
  };

  const deleteEvent = () => {
    const updateEvents = Array.from(
      events.filter((evt) => evt.id !== event.id)
    );
    saveData('EventsStore', updateEvents, setCurrentEvents);
    navigation.goBack();
  };

  React.useEffect(() => {
    if (name.length > 0) {
      setErrMsg('');
    }
  }, [name]);

  React.useEffect(() => {
    if (recurInfo) {
      updateRecurInfo(getRecurFreqData(recurInfo));
    }
  }, [date]);

  React.useEffect(() => {
    if (event.id) {
      setSaveBtnLabel('save changes');
      setShowDeleteBtn(true);
    }
    if (event.tagIds) {
      const newSelectedTags = Array.from(selectedTags);
      event.tagIds.forEach((tagId) => {
        newSelectedTags.push(tagId);
      });
      setSelectedTags(newSelectedTags);
    }
  }, []);

  return (
    <Container keyboardDismissMode="on-drag">
      <Section>
        <Input
          initialValue={name}
          placeholder="event name"
          onSubmit={(text) => setName(text)}
          autoFocus={name.length < 1}
          onBlur={(text) => setName(text)}
        />
      </Section>
      <Section>
        <Label>event date:</Label>
        <DateTimePicker
          display="spinner"
          value={date}
          onChange={onDateChange}
          textColor={theme.text}
        />
      </Section>
      <Section>
        {notes.length > 0 && <NotesHeader>notes:</NotesHeader>}
        <Input
          initialValue={notes}
          placeholder="notes?"
          onSubmit={(text) => setNotes(text)}
          onBlur={(text) => setNotes(text)}
        />
      </Section>
      <Section>
        <TagsRow>
          <Label>tags:</Label>
          <TouchableOpacity onPress={() => setShowTagModal(true)}>
            <Tag label="manage tags" color={theme.purple} selected={true} />
          </TouchableOpacity>
        </TagsRow>
        <TagsBlock>{renderTags(tags)}</TagsBlock>
      </Section>
      <Section>
        {recurDate ? (
          <View>
            <Label>do again:</Label>
            <TouchableOpacity onPress={() => setShowRecurModal(true)}>
              <RecurBlock>
                <RecurDateText isPast={isPastRecurDate}>
                  {recurDate}
                </RecurDateText>
                <RecurRow>
                  <RecurFreqText>every {recurFreq}</RecurFreqText>
                </RecurRow>
              </RecurBlock>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setShowRecurModal(true)}>
            <Label>do again?</Label>
          </TouchableOpacity>
        )}
      </Section>
      <ButtonSection>
        {errMsg.length > 0 ? (
          <ErrorMessage>{errMsg}</ErrorMessage>
        ) : (
          <TouchableOpacity onPress={() => saveEvent()}>
            <Button label={saveBtnLabel} />
          </TouchableOpacity>
        )}
        {showDeleteBtn && (
          <DeleteBtnContainer>
            <TouchableOpacity onPress={() => deleteConfirm()}>
              <Button type="delete" label="delete event" />
            </TouchableOpacity>
          </DeleteBtnContainer>
        )}
      </ButtonSection>

      <Modal animationType="slide" visible={showRecurModal}>
        <RecurEventModal
          date={date}
          onClose={() => setShowRecurModal(false)}
          onSubmit={handleSubmitRecur}
          recurInfo={recurInfo}
        />
      </Modal>

      <Modal animationType="slide" visible={showTagModal}>
        <TagMgmtModal
          onClose={() => setShowTagModal(false)}
          onSubmit={handleSubmitTag}
        />
      </Modal>
    </Container>
  );
};

export default EventScreen;

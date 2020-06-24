import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ButtonSection,
  Container,
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
  Input,
  RecurEventModal,
  Tag,
  TagMgmtModal,
} from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TagsContext } from '../../contexts';
import { COLORS } from '../../styles';
import { getRecurDateString, getRecurFreqData } from '../../functions';
import moment from 'moment';

const tagExtraStyles = {
  marginTop: 3,
  marginBottom: 3,
  marginRight: 3,
};

const EventScreen: React.FC = () => {
  const navigation = useNavigation<EventScreenNavigationProp>();
  const route = useRoute<EventScreenRouteProp>();
  const { event } = route.params;

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

  const updateRecurDisplay = ({ freq, metric }: RecurFreqData) => {
    setRecurFreq(freq.toString() + ' ' + metric);
    setRecurDate(getRecurDateString(date, freq, metric));
    const nextDate = moment(date).add(freq, metric);
    setIsPastRecurDate(nextDate.isBefore(moment().startOf('day')));
  };

  const handleSubmitRecur = (newRecurData: RecurringInfo) => {
    setRecurInfo(newRecurData);
    updateRecurDisplay(getRecurFreqData(newRecurData));
  };

  const handleSubmitTag = () => {
    console.log('tag submit');
  };

  React.useEffect(() => {
    if (recurInfo) {
      updateRecurDisplay(getRecurFreqData(recurInfo));
    }
  }, [date]);

  React.useEffect(() => {
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
        />
      </Section>
      <Section>
        <Label>event date:</Label>
        <DateTimePicker value={date} onChange={onDateChange} />
      </Section>
      <Section>
        {notes.length > 0 && <NotesHeader>notes:</NotesHeader>}
        <Input
          initialValue={notes}
          placeholder="notes?"
          onSubmit={(text) => setNotes(text)}
        />
      </Section>
      <Section>
        <TagsRow>
          <Label>tags:</Label>
          <TouchableOpacity onPress={() => setShowTagModal(true)}>
            <Tag
              label="manage tags"
              color={COLORS.PRIMARY_PURPLE}
              selected={true}
            />
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
        <Button label={saveBtnLabel} />
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

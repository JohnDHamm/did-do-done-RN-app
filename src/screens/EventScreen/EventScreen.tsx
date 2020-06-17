import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ButtonSection,
  Container,
  Label,
  Section,
  TagsBlock,
  TagsRow,
} from './EventScreen.styles';
import { Button, Input, Tag } from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import { mockSavedTags } from '../../mocks/mockSavedTags';
import { COLORS } from '../../styles';

const tagExtraStyles = {
  marginTop: 3,
  marginBottom: 3,
  marginRight: 3,
};

const EventScreen: React.FC = () => {
  const navigation = useNavigation<EventScreenNavigationProp>();
  const route = useRoute<EventScreenRouteProp>();
  const { event } = route.params;

  const [name, setName] = React.useState<string>(event.name || '');
  const [date, setDate] = React.useState<Date>(
    event.date ? new Date(event.date) : new Date()
  );
  const [notes, setNotes] = React.useState<string>(event.notes || '');
  const [savedTags] = React.useState<Tag[]>(mockSavedTags);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [recurDate, setRecurDate] = React.useState<string>('');
  const [saveBtnLabel, setSaveBtnLabel] = React.useState<string>('save event');

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
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

  React.useEffect(() => {
    if (event.tags) {
      const newSelectedTags = Array.from(selectedTags);
      event.tags.forEach((tag) => {
        newSelectedTags.push(tag.name);
      });
      setSelectedTags(newSelectedTags);
    }
  }, []);

  return (
    <Container>
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
        <Input
          initialValue={notes}
          placeholder="notes?"
          onSubmit={(text) => setNotes(text)}
        />
      </Section>
      <Section>
        <TagsRow>
          <Label>tags:</Label>
          <TouchableOpacity>
            <Tag
              label="add tag"
              color={COLORS.PRIMARY_PURPLE}
              selected={true}
            />
          </TouchableOpacity>
        </TagsRow>
        <TagsBlock>{renderTags(savedTags)}</TagsBlock>
      </Section>
      <Section>
        <Label>do again?</Label>
      </Section>
      <ButtonSection>
        <Button label={saveBtnLabel} />
      </ButtonSection>
    </Container>
  );
};

export default EventScreen;

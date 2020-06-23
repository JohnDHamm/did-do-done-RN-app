import React from 'react';
import {
  AddIcon,
  AddTagBlock,
  ButtonContainer,
  CenteredView,
  CloseIcon,
  CloseIconContainer,
  Container,
  Content,
  Label,
  SelectedIcon,
  SelectedTag,
  TagNameEdit,
  TagsBlock,
  TagSwatch,
  TagSwatchRow,
  Title,
  TitleBlock,
} from './TagMgmtModal.styles';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Tag from '../Tag/Tag';
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles';
import IMAGES from '../../../assets/images';
import { mockSavedTags } from '../../mocks/mockSavedTags';

const tagExtraStyles = {
  marginTop: 5,
  marginBottom: 5,
  marginRight: 5,
  marginLeft: 5,
};

const noSelectedTag: Tag = {
  name: '',
  color: '',
};

interface Props {
  onClose: () => void;
  onSubmit: () => void;
}

const TagMgmtModal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [currentTags, setCurrentTags] = React.useState<Tag[]>(mockSavedTags); //TODO: use context
  const [showNewInput, setShowNewInput] = React.useState<boolean>(false);
  const [selectedTag, setSelectedTag] = React.useState<Tag>(noSelectedTag);
  const [showTagEdits, setShowTagEdits] = React.useState<boolean>(false);

  const selectTag = (tag: Tag) => {
    setShowTagEdits(true);
    setSelectedTag(tag);
  };

  const renderTags = (tags: Tag[]) => {
    return tags.map((tag) => (
      <TouchableOpacity key={tag.name} onPress={() => selectTag(tag)}>
        <SelectedTag selected={tag.name === selectedTag.name}>
          <Tag
            key={tag.name}
            label={tag.name}
            color={tag.color}
            selected={true}
            extraStyles={tagExtraStyles}
          />
        </SelectedTag>
      </TouchableOpacity>
    ));
  };

  const changeTagColor = (newColor: string) => {
    const updatedTags = Array.from(currentTags);
    const idx = updatedTags.findIndex((tag) => tag.name === selectedTag.name);
    updatedTags[idx].color = newColor;
    setCurrentTags(updatedTags);
  };

  const renderTagSwatchesFirstRow = () => {
    return COLORS.TAG_COLORS.slice(0, 5).map((tagSwatch) => (
      <TouchableOpacity
        key={tagSwatch.idx}
        onPress={() => changeTagColor(tagSwatch.color)}
      >
        <TagSwatch color={tagSwatch.color}>
          {tagSwatch.color === selectedTag.color && (
            <SelectedIcon source={IMAGES.CLOSE_ICON} />
          )}
        </TagSwatch>
      </TouchableOpacity>
    ));
  };
  const renderTagSwatchesSecondRow = () => {
    return COLORS.TAG_COLORS.slice(5, 10).map((tagSwatch) => (
      <TouchableOpacity
        key={tagSwatch.idx}
        onPress={() => changeTagColor(tagSwatch.color)}
      >
        <TagSwatch color={tagSwatch.color}>
          {tagSwatch.color === selectedTag.color && (
            <SelectedIcon source={IMAGES.CLOSE_ICON} />
          )}
        </TagSwatch>
      </TouchableOpacity>
    ));
  };

  const handleSaveChanges = () => {
    //TODO: save changes to context/AsyncStorage
    onSubmit();
    onClose();
  };

  const addNewTag = (newTagName: string) => {
    //TODO check if duplicate tag name -> show err msg?
    if (newTagName.length < 1) return;
    const updatedTags = Array.from(currentTags);
    const newTag: Tag = {
      name: newTagName,
      color: COLORS.PRIMARY_GRAY,
    };
    updatedTags.push(newTag);
    setCurrentTags(updatedTags);
    setShowNewInput(false);
  };

  const changeTagName = (tagName: string) => {
    //TODO check if duplicate tag name -> show err msg?
    if (tagName.length < 1) return;
    const updatedTags = Array.from(currentTags);
    const idx = updatedTags.findIndex((tag) => tag.name === selectedTag.name);
    updatedTags[idx].name = tagName;
    setCurrentTags(updatedTags);
  };

  const deleteTag = () => {
    //TODO: delete tag from tags context/AsyncStorage
    // ?? what about saved events that use the tag?
  };

  React.useEffect(() => {
    // console.log('currentTags', currentTags);
  }, [currentTags]);

  React.useEffect(() => {
    if (showNewInput) {
      setSelectedTag(noSelectedTag);
    }
  }, [showNewInput]);

  // React.useEffect(() => {}, []);

  return (
    <Container>
      <CloseIconContainer>
        <TouchableOpacity onPress={onClose}>
          <CloseIcon source={IMAGES.CLOSE_ICON} />
        </TouchableOpacity>
      </CloseIconContainer>
      <Content>
        <TitleBlock>
          <Title>tags</Title>
        </TitleBlock>
        <AddTagBlock>
          {!showNewInput ? (
            <TouchableOpacity onPress={() => setShowNewInput(true)}>
              <AddIcon source={IMAGES.ADD_EVENT_ICON} />
            </TouchableOpacity>
          ) : (
            <CenteredView>
              <Input
                initialValue=""
                placeholder="new tag name"
                onSubmit={(text) => addNewTag(text)}
                autoFocus={true}
                maxLength={18}
                onBlur={() => setShowNewInput(false)}
              />
            </CenteredView>
          )}
        </AddTagBlock>
        <CenteredView>
          <Label>saved tags:</Label>
          <TagsBlock>{renderTags(currentTags)}</TagsBlock>
          {showTagEdits && (
            <CenteredView>
              <TagNameEdit>
                <Input
                  initialValue={''}
                  clearInputOnSubmit={true}
                  placeholder={selectedTag.name}
                  onSubmit={(newTagName) => changeTagName(newTagName)}
                  maxLength={18}
                />
              </TagNameEdit>
              <CenteredView>
                <TagSwatchRow>{renderTagSwatchesFirstRow()}</TagSwatchRow>
                <TagSwatchRow>{renderTagSwatchesSecondRow()}</TagSwatchRow>
              </CenteredView>
            </CenteredView>
          )}
        </CenteredView>
      </Content>
      <ButtonContainer>
        <TouchableOpacity onPress={() => handleSaveChanges()}>
          <Button label="save changes" />
        </TouchableOpacity>
        {/* {showTagEdits && (
          <TouchableOpacity onPress={() => deleteTag()}>
            <Button type="delete" label="delete tag" />
          </TouchableOpacity>
        )} */}
      </ButtonContainer>
    </Container>
  );
};

export default TagMgmtModal;

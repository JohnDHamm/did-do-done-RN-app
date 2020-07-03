import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Block, Container, Toggle } from './DevSettings.styles';
import Button from '../Button/Button';
import { StoreUtils } from '../../utils';
import { mockSavedEvents } from '../../mocks/mockSavedEvents';
import { mockSavedTags } from '../../mocks/mockSavedTags';
import { EventsContext, TagsContext } from '../../contexts';
import { saveData } from '../../functions';

const DevSettings: React.FC = () => {
  const [showSettings, setShowSettings] = React.useState<boolean>(false);
  const { setCurrentEvents } = React.useContext<EventsContextInterface>(
    EventsContext
  );
  const { setCurrentTags } = React.useContext<TagsContextInterface>(
    TagsContext
  );

  const removeAll = () => {
    StoreUtils.removeStore('TagsStore').then(() =>
      StoreUtils.removeStore('EventsStore')
    );
  };

  const addMocks = () => {
    StoreUtils.removeStore('TagsStore')
      .then(() => StoreUtils.removeStore('EventsStore'))
      .then(() => saveData('TagsStore', mockSavedTags, setCurrentTags))
      .then(() => saveData('EventsStore', mockSavedEvents, setCurrentEvents));
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => setShowSettings(!showSettings)}>
        <Toggle>DEV</Toggle>
      </TouchableOpacity>
      {showSettings ? (
        <View>
          {/* <Block>
            <TouchableOpacity
              onPress={() => StoreUtils.removeStore('TagsStore')}
            >
              <Button label="remove Tags store" type="alt" />
            </TouchableOpacity>
          </Block>
          <Block>
            <TouchableOpacity
              onPress={() => StoreUtils.removeStore('EventsStore')}
            >
              <Button label="remove Events store" type="alt" />
            </TouchableOpacity>
          </Block> */}
          <Block>
            <TouchableOpacity onPress={() => addMocks()}>
              <Button label="reset mock events and tags" type="alt" />
            </TouchableOpacity>
          </Block>
          <Block>
            <TouchableOpacity onPress={() => removeAll()}>
              <Button label="remove all events and tags" type="alt" />
            </TouchableOpacity>
          </Block>
        </View>
      ) : null}
    </Container>
  );
};

export default DevSettings;

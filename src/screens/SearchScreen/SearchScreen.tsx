import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, StyledText } from './SearchScreen.styles';
import { Tag } from '../../components';
import { mockSavedTags } from '../../mocks/mockSavedTags';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderTags = (tags: Tag[]) => {
    return tags.map((tag) => (
      <Tag key={tag.name} label={tag.name} color={tag.color} selected={true} />
    ));
  };

  return (
    <Container>
      <StyledText>Did? Do. Done!</StyledText>
      <Tag label="car" color="navy" selected={false} />
      {renderTags(mockSavedTags)}
      <Button title="event" onPress={() => navigation.navigate('Event')} />
      <Button
        title="recurring events"
        onPress={() => navigation.navigate('Recurring')}
      />
    </Container>
  );
};

export default SearchScreen;

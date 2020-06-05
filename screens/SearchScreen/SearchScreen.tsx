import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, StyledText } from './SearchScreen.styles';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StyledText>Did? Do. Done!</StyledText>
      <Button title="event" onPress={() => navigation.navigate('Event')} />
      <Button
        title="recurring events"
        onPress={() => navigation.navigate('Recurring')}
      />
    </Container>
  );
};

export default SearchScreen;

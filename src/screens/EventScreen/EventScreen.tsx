import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, StyledText } from './EventScreen.styles';

const EventScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StyledText>event</StyledText>
      <Button title="done" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default EventScreen;

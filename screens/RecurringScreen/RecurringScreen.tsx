import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, StyledText } from './RecurringScreen.styles';

const RecurringScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StyledText>recurring events</StyledText>
      <Button title="event" onPress={() => navigation.navigate('Event')} />
    </Container>
  );
};

export default RecurringScreen;

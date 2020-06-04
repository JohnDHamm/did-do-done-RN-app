import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyledText } from './App.styles';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StyledText>Did? Do. Done!</StyledText>
    </View>
  );
}

const BADASS = '#bada55';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BADASS,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

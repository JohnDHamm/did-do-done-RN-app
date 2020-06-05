import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventScreen, RecurringScreen, SearchScreen } from './src/screens';
import { useFonts } from '@use-expo/font';

declare global {
  type RootStackParamList = {
    Search: undefined;
    Event: undefined;
    Recurring: undefined;
  };
}

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ title: 'Did? Do. Done!' }}
          />
          <Stack.Screen
            name="Event"
            component={EventScreen}
            options={{ title: 'event' }}
          />
          <Stack.Screen
            name="Recurring"
            component={RecurringScreen}
            options={{ title: 'recurring events', headerBackTitle: 'search' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;

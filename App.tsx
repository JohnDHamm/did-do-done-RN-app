import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventScreen, RecurringScreen, SearchScreen } from './screens';

declare global {
  type RootStackParamList = {
    Search: undefined;
    Event: undefined;
    Recurring: undefined;
  };
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
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

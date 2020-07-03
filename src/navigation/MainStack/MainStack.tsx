import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { FONTS, COLORS } from '../../styles';
import { SearchScreen, EventScreen, RecurringScreen } from '../../screens';
import { ThemeContext } from 'styled-components';

declare global {
  type MainStackParamList = {
    Search: undefined;
    Event: { event: SavedEvent };
    Recurring: undefined;
  };

  type EventScreenRouteProp = RouteProp<MainStackParamList, 'Event'>;

  type EventScreenNavigationProp = StackNavigationProp<
    MainStackParamList,
    'Event'
  >;
}

const Stack = createStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
          shadowColor: theme.background,
        },
        headerTitleStyle: {
          fontFamily: FONTS.PRIMARY,
          fontSize: 24,
        },
        headerTintColor: theme.purple,
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{ title: 'Done!', headerBackTitle: 'Back' }}
      />
      <Stack.Screen
        name="Recurring"
        component={RecurringScreen}
        options={{ title: 'Do again.', headerBackTitle: 'Search' }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

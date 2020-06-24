import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { EventsContext, TagsContext } from './src/contexts';
import { useEvents, useTags } from './src/hooks';
import { EventScreen, RecurringScreen, SearchScreen } from './src/screens';
import { useFonts } from '@use-expo/font';
import { FONTS, COLORS } from './src/styles';

declare global {
  type RootStackParamList = {
    Search: undefined;
    Event: { event: SavedEvent };
    Recurring: undefined;
  };

  type EventScreenRouteProp = RouteProp<RootStackParamList, 'Event'>;

  type EventScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Event'
  >;
}

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  const events = useEvents();
  const tags = useTags();

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
      <EventsContext.Provider value={events}>
        <TagsContext.Provider value={tags}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Search"
              screenOptions={{
                headerTitleStyle: {
                  fontFamily: FONTS.PRIMARY,
                  fontSize: 24,
                },
                headerTintColor: COLORS.PRIMARY_PURPLE,
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
                options={{ title: 'Event', headerBackTitle: 'Back' }}
              />
              <Stack.Screen
                name="Recurring"
                component={RecurringScreen}
                options={{ title: 'Do again', headerBackTitle: 'Search' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </TagsContext.Provider>
      </EventsContext.Provider>
    );
  }
};

export default App;

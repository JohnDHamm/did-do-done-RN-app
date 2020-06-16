import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventScreen, RecurringScreen, SearchScreen } from './src/screens';
import { useFonts } from '@use-expo/font';
import { FONTS, COLORS } from './src/styles';

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
    );
  }
};

export default App;

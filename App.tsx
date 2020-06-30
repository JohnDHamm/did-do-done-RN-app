import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { EventsContext, TagsContext, ThemeContext } from './src/contexts';
import { useEvents, useTags, useTheme } from './src/hooks';
import { ThemeProvider } from 'styled-components/native';
import { EventScreen, RecurringScreen, SearchScreen } from './src/screens';
import { useFonts } from '@use-expo/font';
import { FONTS, COLORS, darkTheme, lightTheme } from './src/styles';

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

interface HeaderStyle {
  backgroundColor: string;
  shadowColor: string;
}

const getBgColor = (colorScheme: ThemeMode): string => {
  return colorScheme === 'light'
    ? lightTheme.theme.background
    : darkTheme.theme.background;
};

const App = (): JSX.Element => {
  const events = useEvents();
  const tags = useTags();
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const [themeState, setThemeState] = React.useState<ThemeMode>(
    colorScheme || 'light'
  );
  const [headerStyle, setHeaderStyle] = React.useState<HeaderStyle>({
    backgroundColor: '',
    shadowColor: '',
  });

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  React.useEffect(() => {
    if (colorScheme) {
      setThemeState(colorScheme);
      setHeaderStyle({
        backgroundColor: getBgColor(colorScheme),
        shadowColor: getBgColor(colorScheme),
      });
    }
  }, [colorScheme]);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts</Text>
      </View>
    );
  } else {
    return (
      <ThemeContext.Provider value={theme}>
        <ThemeProvider
          theme={themeState === 'light' ? lightTheme.theme : darkTheme.theme}
        >
          <EventsContext.Provider value={events}>
            <TagsContext.Provider value={tags}>
              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName="Search"
                  screenOptions={{
                    headerStyle: headerStyle,
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
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
};

export default App;

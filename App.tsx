import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventsContext, TagsContext, ThemeContext } from './src/contexts';
import { useEvents, useTags, useTheme } from './src/hooks';
import { ThemeProvider } from 'styled-components/native';
import { SplashScreen } from './src/screens';
import { MainStack } from './src/navigation';
import { darkTheme, lightTheme } from './src/styles';

const RootStack = createStackNavigator();

const App = (): JSX.Element => {
  const events = useEvents();
  const tags = useTags();
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const [themeState, setThemeState] = React.useState<ThemeMode>(
    colorScheme || 'light'
  );

  React.useEffect(() => {
    if (colorScheme) {
      setThemeState(colorScheme);
    }
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider
        theme={themeState === 'light' ? lightTheme.theme : darkTheme.theme}
      >
        <StatusBar
          barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
        />
        <EventsContext.Provider value={events}>
          <TagsContext.Provider value={tags}>
            <NavigationContainer>
              <RootStack.Navigator
                initialRouteName="Splash"
                headerMode="none"
                mode="modal"
              >
                <RootStack.Screen name="Splash" component={SplashScreen} />
                <RootStack.Screen name="Main" component={MainStack} />
              </RootStack.Navigator>
            </NavigationContainer>
          </TagsContext.Provider>
        </EventsContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { Container } from './SplashScreen.styles';
import { LAYOUT } from '../../styles';
import { getStoreData } from '../../functions';
import { EventsContext, TagsContext } from '../../contexts';
import LottieView from 'lottie-react-native';

const SplashScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('../../../assets/fonts/Lobster-Regular.ttf'),
  });

  const { setCurrentEvents } = React.useContext<EventsContextInterface>(
    EventsContext
  );
  const { setCurrentTags } = React.useContext<TagsContextInterface>(
    TagsContext
  );
  const [dataLoadTime, setDataLoadTime] = React.useState<number>();
  const [dataIsLoading, setDataIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (fontsLoaded) {
      if (dataLoadTime && !dataIsLoading) {
        if (dataLoadTime > 2500) {
          navigation.navigate('Main');
        } else {
          setTimeout(() => {
            navigation.navigate('Main');
          }, 2500 - dataLoadTime);
        }
      }
    }
  }, [dataLoadTime, dataIsLoading, fontsLoaded]);

  React.useEffect(() => {
    const startTime = new Date().getTime();
    getStoreData('TagsStore', setCurrentTags)
      .then(() => getStoreData('EventsStore', setCurrentEvents))
      .then(() => {
        const elapsedTime = new Date().getTime() - startTime;
        setDataLoadTime(elapsedTime);
        setDataIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <LottieView
        autoPlay
        loop={false}
        style={{ width: width * LAYOUT.LOGO_WIDTH_SCALE }}
        source={require('../../../assets/lottie_animations/splash_logo.json')}
      />
    </Container>
  );
};

export default SplashScreen;

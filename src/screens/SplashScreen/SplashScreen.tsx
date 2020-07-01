import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { Container } from './SplashScreen.styles';
import { AppTitle } from '../../components';
import { COLORS } from '../../styles';
import { getStoreData } from '../../functions';
import { EventsContext, TagsContext } from '../../contexts';

const SplashScreen: React.FC = () => {
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
    if (dataLoadTime && !dataIsLoading) {
      if (dataLoadTime > 2000) {
        navigation.navigate('Main');
      } else {
        setTimeout(() => {
          navigation.navigate('Main');
        }, 2000 - dataLoadTime);
      }
    }
  }, [dataLoadTime, dataIsLoading]);

  React.useEffect(() => {
    const startTime = new Date().getTime();
    getStoreData('TagsStore', setCurrentTags)
      .then(() => getStoreData('EventsStore', setCurrentEvents))
      .then(() => {
        const elapsedTime = new Date().getTime() - startTime;
        console.log('elapsedTime', elapsedTime);
        setDataLoadTime(elapsedTime);
        setDataIsLoading(false);
      });
  }, []);

  return (
    <Container>{fontsLoaded && <AppTitle color={COLORS.WHITE} />}</Container>
  );
};

export default SplashScreen;

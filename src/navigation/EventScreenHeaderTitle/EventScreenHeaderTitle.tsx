import React from 'react';
import { Image } from 'react-native';
import IMAGES from '../../../assets/images';

const EventScreenHeaderTitle: React.FC = (): JSX.Element => {
  const headerWidth = 60;
  return (
    <Image
      style={{
        width: headerWidth,
        height: headerWidth / IMAGES.EVENT_SCREEN_NAV_HEADER_ASPECT,
      }}
      source={IMAGES.EVENT_SCREEN_NAV_HEADER}
    />
  );
};

export default EventScreenHeaderTitle;

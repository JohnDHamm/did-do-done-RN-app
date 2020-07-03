import React from 'react';
import { StyledImage } from './Logo.styles';
import IMAGES from '../../../assets/images';

interface Props {
  color: string;
  width: number;
}

const Logo: React.FC<Props> = ({ color, width }) => {
  return (
    <StyledImage
      source={IMAGES.LOGO}
      color={color}
      width={width}
      height={width / IMAGES.LOGO_ASPECT}
    />
  );
};

export default Logo;

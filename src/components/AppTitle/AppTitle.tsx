import React from 'react';
import { Title } from './AppTitle.styles';

interface Props {
  color?: string;
}

const AppTitle: React.FC<Props> = ({ color }) => (
  <Title color={color}>Did? Do. Done!</Title>
);

export default AppTitle;

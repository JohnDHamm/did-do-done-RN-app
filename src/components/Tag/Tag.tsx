import React from 'react';
import { Container, Label } from './Tag.styles';
import { StyleProp, ViewStyle } from 'react-native';

interface TagProps {
  label: string;
  color: string;
  selected: boolean;
  extraStyles?: StyleProp<ViewStyle>;
}

const Tag: React.FC<TagProps> = ({ label, color, selected, extraStyles }) => {
  return (
    <Container color={color} selected={selected} style={extraStyles}>
      <Label selected={selected}>{label}</Label>
    </Container>
  );
};

export default Tag;

import React from 'react';
import { Container, Label } from './Tag.styles';

interface TagProps {
  label: string;
  color: string;
  selected: boolean;
}

const Tag: React.FC<TagProps> = ({ label, color, selected }) => {
  return (
    <Container color={color} selected={selected}>
      <Label selected={selected}>{label}</Label>
    </Container>
  );
};

export default Tag;

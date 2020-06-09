import React from 'react';
import { Container, Label } from './Button.styles';
import { COLORS } from '../../styles';

interface ButtonProps {
  label: string;
  type?: 'regular' | 'alt' | 'delete';
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'regular',
}: ButtonProps) => {
  let backgroundColor = COLORS.PRIMARY_PURPLE;
  let borderColor = COLORS.PRIMARY_PURPLE;
  let labelColor = COLORS.WHITE;

  switch (type) {
    case 'alt':
      backgroundColor = COLORS.WHITE;
      labelColor = COLORS.PRIMARY_PURPLE;
      break;
    case 'delete':
      backgroundColor = COLORS.WHITE;
      borderColor = COLORS.MISSED_RED;
      labelColor = COLORS.MISSED_RED;
      break;
  }
  return (
    <Container color={backgroundColor} border={borderColor}>
      <Label labelColor={labelColor}>{label}</Label>
    </Container>
  );
};

export default Button;

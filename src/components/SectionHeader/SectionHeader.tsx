import React from 'react';
import { Container, HeaderText } from './SectionHeader..styles';
import { COLORS } from '../../styles';

interface SectionHeaderProps {
  text: string;
  color?: string;
  textColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  color = COLORS.PRIMARY_GRAY,
  text,
  textColor = COLORS.PRIMARY_PURPLE,
}: SectionHeaderProps) => {
  return (
    <Container color={color}>
      <HeaderText textColor={textColor}>{text}</HeaderText>
    </Container>
  );
};

export default SectionHeader;

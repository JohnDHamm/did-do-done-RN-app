import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Badge = styled.View<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;

export const BadgeNumber = styled.Text`
  font-family: ${FONTS.PRIMARY};
  font-size: 20px;
  color: ${COLORS.WHITE};
`;

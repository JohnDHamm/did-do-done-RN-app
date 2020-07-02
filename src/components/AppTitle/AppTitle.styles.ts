import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Title = styled.Text<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : COLORS.PRIMARY_PURPLE)};
  font-family: ${FONTS.PRIMARY};
  font-size: 40px;
`;

import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  align-items: center;
`;

export const Toggle = styled.Text<Theme>`
  color: ${(props) => props.theme.text};
`;

export const Block = styled.View`
  padding: 20px;
`;

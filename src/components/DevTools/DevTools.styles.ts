import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  align-items: center;
`;

export const Toggle = styled.Text<Theme>`
  color: ${(props) => props.theme.text};
  border: 2px dotted red;
  border-radius: 4px;
  padding: 3px 10px;
`;

export const Block = styled.View`
  padding: 20px;
`;

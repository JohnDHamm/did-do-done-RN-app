import styled from 'styled-components/native';
import { FONTS } from '../../styles';

export const Title = styled.Text<Theme & { color?: string }>`
  color: ${(props) => (props.color ? props.color : props.theme.purple)};
  font-family: ${FONTS.PRIMARY};
  font-size: 40px;
`;

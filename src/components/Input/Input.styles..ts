import styled from 'styled-components/native';
import { FONTS } from '../../styles';

export const Container = styled.View`
  align-self: stretch;
`;
export const StyledInput = styled.TextInput<Theme>`
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  color: ${(props) => props.theme.purple};
`;

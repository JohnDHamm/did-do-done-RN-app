import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.PRIMARY_PURPLE};
`;

export const StyledText = styled.Text`
  color: white;
  font-size: 30px;
`;

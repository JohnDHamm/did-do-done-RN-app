import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${COLORS.WHITE};
  padding-bottom: 30px;
`;

export const ListSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${COLORS.LIGHT_GRAY};
`;

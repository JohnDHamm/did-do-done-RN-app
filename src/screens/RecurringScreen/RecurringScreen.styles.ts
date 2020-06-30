import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const Container = styled.View<Theme>`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  padding-bottom: 30px;
`;

export const ListSeparator = styled.View<Theme>`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.cardSeparator};
`;

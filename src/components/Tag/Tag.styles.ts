import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const Container = styled.View<{ color: string; selected: boolean }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.selected ? props.color : COLORS.PRIMARY_GRAY};
  background-color: ${(props) => (props.selected ? props.color : COLORS.WHITE)};
  height: 24px;
  border-radius: 12px;
  padding: 0 10px;
`;

export const Label = styled.Text<{ selected: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.selected ? COLORS.WHITE : COLORS.PRIMARY_GRAY)};
`;

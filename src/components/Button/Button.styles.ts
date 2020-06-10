import styled from 'styled-components/native';
import { FONTS } from '../../styles';

export const Container = styled.View<{ color: string; border: string }>`
  padding: 3px 36px;
  align-items: center;
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.border};
  border-radius: 5px;
  border-width: 2px;
`;

export const Label = styled.Text<{ labelColor: string }>`
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  color: ${(props) => props.labelColor};
`;

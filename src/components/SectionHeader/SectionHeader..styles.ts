import styled from 'styled-components/native';
import { FONTS } from '../../styles';

export const Container = styled.View<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 100%;
  padding: 5px 0;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text<{ textColor: string }>`
  font-family: ${FONTS.PRIMARY};
  font-size: 24px;
  color: ${(props) => props.textColor};
`;

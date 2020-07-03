import styled from 'styled-components/native';
import { FONTS } from '../../styles';

export const Container = styled.View<Theme>`
  flex-direction: row;
  align-self: stretch;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  margin: 10px 16px;
  padding-left: 10px;
  padding-right: 4px;
  border-width: 1px;
  border-color: ${(props) => props.theme.purple};
  border-radius: 24px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled.Image<Theme>`
  width: 24px;
  height: 24px;
  tint-color: ${(props) => props.theme.purple};
`;

export const Input = styled.TextInput<Theme>`
  font-family: ${FONTS.PRIMARY};
  font-size: 24px;
  color: ${(props) => props.theme.purple};
  margin-left: 14px;
`;

export const CloseIcon = styled.Image<Theme>`
  width: 12px;
  height: 12px;
  margin: 12px;
  tint-color: ${(props) => props.theme.purple};
`;

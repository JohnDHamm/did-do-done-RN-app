import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  align-self: stretch;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  margin: 10px 16px;
  padding-left: 10px;
  padding-right: 4px;
  border-width: 1px;
  border-color: ${COLORS.PRIMARY_PURPLE};
  border-radius: 24px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
export const Input = styled.TextInput`
  font-family: ${FONTS.PRIMARY};
  font-size: 24px;
  color: ${COLORS.PRIMARY_PURPLE};
  margin-left: 14px;
`;

export const CloseIcon = styled.Image`
  width: 12px;
  height: 12px;
  margin: 12px;
`;

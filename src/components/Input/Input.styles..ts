import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  /* flex-direction: row; */
  align-self: stretch;
  /* height: 48px; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* margin: 10px 16px; */
  /* padding-left: 10px; */
  /* padding-right: 4px; */
  /* border-width: 1px; */
  /* border-color: ${COLORS.PRIMARY_PURPLE}; */
  /* border-radius: 24px; */
`;
export const StyledInput = styled.TextInput`
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  color: ${COLORS.PRIMARY_PURPLE};
  /* margin-left: 14px; */
`;

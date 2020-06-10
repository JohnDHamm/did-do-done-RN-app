import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
`;

export const StyledText = styled.Text`
  color: ${COLORS.PRIMARY_PURPLE};
  font-family: ${FONTS.PRIMARY};
  font-size: 40px;
`;

export const TagsBlock = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  border-width: 1px;
  border-color: ${COLORS.LIGHT_GRAY};
  padding: 5px 0;
`;

export const AddIcon = styled.Image`
  margin: 10px 0;
  width: 36px;
  height: 36px;
`;

import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 16px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 30px;
  background-color: ${COLORS.WHITE};
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.PRIMARY_GRAY};
  font-size: 22px;
`;

export const TagsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TagsBlock = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const RecurBlock = styled.View``;

export const ButtonSection = styled(Section)`
  align-items: center;
`;

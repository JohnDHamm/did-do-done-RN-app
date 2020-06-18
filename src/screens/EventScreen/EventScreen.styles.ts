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

export const NotesHeader = styled.Text`
  font-size: 14px;
`;

const Row = styled.View`
  flex-direction: row;
`;

export const TagsRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;
export const TagsBlock = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const RecurBlock = styled.View`
  align-items: center;
`;

export const RecurRow = styled(Row)`
  align-items: flex-end;
`;

const RecurText = styled.Text`
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.PRIMARY_PURPLE};
`;
export const RecurDateText = styled(RecurText)`
  font-size: 26px;
`;
export const RecurFreqText = styled(RecurText)`
  font-size: 22px;
`;

export const ButtonSection = styled(Section)`
  margin-top: 20px;
  padding-bottom: 30px;
  align-items: center;
`;

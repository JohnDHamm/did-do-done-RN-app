import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.ScrollView<Theme>`
  flex: 1;
  padding-top: 16px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 30px;
  background-color: ${(props) => props.theme.background};
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text<Theme>`
  font-family: ${FONTS.PRIMARY};
  color: ${(props) => props.theme.label};
  font-size: 22px;
`;

export const NotesHeader = styled.Text<Theme>`
  font-size: 14px;
  color: ${(props) => props.theme.notesLabel};
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

const RecurText = styled.Text<Theme>`
  font-family: ${FONTS.PRIMARY};
  color: ${(props) => props.theme.purple};
`;

export const RecurDateText = styled(RecurText)<Theme & { isPast: boolean }>`
  color: ${(props) => (props.isPast ? COLORS.MISSED_RED : props.theme.purple)};
  font-size: 26px;
`;

export const RecurFreqText = styled(RecurText)`
  font-size: 22px;
`;

export const ButtonSection = styled(Section)`
  margin-top: 20px;
  align-items: center;
`;

export const DeleteBtnContainer = styled.View`
  margin-top: 10px;
`;

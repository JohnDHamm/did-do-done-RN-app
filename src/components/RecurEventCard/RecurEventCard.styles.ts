import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 8px 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TopRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const Name = styled.Text`
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  color: ${COLORS.PRIMARY_PURPLE};
`;

export const Date = styled.Text`
  font-size: 22px;
  color: ${COLORS.BLACK};
`;

export const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const RecurMsg = styled.Text`
  font-family: ${FONTS.PRIMARY};
  font-size: 18px;
  color: ${COLORS.PRIMARY_PURPLE};
  padding-left: 6px;
`;

export const Notes = styled.Text`
  font-size: 14px;
  color: ${COLORS.BLACK};
  padding-top: 6px;
`;

export const TagsRow = styled(Row)`
  padding-top: 6px;
`;

export const MissedMsg = styled.Text`
  font-family: ${FONTS.PRIMARY};
  font-size: 18px;
  color: ${COLORS.MISSED_RED};
`;

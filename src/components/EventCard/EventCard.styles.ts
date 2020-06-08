import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 8px 14px;
  border-top-width: 1px;
  border-top-color: ${COLORS.LIGHT_GRAY};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_GRAY};
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
`;

export const TopRow = styled(Row)`
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  color: ${COLORS.PRIMARY_PURPLE};
`;

export const Date = styled.Text`
  font-size: 20px;
  color: ${COLORS.BLACK};
`;

export const RecurRow = styled(Row)`
  padding-top: 6px;
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
export const RecurDate = styled.Text`
  font-size: 16px;
  color: ${COLORS.BLACK};
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

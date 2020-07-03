import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 8px 16px;
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

export const Name = styled.Text<Theme>`
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  color: ${(props) => props.theme.purple};
`;

export const Date = styled.Text<Theme>`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const RecurRow = styled(Row)`
  padding-top: 6px;
`;

export const Icon = styled.Image<Theme>`
  width: 16px;
  height: 16px;
  tint-color: ${(props) => props.theme.purple};
`;

export const RecurMsg = styled.Text<Theme>`
  font-family: ${FONTS.PRIMARY};
  font-size: 18px;
  color: ${(props) => props.theme.purple};
  padding-left: 6px;
`;

export const RecurDate = styled.Text<Theme>`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  padding-left: 6px;
`;

export const Notes = styled.Text<Theme>`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  padding-top: 6px;
`;

export const TagsRow = styled(Row)`
  padding-top: 6px;
`;

import styled from 'styled-components/native';
import { FONTS } from '../../styles';

export const Block = styled.View`
  align-items: center;
`;
export const Header = styled.Text<Theme>`
  font-family: ${FONTS.PRIMARY};
  font-size: 20px;
  color: ${(props) => props.theme.purple};
`;

export const MinRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const BadgeContainer = styled.View`
  padding-left: 10px;
`;

export const BadgeLabel = styled.Text<{ color: string }>`
  color: ${(props) => props.color};
  font-family: ${FONTS.PRIMARY};
  font-size: 22px;
  padding-left: 8px;
`;

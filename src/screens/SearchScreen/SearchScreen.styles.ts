import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View<
  Theme & {
    isSearching: boolean;
    hasEvents: boolean;
  }
>`
  flex: 1;
  justify-content: ${(props) => (props.hasEvents ? 'space-between' : 'center')};
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding-top: ${(props) => (props.isSearching ? '0px' : '40px')};
  padding-bottom: 40px;
`;

export const SearchBlock = styled.View`
  width: 100%;
  align-items: center;
`;

export const TagsBlock = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const AddIcon = styled.Image<Theme>`
  margin: 30px 0;
  width: 36px;
  height: 36px;
  tint-color: ${(props) => props.theme.purple};
`;

export const ResultsBlock = styled.View`
  width: 100%;
  margin-top: 12px;
  flex: 1;
  justify-content: flex-start;
`;

export const EmptyMessage = styled.Text`
  padding: 20px;
  color: ${COLORS.PRIMARY_GRAY};
  font-size: 16px;
  text-align: center;
`;

export const ListSeparator = styled.View<Theme>`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.cardSeparator};
`;

export const HeaderAddIcon = styled.Image<Theme>`
  margin-right: 16px;
  width: 24px;
  height: 24px;
  tint-color: ${(props) => props.theme.purple};
`;

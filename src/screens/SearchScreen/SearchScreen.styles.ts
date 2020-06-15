import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.View<{ isSearching: boolean }>`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.WHITE};
  padding-top: ${(props) => (props.isSearching ? '0px' : '40px')};
  padding-bottom: 40px;
`;

export const StyledText = styled.Text`
  color: ${COLORS.PRIMARY_PURPLE};
  font-family: ${FONTS.PRIMARY};
  font-size: 40px;
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

export const AddIcon = styled.Image`
  margin: 10px 0;
  width: 36px;
  height: 36px;
`;

export const ResultsBlock = styled.View`
  width: 100%;
  margin-top: 12px;
  flex: 1;
  justify-content: flex-start;
`;

export const ResultsView = styled.ScrollView``;

export const EmptyMessage = styled.Text`
  padding: 10px;
  color: ${COLORS.PRIMARY_GRAY};
  font-size: 16px;
  text-align: center;
`;

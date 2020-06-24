import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${COLORS.WHITE};
`;

export const CloseIconContainer = styled.View`
  height: 60px;
  width: 100%;
  align-items: flex-end;
  padding-top: 10px;
  margin-right: 30px;
`;

export const CloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const SelectedIcon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TitleBlock = styled.View`
  background-color: ${COLORS.PRIMARY_PURPLE};
  border-radius: 20px;
  height: 40px;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${FONTS.PRIMARY};
  font-size: 30px;
  color: ${COLORS.WHITE};
`;

export const AddTagBlock = styled.View`
  height: 100px;
  justify-content: center;
`;

export const AddIcon = styled.Image`
  width: 36px;
  height: 36px;
`;

export const ErrorMsg = styled.Text`
  color: ${COLORS.MISSED_RED};
  font-size: 14px;
`;

export const CenteredView = styled.View`
  align-items: center;
`;

export const TagNameEdit = styled(CenteredView)`
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const Label = styled.Text`
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.PRIMARY_GRAY};
  font-size: 22px;
`;

export const TagsBlock = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const SelectedTag = styled.View<{ selected: boolean }>`
  border-width: ${(props) => (props.selected ? '2px' : 0)};
  border-color: ${COLORS.PRIMARY_PURPLE};
  border-radius: 22px;
`;

export const TagSwatchRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TagSwatch = styled.View<{ color: string }>`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export const ButtonContainer = styled.View`
  flex: 0.15;
  justify-content: space-between;
`;

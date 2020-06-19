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
export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const CenteredView = styled.View`
  align-items: center;
`;

const ModalText = styled.Text`
  font-family: ${FONTS.PRIMARY};
`;

export const StyledText = styled(ModalText)`
  font-size: 22px;
  color: ${COLORS.PRIMARY_GRAY};
`;

export const StyledInput = styled.TextInput`
  font-family: ${FONTS.PRIMARY};
  font-size: 42px;

  color: ${COLORS.PRIMARY_PURPLE};
`;

export const StyledPicker = styled.Picker`
  width: 100%;
`;

export const RecurDate = styled(ModalText)`
  font-size: 26px;
  color: ${COLORS.PRIMARY_PURPLE};
`;

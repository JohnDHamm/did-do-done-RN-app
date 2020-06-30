import React from 'react';
import { Container, StyledInput } from './Input.styles.';
import { ThemeContext } from 'styled-components';

interface InputProps {
  autoFocus?: boolean;
  clearInputOnSubmit?: boolean;
  initialValue: string;
  onBlur?: () => void;
  onSubmit: (text: string) => void;
  placeholder: string;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  autoFocus = false,
  clearInputOnSubmit = false,
  initialValue,
  maxLength,
  onBlur,
  onSubmit,
  placeholder,
}) => {
  const theme = React.useContext(ThemeContext);
  const [inputText, setInputText] = React.useState<string>(initialValue);

  const handleSubmit = () => {
    onSubmit(inputText);
    if (clearInputOnSubmit) setInputText('');
  };

  return (
    <Container>
      <StyledInput
        value={inputText}
        onChangeText={(text: string) => setInputText(text)}
        placeholder={placeholder}
        blurOnSubmit={true}
        onBlur={onBlur}
        onSubmitEditing={() => handleSubmit()}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholderTextColor={theme.placeholderText}
      />
    </Container>
  );
};

export default Input;

import React from 'react';
import { Container, StyledInput } from './Input.styles.';

interface InputProps {
  autoFocus?: boolean;
  initialValue: string;
  onSubmit: (text: string) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  autoFocus = false,
  initialValue,
  onSubmit,
  placeholder,
}) => {
  const [inputText, setInputText] = React.useState<string>(initialValue);

  const handleSubmit = () => {
    onSubmit(inputText);
  };

  return (
    <Container>
      <StyledInput
        value={inputText}
        onChangeText={(text: string) => setInputText(text)}
        placeholder={placeholder}
        blurOnSubmit={true}
        onSubmitEditing={() => handleSubmit()}
        autoFocus={autoFocus}
      />
    </Container>
  );
};

export default Input;

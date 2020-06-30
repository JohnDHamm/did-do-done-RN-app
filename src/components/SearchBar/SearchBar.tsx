import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  CloseIcon,
  Container,
  Input,
  SearchIcon,
  LeftSide,
} from './SearchBar.styles.';
import IMAGES from '../../../assets/images';
import { ThemeContext } from 'styled-components';

interface SearchBarProps {
  onSubmit: (text: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, onClear }) => {
  const theme = React.useContext(ThemeContext);
  const [inputText, setInputText] = React.useState<string>('');

  const handleClear = () => {
    setInputText('');
    onSubmit('');
    onClear();
  };

  const handleSubmit = () => {
    onSubmit(inputText);
  };

  return (
    <Container>
      <LeftSide>
        <SearchIcon source={IMAGES.SEARCH_ICON} />
        <Input
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="when did I...?"
          blurOnSubmit={true}
          onSubmitEditing={() => handleSubmit()}
          placeholderTextColor={theme.placeholderText}
        />
      </LeftSide>
      <TouchableOpacity onPress={() => handleClear()}>
        <CloseIcon source={IMAGES.CLOSE_ICON} />
      </TouchableOpacity>
    </Container>
  );
};

export default SearchBar;

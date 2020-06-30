import styled from 'styled-components/native';

export const Container = styled.View<
  Theme & { color: string; selected: boolean }
>`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.selected ? props.color : props.theme.unselectedTag};
  background-color: ${(props) =>
    props.selected ? props.color : 'transparent'};
  height: 24px;
  border-radius: 12px;
  padding: 0 10px;
`;

export const Label = styled.Text<Theme & { selected: boolean }>`
  font-size: 16px;
  color: ${(props) =>
    props.selected ? props.theme.tagText : props.theme.unselectedTag};
`;

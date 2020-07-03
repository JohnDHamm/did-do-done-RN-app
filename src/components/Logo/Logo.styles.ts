import styled from 'styled-components/native';

export const StyledImage = styled.Image<{
  color: string;
  width: number;
  height: number;
}>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  tint-color: ${(props) => props.color};
`;

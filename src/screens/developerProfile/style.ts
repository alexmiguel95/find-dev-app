import styled from 'styled-components/native';
import defaultTheme from '../../theme/defaultTheme';

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.background};
`;

export {
  Container,
};

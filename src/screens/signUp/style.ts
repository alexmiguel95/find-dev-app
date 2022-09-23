import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import defaultTheme from '../../theme/defaultTheme';

const widthDefaultFieldsAndButtons = Math.round(
  Dimensions.get('window').width - 90
) + 'px';

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.background};
`;

const ContentFieldsButtons = styled.View`
  margin: 6px 0;
`;

const Field = styled.TextInput`
  height: 40px;
  width: ${widthDefaultFieldsAndButtons};
  background-color: #D9D9D9;
  border: 3px solid ${defaultTheme.colors.primary};
  border-radius: 8px;
  padding: 2px 10px;
`;

const ButtonRegister = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthDefaultFieldsAndButtons};
  height: 40px;
  background-color: ${defaultTheme.colors.secondary};
  border-radius: 8px;
  margin-top: 20px;
`;

const TextTitle = styled.Text`
  color: ${defaultTheme.colors.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
`;

const TextBold = styled.Text`
  color: ${defaultTheme.colors.text};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

const TextBoldButton = styled.Text`
  color: ${defaultTheme.colors.text};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

export {
  Container,
  ContentFieldsButtons,
  Field,
  ButtonRegister,
  TextTitle,
  TextBold,
  TextBoldButton,
};
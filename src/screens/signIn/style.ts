import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import defaultTheme from '../../theme/defaultTheme';

const widthDefaultButtons = Math.round(Dimensions.get('window').width - 90) + 'px';

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

const ContentForgotPassword = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: ${widthDefaultButtons};
  margin: 8px 0;
`;

const ContentSocialLogin = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthDefaultButtons};
  margin: 40px 0 0 0;
`;

const Field = styled.TextInput`
  height: 40px;
  width: ${widthDefaultButtons};
  background-color: #D9D9D9;
  border: 3px solid ${defaultTheme.colors.primary};
  border-radius: 8px;
  padding: 2px 10px;
`;

const ButtonLogin = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthDefaultButtons};
  height: 40px;
  background-color: ${defaultTheme.colors.primary};
  border-radius: 8px;
`;

const ButtonRegister = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthDefaultButtons};
  height: 40px;
  background-color: ${defaultTheme.colors.secondary};
  border-radius: 8px;
`;

const ButtonLinkedIn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthDefaultButtons};
  height: 40px;
  background-color: #D9D9D9;
  border-radius: 8px;
`;

const ButtonGitHub = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthDefaultButtons};
  height: 40px;
  background-color: #D9D9D9;
  border-radius: 8px;
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
  ContentForgotPassword,
  ContentSocialLogin,
  Field,
  ButtonLogin,
  ButtonRegister,
  ButtonLinkedIn,
  ButtonGitHub,
  TextBold,
  TextBoldButton,
};
import {
  View,
  Text,
} from 'react-native';

import {
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
} from './style';

const SignIn = () => {
  return (
    <Container>
      <ContentFieldsButtons>
        <TextBold>Email:</TextBold>
        <Field />
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <TextBold>Senha:</TextBold>
        <Field />
      </ContentFieldsButtons>

      <ContentForgotPassword>
        <TextBold>Esqueceu a senha</TextBold>
      </ContentForgotPassword>

      <ContentFieldsButtons>
        <ButtonLogin>
          <TextBoldButton>ENTRAR</TextBoldButton>
        </ButtonLogin>
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <ButtonRegister>
          <TextBoldButton>CADASTRAR</TextBoldButton>
        </ButtonRegister>
      </ContentFieldsButtons>

      <ContentSocialLogin>
        <TextBold>CADASTRO SIMPLIFICADO</TextBold>

        <ContentFieldsButtons>
          <ButtonLinkedIn>
            <TextBoldButton>LINKEDIN</TextBoldButton>
          </ButtonLinkedIn>
        </ContentFieldsButtons>

        <ContentFieldsButtons>
          <ButtonGitHub>
            <TextBoldButton>GITHUB</TextBoldButton>
          </ButtonGitHub>
        </ContentFieldsButtons>
      </ContentSocialLogin>
    </Container>
  );
}

export default SignIn;
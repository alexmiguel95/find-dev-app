import {
  TouchableOpacity,
} from 'react-native';

import LinkedinSvg from '../../assets/icons/linkedin.svg';
import GitHubSvg from '../../assets/icons/github.svg';

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
        <TouchableOpacity
          onPress={() => alert('Esqueceu a senha')}
        >
          <TextBold>Esqueceu a senha</TextBold>
        </TouchableOpacity>
      </ContentForgotPassword>

      <ContentFieldsButtons>
        <ButtonLogin
          onPress={() => alert('Entrar')}
        >
          <TextBoldButton>ENTRAR</TextBoldButton>
        </ButtonLogin>
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <ButtonRegister
          onPress={() => alert('Cadastrar')}
        >
          <TextBoldButton>CADASTRAR</TextBoldButton>
        </ButtonRegister>
      </ContentFieldsButtons>

      <ContentSocialLogin>
        <TextBold>CADASTRO SIMPLIFICADO</TextBold>

        <ContentFieldsButtons>
          <ButtonLinkedIn
            onPress={() => alert('Entrar com LinkedIn')}
          >
            <LinkedinSvg style={{ width: 32, marginRight: 4 }} />
            <TextBoldButton>LINKEDIN</TextBoldButton>
          </ButtonLinkedIn>
        </ContentFieldsButtons>

        <ContentFieldsButtons>
          <ButtonGitHub
            onPress={() => alert('Entrar com GitHub')}
          >
            <GitHubSvg style={{ width: 32, marginRight: 4 }} />
            <TextBoldButton>GITHUB</TextBoldButton>
          </ButtonGitHub>
        </ContentFieldsButtons>
      </ContentSocialLogin>
    </Container>
  );
}

export default SignIn;
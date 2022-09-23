import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

import Loader from '../../components/Loader';

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

interface IUserData {
  email: string;
  password: string;
}

const SignIn = ({ navigation }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: ''
  });

  async function signIn({ email, password }: IUserData) {
    try {
      setIsLoad(true);
      const user = await Auth.signIn(
        email,
        password
      );

      if (user) {
        console.log(`✅ Usuário fez login no sistema.`);
        navigation.navigate('Lista');
        setIsLoad(false);
      }

    } catch (error) {
      console.error(`❌ Erro no login: ${error.message}`);
    }
  }

  return (
    <>
      {
        isLoad ? (
          <Container>
            <Loader />
          </Container >
        ) : (
          <Container>
            <ContentFieldsButtons>
              <TextBold>Email:</TextBold>
              <Field
                onChangeText={value => setUserData({ ...userData, email: value })}
                keyboardType='email-address'
              />
            </ContentFieldsButtons>

            <ContentFieldsButtons>
              <TextBold>Senha:</TextBold>
              <Field
                onChangeText={value => setUserData({ ...userData, password: value })}
                secureTextEntry={true}
                keyboardType='default'
              />
            </ContentFieldsButtons>

            {/*<ContentForgotPassword>
            <TouchableOpacity
              onPress={() => alert('Esqueceu a senha')}
            >
              <TextBold>Esqueceu a senha</TextBold>
            </TouchableOpacity>
          </ContentForgotPassword>*/}

            <ContentFieldsButtons>
              <ButtonLogin
                onPress={() => signIn(userData)}
              >
                <TextBoldButton>ENTRAR</TextBoldButton>
              </ButtonLogin>
            </ContentFieldsButtons>

            <ContentFieldsButtons>
              <ButtonRegister
                onPress={() => navigation.navigate('Cadastrar')}
              >
                <TextBoldButton>CADASTRAR</TextBoldButton>
              </ButtonRegister>
            </ContentFieldsButtons>

            {/*
            <ContentSocialLogin>
              <TextBold>CADASTRO SIMPLIFICADO</TextBold>
    
              <ContentFieldsButtons>
                <ButtonLinkedIn
                  onPress={() => alert('Login Social com LinkedIn')}
                >
                  <LinkedinSvg style={{ width: 32, marginRight: 4 }} />
                  <TextBoldButton>LINKEDIN</TextBoldButton>
                </ButtonLinkedIn>
              </ContentFieldsButtons>
    
              <ContentFieldsButtons>
                <ButtonGitHub
                  onPress={() => alert('Login Social com GitHub')}
                >
                  <GitHubSvg style={{ width: 32, marginRight: 4 }} />
                  <TextBoldButton>GITHUB</TextBoldButton>
                </ButtonGitHub>
              </ContentFieldsButtons>
            </ContentSocialLogin>
          */}
          </Container>
        )
      }
    </>
  );
}

export default SignIn;
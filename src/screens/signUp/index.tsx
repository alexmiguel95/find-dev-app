import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

import Loader from '../../components/Loader';

import {
  Container,
  ContentFieldsButtons,
  Field,
  ButtonRegister,
  TextTitle,
  TextBold,
  TextBoldButton,
} from './style';

interface IRegisterData {
  name: string;
  username: string;
  email: string;
  password: string;
  phone_number: string;
  code?: string;
}

const SignUp = ({ navigation }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const [userData, setUserData] = useState<IRegisterData>({
    name: '',
    username: '',
    email: '',
    password: '',
    phone_number: ''
  });

  async function signUp(userData: IRegisterData) {
    const { name, email, password, phone_number } = userData;
    setIsLoad(!isLoad);

    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          email,
          phone_number: '+55' + phone_number
        },
        autoSignIn: {
          enabled: true
        }
      });

      setIsConfirmCode(!isConfirmCode);

    } catch (error) {
      console.error(`❌ Falha no cadastro: ${error.message}`);
    } finally {
      setIsLoad(false);
      console.log('❕ Cadastro encerrado');
    }
  };

  async function confirmSignUp(userData: IRegisterData) {
    setIsLoad(true);
    const { username, code } = userData;

    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate('Lista');
      console.log('✅ Confirmado com sucesso!');
      setIsConfirmCode(false);

    } catch (error) {
      console.error(`❌ Erro ao confirmar: ${error.message}`);
    } finally {
      setIsLoad(false);
      console.log('❕ Confirmação encerrada');
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
          <>
            {
              !isConfirmCode ? (
                <Container>
                  <ContentFieldsButtons>
                    <TextBold>Nome:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, name: value })}
                      keyboardType='default'
                    />
                  </ContentFieldsButtons>

                  <ContentFieldsButtons>
                    <TextBold>Email:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, email: value, username: value })}
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

                  <ContentFieldsButtons>
                    <TextBold>Celular:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, phone_number: value })}
                      keyboardType='phone-pad'
                    />
                  </ContentFieldsButtons>

                  <ContentFieldsButtons>
                    <ButtonRegister
                      onPress={() => signUp(userData)}
                    >
                      <TextBoldButton>CADASTRAR</TextBoldButton>
                    </ButtonRegister>
                  </ContentFieldsButtons>
                </Container>
              ) : (
                <Container>
                  <TextTitle>
                    Confirmar código:
                  </TextTitle>

                  <ContentFieldsButtons>
                    <TextBold>Código:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, code: value })}
                      keyboardType='numeric'
                    />
                  </ContentFieldsButtons>

                  <ContentFieldsButtons>
                    <ButtonRegister
                      onPress={() => confirmSignUp(userData)}
                    >
                      <TextBoldButton>CONFIRMAR</TextBoldButton>
                    </ButtonRegister>
                  </ContentFieldsButtons>
                </Container>
              )
            }
          </>
        )
      }
    </>
  );
}


export default SignUp;
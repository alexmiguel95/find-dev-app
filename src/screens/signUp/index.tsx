import { useState } from 'react';
import { Auth } from 'aws-amplify';

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
  username: string;
  email: string;
  password: string;
  phone_number: string;
  code?: string;
}

const SignUp = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const [userData, setUserData] = useState<IRegisterData>({
    username: '',
    email: '',
    password: '',
    phone_number: ''
  });

  async function signUp(userData: IRegisterData) {
    const { username, email, password, phone_number } = userData;
    setIsLoad(!isLoad);

    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number
        },
        autoSignIn: {
          enabled: true
        }
      })

      setIsConfirmCode(!isConfirmCode);

    } catch (error) {
      console.error(`❌ Falha no cadastro: ${error.message}`);
    } finally {
      setIsLoad(false);
      console.log('❕ Cadastro encerrado');
    }
  };

  async function confirmSignUp(userData: IRegisterData) {
    setIsLoad(!isLoad);
    const { username, code } = userData;

    try {
      Auth.confirmSignUp(username, code);
      console.log('✅ Confirmado com sucesso!');
    } catch (error) {
      console.error(`❌ Erro ao confirmar: ${error.message}`);
    } finally {
      setIsLoad(false)
      console.log('❕ Confirmação encerrada');
    }
  }

  return (
    <>
      {
        isLoad ? (
          <Container>
            <TextTitle>
              Aguarde Carregando...
            </TextTitle>
          </Container >
        ) : (
          <>
            {
              !isConfirmCode ? (
                <Container>
                  <ContentFieldsButtons>
                    <TextBold>Nome:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, username: value })}
                      value={userData.username}
                      keyboardType='default'
                    />
                  </ContentFieldsButtons>

                  <ContentFieldsButtons>
                    <TextBold>Email:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, email: value })}
                      value={userData.email}
                      keyboardType='email-address'
                    />
                  </ContentFieldsButtons>

                  <ContentFieldsButtons>
                    <TextBold>Senha:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, password: value })}
                      value={userData.password}
                      secureTextEntry={true}
                      keyboardType='default'
                    />
                  </ContentFieldsButtons>

                  <ContentFieldsButtons>
                    <TextBold>Celular:</TextBold>
                    <Field
                      onChangeText={value => setUserData({ ...userData, phone_number: value })}
                      value={userData.phone_number}
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
                      value={userData.code}
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
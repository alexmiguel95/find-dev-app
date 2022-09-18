import {
  Container,
  ContentFieldsButtons,
  Field,
  ButtonRegister,
  TextBold,
  TextBoldButton,
} from './style';

const SignUp = () => {
  return (
    <Container>
      <ContentFieldsButtons>
        <TextBold>Nome:</TextBold>
        <Field />
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <TextBold>Email:</TextBold>
        <Field />
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <TextBold>Senha:</TextBold>
        <Field />
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <TextBold>Celular:</TextBold>
        <Field />
      </ContentFieldsButtons>

      <ContentFieldsButtons>
        <ButtonRegister
          onPress={() => alert('Cadastrar')}
        >
          <TextBoldButton>CADASTRAR</TextBoldButton>
        </ButtonRegister>
      </ContentFieldsButtons>
    </Container>
  );
}

export default SignUp;
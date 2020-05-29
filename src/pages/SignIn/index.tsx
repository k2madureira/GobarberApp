import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title> Faça seu logon </Title>

        <Input name="email" icon="mail" placeholder="E-mail" />

        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('click');
          }}
        >
          Entrar
        </Button>

        <ForgotPassword
          onPress={() => {
            console.log('Click');
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>

      <CreateAccountButton
        onPress={() => {
          console.log('click');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

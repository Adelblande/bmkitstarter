import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { Container, Input, TextButton, Button, Logo } from './styles';
import logo from '../../assets/logo.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let emailRef = useRef();
  let passwordRef = useRef();

  const handlerEmailPassword = () => {
    setEmail(emailRef.current._lastNativeText)
    setPassword(passwordRef.current._lastNativeText)
    console.log(email, password);
  }

  useEffect(() => {
    async function handlerLogin() {

    }
    handlerLogin()
  }, [email])

  return (
    <Container>
      <StatusBar hidden />
      <Logo source={logo} resizeMode="contain" />
      <Input
        ref={emailRef}
        placeholder="E-mail"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        ref={passwordRef}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button onPress={handlerEmailPassword}>
        <TextButton>Login</TextButton>
      </Button>
    </Container>
  );

}

export default Login;

import { Container } from '@/styles/GlobalStyle';
import React, { useEffect } from 'react';
import { Title } from './styled';
// import axios from '@/services/axios'

function Login() {
  useEffect(() => {}, []);

  return (
    <Container>
      <Title>
        Login
        <small> Test</small>
      </Title>
      <p>
        Eu ea nisi est excepteur non quis cillum deserunt commodo commodo
        laboris.
      </p>
      <button type="submit">Send</button>
    </Container>
  );
}

export default Login;

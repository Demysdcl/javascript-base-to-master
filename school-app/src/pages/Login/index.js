import { Container } from '@/styles/GlobalStyle';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './styled';
// import axios from '@/services/axios'

function Login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CLICKED_BUTTON',
    });
  };

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
      <button type="button" onClick={handleClick}>
        Send
      </button>
    </Container>
  );
}

export default Login;

import LabelInput from '@/components/LabelInput';
import * as actions from '@/store/modules/auth/actions';
import { Container } from '@/styles/GlobalStyle';
import { get } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Form } from './styled';

function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = () => {
    let hasError = false;

    if (password.length < 6 || password.length > 80) {
      hasError = true;
      toast.error('Invalid password');
    }

    if (!isEmail(email)) {
      hasError = true;
      toast.error('Invalid e-mail');
    }

    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) return;
    dispatch(actions.getTokenRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <LabelInput
          title="E-mail"
          setValue={setEmail}
          value={email}
          type="email"
          placeholder="Your e-mail"
        />
        <LabelInput
          title="Password"
          setValue={setPassword}
          value={password}
          type="password"
          placeholder="Your password"
        />
        <button type="submit">Sign in</button>
      </Form>
    </Container>
  );
}

export default Login;

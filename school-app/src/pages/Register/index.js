import LabelInput from '@/components/LabelInput';
import {
  createUserRequest,
  updateUserRequest
} from '@/store/modules/auth/actions';
import { Container } from '@/styles/GlobalStyle';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Form } from './styled';

function Register() {
  const dispatch = useDispatch();
  const id = useSelector(({ auth }) => auth.user.id);
  const nameStored = useSelector(({ auth }) => auth.user.name);
  const emailStored = useSelector(({ auth }) => auth.user.email);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName(nameStored);
    setEmail(emailStored);
  }, [nameStored, emailStored]);

  const isValid = () => {
    let hasError = false;

    if (name && (name.length < 2 || name.length > 255)) {
      hasError = true;
      toast.error('The name must have between 2 and 255 characters');
    }

    if (password && (password.length < 6 || password.length > 80)) {
      hasError = true;
      toast.error('The password must have between 2 and 80 characters');
    }

    if (!email || !isEmail(email)) {
      hasError = true;
      toast.error('The e-mail is invalid');
    }

    return !hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid()) return;

    if (id) {
      dispatch(
        updateUserRequest({
          id,
          name,
          email,
          password,
        }),
      );
    } else {
      dispatch(createUserRequest({ name, email, password }));
    }
  };

  return (
    <Container>
      <h1>{id ? 'Edit your count' : 'Create your count'}</h1>
      <Form onSubmit={handleSubmit}>
        <LabelInput
          placeholder="Your name"
          title="Name"
          value={name}
          setValue={setName}
        />
        <LabelInput
          type="email"
          placeholder="Your e-mail"
          title="Email"
          value={email}
          setValue={setEmail}
        />
        <LabelInput
          type="password"
          placeholder="Your password"
          title="Password"
          value={password}
          setValue={setPassword}
        />

        <button type="submit">{id ? 'Save edition' : 'Create my count'}</button>
      </Form>
    </Container>
  );
}

export default Register;

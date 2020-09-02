import LabelInput from '@/components/LabelInput';
import axios from '@/services/axios';
import history from '@/services/history';
import { Container } from '@/styles/GlobalStyle';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Form } from './styled';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = () => {
    let hasError = false;

    if (name.length < 2 || name.length > 255) {
      hasError = true;
      toast.error('The name must have between 2 and 255 characters');
    }

    if (password.length < 6 || password.length > 80) {
      hasError = true;
      toast.error('The password must have between 2 and 80 characters');
    }

    if (!isEmail(email)) {
      hasError = true;
      toast.error('The e-mail is invalid');
    }

    return !hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) return;

    try {
      const response = await axios.post('/users', { name, password, email });
      toast.success(`Created count successfully to ${response.data.name} `);
      history.push('/login');
    } catch (error) {
      if (error.response) {
        const { errors } = error.response.data;
        errors.forEach((item) => {
          toast.error(item);
        });
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <Container>
      <h1>Create your count</h1>
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

        <button type="submit">Create my count</button>
      </Form>
    </Container>
  );
}

export default Register;

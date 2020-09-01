import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${colors.errorColor}
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 480px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

import React from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App;

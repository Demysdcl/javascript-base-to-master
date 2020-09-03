import { neutralColor, primaryColor } from '@/styles/colors';
import styled from 'styled-components';

export const DialogContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: ${primaryColor};
  min-width: 350px;
  border-radius: 4px;

  header {
    padding: 10px;
    font-size: 1.5rem;
  }

  section {
    border: 0.5px solid ${primaryColor};
    border-right: 0;
    border-left: 0;
    display: flex;
    justify-content: center;
    padding: 50px 10px;
    font-size: 1.3rem;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px;

    button {
      margin-left: 15px;
      min-width: 80px !important;
    }

    .cancel {
      background-color: ${neutralColor};
      color: #000;
    }
  }
`;

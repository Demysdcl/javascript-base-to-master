import { primaryColor } from '@/styles/colors';
import styled from 'styled-components';

export const Label = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border-color: ${primaryColor};
    }
  }
`;

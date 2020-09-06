import { primaryColor } from '@/styles/colors';
import styled from 'styled-components';

export const StudentContainer = styled.div`
  color: ${primaryColor};
  background-color: #fff;
  padding: 20px 0;
  border-radius: 4px;
  min-width: 400px;

  header {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${primaryColor};
  }

  .body-student {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 1.5rem;
    padding: 10px 20px;
    border-bottom: 1px solid ${primaryColor};

    label {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 1.2rem;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20px;

    button {
      margin-right: 20px;
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: 0 0 20px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: absolute;
    bottom: -12px;
    color: #fff;
    background-color: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: transform 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }

    input {
      display: none;
    }
  }
`;

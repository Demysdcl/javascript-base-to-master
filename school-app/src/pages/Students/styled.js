import { primaryColor } from '@/styles/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StudentContainer = styled.div`
  margin-top: 20px;
  position: relative;

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    align-self: flex-start;
  }

  svg {
    margin-right: 10px;
  }

  a {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewStudent = styled(Link)`
  display: flex;
  padding: 20px;
  background-color: ${primaryColor};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 120px;
`;

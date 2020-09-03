import { primaryColor } from '@/styles/colors';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;

export const Tooltip = styled.span`
  &:hover {
    &::after {
      display: block;
    }
  }

  &::after {
    content: ${(props) => props.tooltip || 'Insert a tooltip'};

    padding: 5px;
    border-radius: 2px;
    position: absolute;
    background-color: #fff;
    color: ${primaryColor};
    top: 80%;
    transform: translateX(-50%);
    display: none;
    font-size: 0.9rem;
    font-weight: normal;
  }
`;

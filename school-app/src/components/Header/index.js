import React from 'react';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="home">
        <FaHome size={24} />
      </a>
      <a href="home">
        <FaSignInAlt size={24} />
      </a>
      <a href="home">
        <FaUserAlt size={24} />
      </a>
      <a href="home">
        <FaSignOutAlt size={24} />
      </a>
    </Nav>
  );
}

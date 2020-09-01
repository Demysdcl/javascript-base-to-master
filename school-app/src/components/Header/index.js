import React from 'react';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link href="home">
        <FaHome size={24} />
      </Link>
      <Link href="home">
        <FaSignInAlt size={24} />
      </Link>
      <Link href="home">
        <FaUserAlt size={24} />
      </Link>
      <Link href="home">
        <FaSignOutAlt size={24} />
      </Link>
    </Nav>
  );
}

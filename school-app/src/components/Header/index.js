import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav, Tooltip } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <Tooltip tooltip="'Students list'">
          <FaHome size={24} />
        </Tooltip>
      </Link>
      <Link to="/register">
        <Tooltip tooltip="'Create or update user'">
          <FaUserAlt size={24} />
        </Tooltip>
      </Link>
      <Link to="/login">
        <Tooltip tooltip="'Login'">
          <FaSignInAlt size={24} />
        </Tooltip>
      </Link>

      {/* <Link to="/signout">
        <FaSignOutAlt size={24} />
      </Link> */}
    </Nav>
  );
}

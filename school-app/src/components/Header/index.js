import { getTokenFailure } from '@/store/modules/auth/actions';
import React from 'react';
import { FaHome, FaPowerOff, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Tooltip } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(getTokenFailure());

  return (
    <Nav>
      <Link to="/">
        <Tooltip tooltip="'Students list'">
          <FaHome size={24} />
        </Tooltip>
      </Link>
      <Link to="/register">
        <Tooltip
          tooltip={isLoggedIn ? "'Update your count'" : "'Create your count'"}
        >
          <FaUserAlt size={24} />
        </Tooltip>
      </Link>
      {isLoggedIn ? (
        <Link to="/login" onClick={handleClick}>
          <Tooltip tooltip="'logout'">
            <FaPowerOff size={24} />
          </Tooltip>
        </Link>
      ) : (
        <Link to="/login">
          <Tooltip tooltip="'Login'">
            <FaSignInAlt size={24} />
          </Tooltip>
        </Link>
      )}

      {/* */}
    </Nav>
  );
}

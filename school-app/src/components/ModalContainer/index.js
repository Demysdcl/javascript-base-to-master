import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function ModalContainer({ children }) {
  return (
    <ModalContent>
      <div>{children}</div>
    </ModalContent>
  );
}

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

const ModalContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function ModalContainer({ show, children }) {
  return (
    <ModalContent show={show}>
      <div>{children}</div>
    </ModalContent>
  );
}

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  show: PropTypes.bool.isRequired,
};

const ModalContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 2rem;
  transition: all 0.6s;

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

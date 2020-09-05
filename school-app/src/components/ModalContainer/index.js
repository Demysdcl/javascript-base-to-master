import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function ModalContainer({ show, children, zIndex }) {
  return (
    <ModalContent show={show} zIndex={zIndex}>
      <div className="mainContainer">{children}</div>
    </ModalContent>
  );
}

ModalContainer.defaultProps = {
  zIndex: 1,
};

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  show: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
};

const ModalContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
  font-size: 2rem;
  transition: all 0.6s;

  .mainContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: ${(props) => props.zIndex};
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`;

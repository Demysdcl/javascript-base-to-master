import PropTypes from 'prop-types';
import React from 'react';
import ModalContainer from '../ModalContainer';
import { DialogContainer } from './styled';

export default function ConfirmDialog({
  show,
  title,
  message,
  yesFunction,
  noFunction,
}) {
  return (
    <ModalContainer show={show}>
      <DialogContainer>
        <header>{title}</header>
        <section>{message}</section>
        <footer>
          <button className="cancel" type="button" onClick={noFunction}>
            No
          </button>
          <button type="button" onClick={yesFunction}>
            Yes
          </button>
        </footer>
      </DialogContainer>
    </ModalContainer>
  );
}

ConfirmDialog.defaultProps = {
  show: false,
  message: 'Do you have sure?',
  title: 'Confirmation',
};

ConfirmDialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  yesFunction: PropTypes.func.isRequired,
  noFunction: PropTypes.func.isRequired,
};

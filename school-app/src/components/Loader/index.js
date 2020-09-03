import React from 'react';
import { useSelector } from 'react-redux';
import ModalContainer from '../ModalContainer';

export default function Loader() {
  const isLoading = useSelector((state) => state.loading);

  return (
    <>
      <ModalContainer show={isLoading}>
        <span>Loading...</span>
      </ModalContainer>
    </>
  );
}
